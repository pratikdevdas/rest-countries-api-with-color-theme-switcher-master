import axios from 'axios'
import React,{ useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Country = () => {
  // const location = useLocation()
  const id = useParams().id.toLowerCase()
  console.log(id, typeof(id))
  // const name = location.pathname.split('/')[1]
  const navigate = useNavigate()
  const [country,setCountry] = useState({})
  useEffect(() => {
    const getCountry = async() => {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${id.toLowerCase()}`)
        console.log(res)
        setCountry(res.data)
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


  if (country?.[0]?.name?.common){
    // currenct according to api
    let currencyType, languageType = [], resborders
    // Bracket notation has been used
    currencyType = Object.keys(country[0]?.currencies)[0]

    for (let properties in country[0].languages){
      languageType.push(country[0].languages[properties])
    }

    let neigbours = country[0]?.borders ? country[0]?.borders.map(n => n.toLowerCase()).toString() : '404'
    console.log(neigbours)

    // eslint-disable-next-line no-inner-declarations
    async function dataFetch(fd){
      try {
        resborders = await axios.get('https://restcountries.com/v3.1/alpha?codes=col,pe,at')
        console.log(fd,resborders)

        for(let name in resborders.data){
          console.log(fd, resborders.data[name].name.common)
        }
      } catch (err){
        console.log(err)
      }
    }

    dataFetch('ggfd')

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
              <div className='country-info-bottom'><b>Border Countries: </b>
                {country[0]?.borders.map(n => <button  className='backButton' key={n}>{n}</button> )}
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
