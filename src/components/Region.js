import { useState } from 'react'
import { ShowRegions } from './Toggle'
import Countries from './Countries'

const Region = ({ countries }) => {

  const [regionName, setRegionName] = useState('')
  const [search, setsearch] = useState('')


  const handleChange = (e) => {
    e.preventDefault()
    setsearch(e.target.value)
  }

  const filter = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )

  const region = filter.filter(c => c.region.toLowerCase().includes(regionName.toLowerCase()) )

  return(
    <>
      <div>Region</div>
      search countries
      <input type="text" onChange={handleChange} />
      <ShowRegions buttonLabel='show' buttonLabel2='hide'>
        <div>
          <button onClick={() => setRegionName('america')}>AMERICA</button>
          <button onClick={() => setRegionName('africa')}>AFRICA</button>
          <button onClick={() => setRegionName('asia')}>ASIA</button>
          <button onClick={() => setRegionName('europe')}>EUROPE</button>
          <button onClick={() => setRegionName('oceania')}>OCEANIA </button>
        </div>
      </ShowRegions>
      <div className="container">
        <Countries region={region}/>
      </div></>
  )
}

export default Region
