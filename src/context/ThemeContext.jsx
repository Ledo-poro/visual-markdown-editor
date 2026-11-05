import React, { createContext, useContext, useEffect, useState } from "react";
import { THEMES } from "../data/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeIndex, setThemeIndex] = useState(() => {
        const saved = localStorage.getItem("selectedTheme");
        const found = THEMES.findIndex(t => t.id === saved);
        return found !== -1 ? found : 0;
    });

    useEffect(() => {
        const currentTheme = THEMES[themeIndex];
        THEMES.forEach(t => document.body.classList.remove(t.id));
        document.body.classList.add(currentTheme.id);
        localStorage.setItem("selectedTheme", currentTheme.id);
    }, [themeIndex]);

    const cycleTheme = () => {
        setThemeIndex(prev => (prev + 1) % THEMES.length);
    };

    return (
        <ThemeContext.Provider value={{ theme: THEMES[themeIndex], themeIndex, setThemeIndex, cycleTheme, themes: THEMES }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
