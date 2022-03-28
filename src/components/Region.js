import { useState } from 'react'
import { ShowRegions } from './Toggle'
import Countries from './Countries'

const Region = ({ filter }) => {

  const [regionName, setRegionName] = useState('')

  const region = filter.filter(c => c.region.toLowerCase().includes(regionName.toLowerCase()) )

  return(
    <>
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
