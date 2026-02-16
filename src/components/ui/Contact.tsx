"use client";

import { siteConfig } from "@/data/portfolio";

export default function Contact() {
    return (
        <section id="contact">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                Contact
            </h2>
            <div className="flex flex-col gap-2 text-sm">
                <a
                    href={`mailto:${siteConfig.email}`}
                    className="underline underline-offset-4 decoration-border hover:decoration-ink"
                >
                    {siteConfig.email}
                </a>
                <div className="flex gap-6 mt-1">
                    <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-ink"
                    >
                        GitHub
                    </a>
                    <a
                        href={siteConfig.gitlab}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-ink"
                    >
                        GitLab (FHNW)
                    </a>
                    <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-ink"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
