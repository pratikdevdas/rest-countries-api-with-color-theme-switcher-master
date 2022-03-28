import React, { useState, useEffect } from 'react'
import Region from './components/Region'
import axios from 'axios'
import Country from './components/Country'

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'


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
            <Route path="/" element={<Region countries={countries}/>}/>
          </Routes>
        </Router>
      </div>
    </div>

  )
}
