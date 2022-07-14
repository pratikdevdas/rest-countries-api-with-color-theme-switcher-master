import React from 'react'
import { Link } from 'react-router-dom'
const Countries = ({ region }) => {


  return (
    <div className='countries'>
      {region.map((c) => (
        <div className="box" key={c.name.common}>
          <Link to={`${c.name.common}`}>
            <div>
              <img src={c.flags.png} alt="country-flag" className='country-flag'/>
            </div>
            <div className='country-info'>
              <h3>
                {c.name.common}
              </h3>
              <p><b>Population:</b> {c.population}</p>
              <p><b>Capital:</b> {c.region}</p>
              <p><b>Region:</b> {c.capital}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Countries