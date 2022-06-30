/* eslint-disable react/jsx-key */
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const Country = ({ countries }) => {
  const name = useParams().id
  const singleCountryArray = countries.find((n) => n.name.common === name)
  const navigate = useNavigate()

  const backButton = (event) => {
    event.preventDefault()
    navigate('/')
  }
  // for (i=1;)
  console.log(singleCountryArray)

  console.log(countries)

  return (
    <div key={singleCountryArray.name.common}>
      <button onClick={backButton}>back button</button>
      <img src={singleCountryArray.flags.png} alt="" />
      {singleCountryArray.name.common}
      {/* native name {singleCountryArray.nativeName.spa.common} */}
      population{singleCountryArray.population}
      region{singleCountryArray.region}
      subregion{singleCountryArray.subregion}
      capital{singleCountryArray.capital}
      {/* topleveldomain{singleCountryArray.tld[0]} */}
      {/* currency{singleCountryArray.currencies[0].name} */}
      {/* languages{singleCountryArray.languages.spa} */}
      {/* <div>botder countries{singleCountryArray.borders]}</div> */}
      {/* eslint-disbale-next-line */}
      {/* <div>{singleCountryArray.borders.map(b => <li>
        {b}
      </li>
      )}</div> */}
    </div>
  )
}

export default Country
