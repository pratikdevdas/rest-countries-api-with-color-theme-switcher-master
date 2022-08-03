import React, { useState, useEffect } from 'react'

export const ThemeContext = React.createContext({})

const ThemeProvider = ({ children }) => {
  // updating context with useState : https://codepen.io/pratik-social/pen/PoRRZoK?editors=0010
  const [theme, setTheme] = useState('light')

  const localStorage = window.localStorage

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem('globalTheme')
    if (savedThemeLocal) {
      setTheme(savedThemeLocal)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('globalTheme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider