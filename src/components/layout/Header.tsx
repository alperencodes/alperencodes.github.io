"use client";

import {navLinks} from "@/data/portfolio";
import CursorTarget from "@/components/ui/CursorTarget";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 px-10 md:px-12 gap-4 md:gap-0">
            <CursorTarget as="span" borderRadius={4}>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                        src="/AC.png"
                        alt="Alperen Codes Logo"
                        width={32}
                        height={32}
                        priority
                    />
                </a>
            </CursorTarget>
            <nav className="flex gap-6">
                {navLinks.map((link) => (
                    <CursorTarget key={link.href} as="span" borderRadius={4}>
                    <a
                        href={link.href}
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-ink"
                    >
                        {link.label}
                    </a>
                    </CursorTarget>
                ))}
            </nav>
        </header>
    );
}
