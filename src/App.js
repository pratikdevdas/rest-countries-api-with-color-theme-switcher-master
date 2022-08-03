import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import './sass/main.scss'
import { Navbar } from './components/Navbar'
import Country from './components/Country'
import Search from './components/Search'
import ThemeSetter from './ThemeSetter'
import ThemeProvider from './context/ThemeProvider'

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

function App() {

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
    <ThemeProvider>
      <div className='myClass'>
        <Router>
          <ThemeSetter />
          <Navbar/>
          <Routes>
            <Route path="/:id" element={<Country countries={countries}/>} />
            <Route path="/" element={<Search countries={countries}/>}/>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>

  )
}

export default App

