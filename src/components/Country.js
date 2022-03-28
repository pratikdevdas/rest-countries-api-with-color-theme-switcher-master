import React from 'react'
import { useParams } from 'react-router-dom'

const Country = ({ countries }) => {
  const name = useParams().id
  const singleCountryArray = countries.find(n => n.name.common === name)

  console.log(singleCountryArray.name.common)
  return (
    <div>{singleCountryArray.name.common}</div>
  )
}

export default Country