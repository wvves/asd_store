import { ThemeContext } from "./ThemeContext";
import React from "react";
import darkMode from '../../theming/dark/dark.module.css';
import lightMode from '../../theming/light/light.module.css';

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [currentTheme, setCurrentTheme] = React.useState<string | null>(localStorage.getItem('theme'))
  const setTheme = (currentTheme: string) => {
    localStorage.setItem('theme', currentTheme)
    setCurrentTheme(currentTheme)
  }
  const themeValue = React.useMemo(() => ({theme: currentTheme, setTheme}), [currentTheme])

  return(
    <ThemeContext.Provider value={themeValue}>
      <div className={currentTheme === 'dark' ? darkMode.darkTheme : lightMode.lightTheme}>
      {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;