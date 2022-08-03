import axios from 'axios'
import React,{ useEffect,useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Country = () => {

  const id = useParams().id.toLowerCase()
  const navigate = useNavigate()

  const [country,setCountry] = useState({})
  const [borders,setBorders] = useState({})

  useEffect(() => {
    const getCountry = async() => {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${id.toLowerCase()}`)
        setCountry(res.data)
        const borderValues = res.data[0]?.borders?.toString().toLowerCase()
        const res2 = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${borderValues}`)
        setBorders(res2.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCountry()
  }, [id])
  // neigbours

  const backButton = (event) => {
    event.preventDefault()
    navigate('/')
  }

  // extracting border countries
  // implemented with array taking multiple input (brainstormed this myself :p)
  let borderCountryName = []
  for (let key in borders){
    let countryName = borders?.[key]?.name.common
    let countryCode = borders?.[key]?.cca3.toLowerCase()
    borderCountryName.push({ countryName, countryCode })
  }
  console.log(borderCountryName)
  if (country?.[0]?.name?.common){
    // currenct according to api
    let currencyType, languageType = []
    // Bracket notation has been used
    currencyType = country[0].currencies ? Object.keys(country[0]?.currencies)[0] : undefined
    for (let properties in country[0]?.languages){
      languageType.push(country[0].languages[properties])
    }

    let nativeNameType = country[0].name.nativeName ? Object.keys(country[0].name.nativeName)[0] : undefined

    return (
      <div className='country-page page'>
        <div className='country-page-container'>
          <button onClick={backButton} className='backButton myClassElement'>
            <FontAwesomeIcon icon={faArrowLeft}/>
            <span>back</span> </button>
          <div className='country-containers'>
            <div className='flag-container'>
              <img src={country[0].flags.png} className='country-flag-single' alt="" />
            </div>
            <div className='country-inpage-info'>
              <h2>{country[0].name.common}</h2>
              <div className='country-info-top'>
                <div>
                  <p><b>Native Name:</b> {country[0]?.name?.nativeName?.[nativeNameType]?.common}</p>
                  <p><b>Populaton:</b> {country[0]?.population}</p>
                  <p><b>Region:</b> {country[0]?.region}</p>
                  <p><b>Sub Region:</b> {country[0]?.subregion}</p>
                  <p><b>Capital:</b> {country[0]?.capital}</p>
                </div>
                <div>
                  <p><b>Top Level Domain:</b> {country[0]?.tld[0]}</p>
                  <p><b>Currencies:</b> {country[0]?.currencies?.[currencyType].name}</p>
                  <p><b>Language:</b> {languageType.map((t,i) => <span key={t}>{t}{i === languageType.length - 1 ? '' : ','} </span>)}</p>
                </div>
              </div>
              <div className='country-info-bottom'><b>Border Countries: </b>
                {borderCountryName.length !== 0 ? borderCountryName.map(n => <Link key={n.countryCode} to={`/${n.countryCode}`} className="borderButton myClassElement">{n.countryName}</Link>) : <>No Border Countries</>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <>Loading...</>
  }
}

export default Country
