import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Country = ({ countries }) => {
  const name = useParams().id
  const singleCountryArray = countries.find(n => n.name.common === name)
  const navigate = useNavigate()

  const backButton = (event) => {
    event.preventDefault()
    navigate('/')
  }

  console.log(singleCountryArray.name.common)
  return (
    <div>
      <button onClick={backButton}>back button</button>

      <img src={singleCountryArray.flags.png} alt="" />
      {singleCountryArray.name.common}
      {/* native name {singleCountryArray.nativeName.spa.common} */}
        population{singleCountryArray.population}
        region{singleCountryArray.region}
        subregion{singleCountryArray.subregion}
        capital{singleCountryArray.capital}
        topleveldomain{singleCountryArray.tld[0]}
      {/* currency{singleCountryArray.currencies[0].name} */}
      {/* languages{singleCountryArray.laguages.spa} */}
      <div>botder countries{singleCountryArray.borders}</div>
    </div>
  )
}

export default Country