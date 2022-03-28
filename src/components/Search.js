import React, { useState } from 'react'
import Region from './Region'

const Search = ({ countries }) => {
  const [search, setsearch] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setsearch(e.target.value)
  }

  const filter = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='search'>
      <div className='search--box'>
        <input type="text" placeholder='🔍 search for a country...' onChange={handleChange} />
      </div>
      <div>
        <Region filter={filter} />
      </div>
    </div>
  )
}

export default Search
