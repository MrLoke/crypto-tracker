import { useState, useEffect, useContext, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'theme/GlobalStyle'
import { theme } from 'theme/theme'

const ThemeContext = createContext()

export const useTheme = useContext(ThemeContext)

export const ThemeModeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem('theme') || 'lightTheme' // useState lazy initialization trick
  )
  
  useEffect(() => {
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === 'lightTheme') {
        return 'darkTheme'
      } else {
        return 'lightTheme'
      }
    })
  }

  const value = {
    themeMode,
    toggleTheme,
  }

  const customTheme = theme[themeMode]

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={customTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
