"use client";

import {
    createContext,
    useContext,
    useState,
    useCallback,
    type ReactNode,
} from "react";

// types

export interface CursorTarget {
    x: number;
    y: number;
    width: number;
    height: number;
    borderRadius: number;
}

interface CursorContextValue {
    target: CursorTarget | null;
    registerHover: (el: HTMLElement, borderRadius?: number) => void;
    clearHover: () => void;
}

// context

const CursorContext = createContext<CursorContextValue>({
    target: null,
    registerHover: () => { },
    clearHover: () => { },
});

export function useCursor() {
    return useContext(CursorContext);
}

// provider

export function CursorProvider({ children }: { children: ReactNode }) {
    const [target, setTarget] = useState<CursorTarget | null>(null);

    const registerHover = useCallback((el: HTMLElement, borderRadius = 6) => {
        const rect = el.getBoundingClientRect();
        setTarget({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width,
            height: rect.height,
            borderRadius,
        });
    }, []);

    const clearHover = useCallback(() => {
        setTarget(null);
    }, []);

    return (
        <CursorContext.Provider value={{ target, registerHover, clearHover }}>
            {children}
        </CursorContext.Provider>
    );
}
