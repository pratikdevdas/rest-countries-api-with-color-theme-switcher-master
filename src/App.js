import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Region from './Region'
import { Navbar } from './Navbar'

function App() {

  const [countries, setcountries] = useState([])
  const [search, setsearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setcountries(response.data))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setsearch(e.target.value)
  }

  const filter = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div>
      <Navbar/>
      <div>
      search countries
        <input type="text" onChange={handleChange} />
      </div>
      <div>Region</div>
      <Region filter={filter}/>
    </div>
  )
}

export default App
