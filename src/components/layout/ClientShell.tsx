"use client";

import { CursorProvider } from "@/components/ui/CursorContext";
import Cursor from "@/components/ui/Cursor";
import type { ReactNode } from "react";

export default function ClientShell({ children }: { children: ReactNode }) {
    return (
        <CursorProvider>
            <Cursor />
            {children}
        </CursorProvider>
    );
}