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
    <div>
      search countries
      <input type="text" onChange={handleChange} />
      <Region filter={filter} />
    </div>
  )
}

export default Search
