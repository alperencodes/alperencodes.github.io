"use client";

import { siteConfig } from "@/data/portfolio";
import CursorTarget from "@/components/ui/CursorTarget";

export default function Contact() {
    return (
        <section id="contact">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                Contact
            </h2>
            <div className="flex flex-col gap-2 text-sm">
                <CursorTarget as="span" borderRadius={4} style={{ width: "fit-content" }}>
                <a
                    href={`mailto:${siteConfig.email}`}
                    className="underline underline-offset-4 decoration-border hover:decoration-ink"
                >
                    {siteConfig.email}
                </a>
                </CursorTarget>
                <div className="flex gap-6 mt-1">
                    <CursorTarget as="span" borderRadius={4}>
                    <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-ink"
                    >
                        GitHub
                    </a>
                    </CursorTarget>
                    <CursorTarget as="span" borderRadius={4}>
                    <a
                        href={siteConfig.gitlab}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-ink"
                    >
                        GitLab (FHNW)
                    </a>
                    </CursorTarget>
                    <CursorTarget as="span" borderRadius={4}>
                    <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-ink"
                    >
                        LinkedIn
                    </a>
                    </CursorTarget>
                </div>
            </div>
        </section>
    );
}
