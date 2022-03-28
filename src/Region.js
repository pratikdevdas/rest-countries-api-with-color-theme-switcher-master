import { useState } from 'react'
import { ShowRegions } from './Toggle'

const Region = ({ filter }) => {
  const [regionName, setRegionName] = useState('')
  const region = filter.filter(c => c.region.toLowerCase().includes(regionName.toLowerCase()) )

  const randomstyles = { maxWidth: '100%', maxHeight:'50%' }
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
        {region.map((c) => (
          <div className="box" key={c.id}>
            <div>
              <img src={c.flags.png} alt="" style={randomstyles} />
            </div>
            <div>{c.name.common}</div>
            <div>{c.population}</div>
            <div>{c.region}</div>
            <div>{c.capital}</div>
          </div>
        ))}
      </div></>
  )
}

export default Region
