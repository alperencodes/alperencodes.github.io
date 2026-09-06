import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import sharp from "sharp";

const assets = new URL("../src/assets/about/", import.meta.url);

test("gallery photographs contain no personal metadata", async () => {
  for (const name of ["gym.jpeg", "tennis.jpeg", "monza.jpeg"]) {
    const metadata = await sharp(
      await readFile(new URL(name, assets)),
    ).metadata();
    for (const field of ["exif", "iptc", "xmp", "comments"]) {
      assert.ok(!metadata[field]?.length, `${name} contains ${field} metadata`);
    }
  }
});

test("FC Basel MP4 has only video, no personal metadata, and streams progressively", async () => {
  const data = await readFile(new URL("fc-basel.mp4", assets));
  const boxes = [];
  const containers = new Set([
    "moov",
    "trak",
    "mdia",
    "minf",
    "stbl",
    "edts",
    "udta",
    "meta",
    "ilst",
  ]);

  // Read ISO BMFF box headers; never scan compressed media bytes for tag names.
  function inspect(start, end, parent = "") {
    let offset = start;
    while (offset < end) {
      assert.ok(offset + 8 <= end, "Truncated MP4 box header");
      let size = data.readUInt32BE(offset);
      const type = data.toString("latin1", offset + 4, offset + 8);
      let headerSize = 8;
      if (size === 1) {
        assert.ok(offset + 16 <= end, "Truncated extended MP4 box header");
        size = Number(data.readBigUInt64BE(offset + 8));
        headerSize = 16;
      } else if (size === 0) {
        size = end - offset;
      }
      assert.ok(Number.isSafeInteger(size) && size >= headerSize);
      assert.ok(offset + size <= end, "MP4 box exceeds its container");
      const body = offset + headerSize;
      boxes.push({ type, offset, parent });

      assert.notEqual(type, "uuid", "Unexpected private metadata container");
      // FFmpeg retains an empty metadata shell even with metadata stripped.
      assert.notEqual(parent, "ilst", "MP4 contains a metadata value");
      if (parent === "udta") assert.equal(type, "meta");
      if (parent === "meta") assert.ok(["hdlr", "ilst"].includes(type));
      if (["mvhd", "tkhd", "mdhd"].includes(type)) {
        const timestampEnd = body + (data[body] === 1 ? 20 : 12);
        assert.ok(timestampEnd <= offset + size);
        assert.ok(
          data.subarray(body + 4, timestampEnd).every((byte) => byte === 0),
          `${type} contains recording timestamps`,
        );
      }
      if (type === "hdlr" && parent === "mdia") {
        assert.ok(body + 12 <= offset + size);
        assert.equal(
          data.toString("latin1", body + 8, body + 12),
          "vide",
          "The downloadable MP4 must not include audio or other data tracks",
        );
      }
      if (containers.has(type)) {
        inspect(body + (type === "meta" ? 4 : 0), offset + size, type);
      }
      offset += size;
    }
  }

  inspect(0, data.length);
  assert.equal(boxes.filter(({ type }) => type === "trak").length, 1);
  assert.equal(
    boxes.filter(({ type, parent }) => type === "hdlr" && parent === "mdia")
      .length,
    1,
  );
  const movie = boxes.find(({ type, parent }) => type === "moov" && !parent);
  const media = boxes.find(({ type, parent }) => type === "mdat" && !parent);
  assert.ok(movie && media && movie.offset < media.offset);
});
