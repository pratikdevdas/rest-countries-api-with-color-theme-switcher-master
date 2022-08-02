import React,{ useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './App.css'
import './sass/main.scss'
import { Navbar } from './components/Navbar'
import Country from './components/Country'
import Search from './components/Search'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'


export const initialThemeState = {
  theme: 'light',
  setTheme: () => null
}

const ThemeContext = React.createContext(initialThemeState)

function App() {
  const [theme,setTheme] =  useState(initialThemeState.theme)

  const [countries, setcountries] = useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://restcountries.com/v3.1/all')
      setcountries(res.data)
    }
    fetchData()
  }
  , [])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Router>
          <Navbar/>
          <AppContent/>
          <Routes>
            <Route path="/:id" element={<Country countries={countries}/>} />
            <Route path="/" element={<Search countries={countries}/>}/>
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

export const AppContent = () => {
  return (
    <>
      <ThemeSetter />
      <div className="myClass">
        <h1>Hello World</h1>
      </div>
    </>
  )
}


export const ThemeSetter = () => {
  {theme, setTheme} = useContext(ThemeContext)
  return (
    <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

const themeOptions = [{value: "light"},{value: "dark"}]
export default App
