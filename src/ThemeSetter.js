import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'

export default function ThemeSetter() {
  // fetching data with context
  const { theme, setTheme } = useContext(ThemeContext)

  const handleTheme =(e) => {
    setTheme(e.currentTarget.value)
  }

  return (
    <select value={theme} onChange={handleTheme}>
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  )
}

const themeOptions = [{ value: 'light' }, { value: 'dark' }]
