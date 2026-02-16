"use client";

import React, { useRef, type ReactNode } from "react";
import { useCursor } from "./CursorContext";

interface CursorTargetProps {
    children: ReactNode;
    as?: "div" | "span";
    borderRadius?: number;
    style?: React.CSSProperties;
}

/**
 * wraps any interactive element to make the custom cursor snap to it on hover
 */
export default function CursorTarget({
    children,
    as: Tag = "div",
    borderRadius = 6,
    style,
}: CursorTargetProps) {
    const ref = useRef<HTMLDivElement | HTMLSpanElement>(null);
    const { registerHover, clearHover } = useCursor();

    const handleEnter = () => {
        if (ref.current) registerHover(ref.current, borderRadius);
    };

    return (
        <Tag
            ref={ref as never}
            onMouseEnter={handleEnter}
            onMouseLeave={clearHover}
            style={style}
        >
            {children}
        </Tag>
    );
}
