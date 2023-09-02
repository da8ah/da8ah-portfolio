import { createContext, useState } from "react"

type ThemeType = 'dark' | 'light'

export const ThemeContext = createContext({
    themeMode: 'dark',
    toggleThemeMode: () => { }
})

export default function ThemeProvider(props: { children: JSX.Element }) {
    const [themeMode, setThemeMode] = useState<ThemeType>(localStorage.getItem('theme') as ThemeType || 'dark')

    const toggleThemeMode = () => {
        localStorage.setItem('theme', themeMode === 'dark' ? 'light' : 'dark')
        themeMode === 'dark'
            ? document.documentElement.classList.remove('dark')
            : document.documentElement.classList.add('dark');
        setThemeMode(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
        {props.children}
    </ThemeContext.Provider>
}