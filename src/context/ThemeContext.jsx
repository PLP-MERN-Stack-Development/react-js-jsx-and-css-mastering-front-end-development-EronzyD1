import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
const ThemeContext = createContext();
export function ThemeProvider({children}){ const [storedTheme,setStoredTheme]=useLocalStorage('theme','system'); const [theme,setTheme]=useState(storedTheme); useEffect(()=>{ setStoredTheme(theme); },[theme,setStoredTheme]); useEffect(()=>{ const root=document.documentElement; const sysDark=window.matchMedia('(prefers-color-scheme: dark)').matches; const isDark = theme==='dark' || (theme==='system' && sysDark); root.classList.toggle('dark', isDark); },[theme]); const value = useMemo(()=>({theme,setTheme}),[theme]); return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>; }
export const useTheme = () => useContext(ThemeContext);
