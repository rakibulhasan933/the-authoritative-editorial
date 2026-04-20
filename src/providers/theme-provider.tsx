'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ✅ Pure helper — no DOM side effects
const resolveIsDark = (theme: Theme): boolean =>
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

const updateDOM = (dark: boolean): void => {
    document.documentElement.classList[dark ? 'add' : 'remove']('dark');
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // ✅ Lazy initializers — read DOM/localStorage once, no effect needed
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === 'undefined') return 'system';
        return (localStorage.getItem('theme') as Theme) ?? 'system';
    });

    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        const stored = (localStorage.getItem('theme') as Theme) ?? 'system';
        const dark = resolveIsDark(stored);
        updateDOM(dark); // ✅ sync DOM before first paint
        return dark;
    });

    // ✅ Only side effect left: listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent): void => {
            if (theme === 'system') {
                setIsDark(e.matches);
                updateDOM(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const setTheme = (newTheme: Theme): void => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        const dark = resolveIsDark(newTheme);
        setIsDark(dark);
        updateDOM(dark);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}