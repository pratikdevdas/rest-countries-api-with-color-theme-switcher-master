import axios from 'axios'
import React,{ useEffect,useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

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

  if (country?.[0]?.name?.common){
    // optional-chaining-operator to check if data is fetched or not
    console.log(country[0].name.common)
  }

  const backButton = (event) => {
    event.preventDefault()
    navigate('/')
  }

  if (country?.[0]?.name?.common){
    return (
      <div className='country-page page'>
        <div className='country-page-container'>
          <button onClick={backButton} className='backButton'>back button</button>
          <div className='country-containers'>
            <div className='flag-container'>
              <img src={country[0].flags.png} alt="" />
            </div>
            <div className='country-info'>
              <div className='country-info-top'>
                <div>
                  <h2>{country[0].name.common}</h2>
                  <p><b>Native Name:</b></p>
                  <p><b>Populaton:</b></p>
                  <p><b>Region:</b></p>
                  <p><b>Sub Region:</b></p>
                  <p><b>Capital:</b></p>
                </div>
                <div>
                  <p><b>Top Level Domain:</b></p>
                  <p><b>Currencies:</b></p>
                  <p><b>Language:</b></p>

                </div>
              </div>
              <div className='country-info-bottom'></div>
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
