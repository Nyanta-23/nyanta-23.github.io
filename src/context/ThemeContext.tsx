import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";
import useDarkMode from "../hooks/useDarkMode";

interface ThemeContextType {
    theme: boolean;
    setTheme: (newTheme: boolean) => void;
    isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const { theme, setTheme, isTransitioning } = useDarkMode();

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isTransitioning }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}