import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {

  // fetching data with context
  const { theme, setTheme } = useContext(ThemeContext)

  const handleTheme =() => {
    if(theme === 'dark'){
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  // console.log(theme,themeName)

  return (
    <div className="nav myClassElement">
      <div className="container">
        <div><h1>
          Where in the world?
        </h1>
        </div>
        <div>
          <FontAwesomeIcon icon="fas fa-moon" />
          <FontAwesomeIcon icon={faMoon}/>
          <button onClick={handleTheme} className='myClassElement darkModeText'>Dark Mode</button>
        </div>
      </div>
    </div>
  )
}
