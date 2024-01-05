import React from "react"

type ThemeContextType = {
  theme: string | null,
  setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {}
})