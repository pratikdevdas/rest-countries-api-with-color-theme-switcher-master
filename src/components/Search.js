import React, { useState } from 'react'
import Countries from './Countries'

const Search = ({ countries }) => {
  const [search, setsearch] = useState('')
  const [regionName, setRegionName] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setsearch(e.target.value)
  }

  const filter = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )

  const region = filter.filter(c => c.region.toLowerCase().includes(regionName.toLowerCase()) )

  const handleRegion = (event) => {
    setRegionName(event.target.value)
  }

  return (
    <div className='page'>
      <form className='sortContainer'>
        <input type="text" placeholder='🔍 search for a country...' onChange={handleChange} />
        <select onChange={handleRegion}>
          <option value="">Filter By Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      <div className="country-container">
        <Countries region={region}/>
      </div>
    </div>
  )
}

export default Search
