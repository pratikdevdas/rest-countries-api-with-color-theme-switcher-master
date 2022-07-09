import { useState } from 'react'
import Countries from './Countries'
import './Region.css'
const Region = ({ filter }) => {

  const [regionName, setRegionName] = useState('')

  const region = filter.filter(c => c.region.toLowerCase().includes(regionName.toLowerCase()) )

  console.log(setRegionName)
  const handleRegion = (event) => {
    console.log(event.target.value)
    setRegionName(event.target.value)
  }
  return(
    <>
      <form className='filter--options'>
        <select onChange={handleRegion}>
          <option value="">FilterBy region</option>
          <option value="america">AMERICA</option>
          <option value="africa">AFRICA</option>
          <option value="asia">ASIA</option>
          <option value="europe">EUROPE</option>
          <option value="oceania">OCEANIA</option>
        </select>
        {regionName}
      </form>
      <div className="country-container">
        <Countries region={region}/>
      </div></>
  )
}

export default Region
