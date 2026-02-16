import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";
import ClientShell from "@/components/layout/ClientShell";
import React from "react";

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
                rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        </head>
        <body>
        <div className="paper">
            <ClientShell>
                {children}
            </ClientShell>
        </div>
        </body>
        </html>
    );
}