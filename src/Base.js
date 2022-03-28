import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import Search from './components/Search'


export const Base = () => {
  const [countries, setcountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setcountries(response.data))
  }, [])

  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/:id" element={<Country countries={countries}/>} />
            <Route path="/" element={<Search countries={countries}/>}/>
          </Routes>
        </Router>
      </div>
    </div>

  )
}
