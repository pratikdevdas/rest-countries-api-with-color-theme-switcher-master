import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Search from './components/Search'
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
      .then((response) => {console.log(response)})
  }, [])

  console.log(countries)

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
