"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "./CursorContext";

// consts

const DOT_SIZE = 12;
const SPRING_FAST = { damping: 40, stiffness: 700, mass: 0.4 };

// component

export default function Cursor() {
    const { target } = useCursor();
    const [isDesktop, setIsDesktop] = useState(false);
    const [visible, setVisible] = useState(false);
    const visibleRef = useRef(false);

    // pos. motion values
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smoothed via springs
    const springX = useSpring(cursorX, SPRING_FAST);
    const springY = useSpring(cursorY, SPRING_FAST);

    // size springs
    const springW = useSpring(DOT_SIZE, SPRING_FAST);
    const springH = useSpring(DOT_SIZE, SPRING_FAST);
    const springR = useSpring(DOT_SIZE / 2, SPRING_FAST);

    // detect pointer device

    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDesktop(mq.matches);

        const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    // tracks mouse movement ONLY when not snapped

    useEffect(() => {
        if (!isDesktop) return;

        const onMove = (e: MouseEvent) => {
            // Only follow the mouse when NOT snapped to a target
            if (!target) {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            }
            if (!visibleRef.current) {
                visibleRef.current = true;
                setVisible(true);
            }
        };

        const onLeave = () => {
            visibleRef.current = false;
            setVisible(false);
        };

        const onEnter = () => {
            visibleRef.current = true;
            setVisible(true);
        };

        window.addEventListener("mousemove", onMove);
        document.addEventListener("mouseleave", onLeave);
        document.addEventListener("mouseenter", onEnter);

        return () => {
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseleave", onLeave);
            document.removeEventListener("mouseenter", onEnter);
        };
    }, [isDesktop, target, cursorX, cursorY]);

    // lock position to target element

    useEffect(() => {
        if (target) {
            // Lock cursor to center of hovered element
            cursorX.set(target.x);
            cursorY.set(target.y);
            springW.set(target.width + 12);
            springH.set(target.height + 8);
            springR.set(target.borderRadius + 2);
        } else {
            // Return to dot
            springW.set(DOT_SIZE);
            springH.set(DOT_SIZE);
            springR.set(DOT_SIZE / 2);
            // ensure we stay visible
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setVisible(true);
            visibleRef.current = true;
        }
    }, [target, cursorX, cursorY, springW, springH, springR]);

    // injects cursor:none globally

    useEffect(() => {
        if (!isDesktop) return;

        const style = document.createElement("style");
        style.id = "custom-cursor-hide";
        style.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
        document.head.appendChild(style);

        return () => {
            style.remove();
        };
    }, [isDesktop]);

    // dont render on touch devices

    if (!isDesktop) return null;

    const isSnapped = !!target;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-9999"
            style={{
                x: springX,
                y: springY,
                width: springW,
                height: springH,
                borderRadius: springR,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                opacity: visible ? 1 : 0,
                backgroundColor: isSnapped
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(0, 0, 0, 0.25)",
                borderColor: isSnapped
                    ? "rgba(0, 0, 0, 0.08)"
                    : "rgba(0, 0, 0, 0)",
            }}
            transition={{
                opacity: { duration: 0.1 },
                backgroundColor: { duration: 0.12 },
                borderColor: { duration: 0.12 },
            }}
        />
    );
}
