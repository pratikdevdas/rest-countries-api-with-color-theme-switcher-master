import axios from 'axios'
import React,{ useEffect,useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Country = () => {
  const location = useLocation()
  const name = location.pathname.split('/')[1]
  const navigate = useNavigate()

  const [country,setCountry] = useState({})
  useEffect(() => {
    const getCountry = async() => {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${name.toLowerCase()}?fullText=true`)
        console.log(res.data,res)
        setCountry(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCountry()
  }, [name])


  const backButton = (event) => {
    event.preventDefault()
    navigate('/')
  }

  if (country?.[0]?.name?.common){

    // currenc 1Q2A  according to api
    let currencyType, languageType = []
    // Bracket notation has been used
    currencyType = Object.keys(country[0]?.currencies)[0]

    for (let properties in country[0].languages){
      languageType.push(country[0].languages[properties])
      console.log(languageType)
    }

    return (
      <div className='country-page page'>
        <div className='country-page-container'>
          <button onClick={backButton} className='backButton'>
            <FontAwesomeIcon icon={faArrowLeft}/>
            <span>back</span> </button>
          <div className='country-containers'>
            <div className='flag-container'>
              <img src={country[0].flags.png} className='country-flag-single' alt="" />
            </div>
            <div className='country-info'>
              <h2>{country[0].name.common}</h2>
              <div className='country-info-top'>
                <div>
                  <p><b>Native Name:</b> {country[0].name.nativeName?.kal?.official}</p>
                  <p><b>Populaton:</b> {country[0].population}</p>
                  <p><b>Region:</b> {country[0].region}</p>
                  <p><b>Sub Region:</b> {country[0].subregion}</p>
                  <p><b>Capital:</b> {country[0].capital}</p>
                </div>
                <div>
                  <p><b>Top Level Domain:</b> {country[0]?.tld[0]}</p>
                  <p><b>Currencies:</b> {country[0]?.currencies[currencyType]?.name}</p>
                  <p><b>Language:</b> {languageType.map((t,i) => <span key={t}>{t}{i === languageType.length - 1 ? '' : ','} </span>)}</p>

                </div>
              </div>
              <div className='country-info-bottom'>F
              gdf</div>
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
