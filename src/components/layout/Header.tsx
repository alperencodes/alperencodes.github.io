"use client";

import { siteConfig } from "@/data/portfolio";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-8 px-10 md:px-12">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/" className="text-sm font-bold tracking-tight hover:opacity-100">
                    {siteConfig.name}
                </a>
            <nav className="flex gap-6">
            </nav>
        </header>
    );
}
