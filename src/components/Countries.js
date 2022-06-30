import React from 'react'
import { Link } from 'react-router-dom'
import './Countries.css'
const Countries = ({ region }) => {

  const randomstyles = { maxWidth: '100%', maxHeight:'50%' }

  return (
    <div className='countries'>

      {region.map((c) => (
        <div className="box" key={c.name.common}>
          <Link to={`${c.name.common}`}>
            <div>
              <img src={c.flags.png} alt="" style={randomstyles} />
            </div>
            <div>{c.name.common}</div>
            <div>{c.population}</div>
            <div>{c.region}</div>
            <div>{c.capital}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Countries