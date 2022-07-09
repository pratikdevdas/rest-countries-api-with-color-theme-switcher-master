import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Navbar } from './components/Navbar'
import Country from './components/Country'
import Search from './components/Search'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'


function App() {

  const [countries, setcountries] = useState([])

  useEffect(async() => {
    const res = await axios.get('https://restcountries.com/v3.1/all')
    setcountries(res.data)
  }
  , [])
  return (
    <div id='body'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/countries/:id" element={<Country countries={countries}/>} />
          <Route path="/" element={<Search countries={countries}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
