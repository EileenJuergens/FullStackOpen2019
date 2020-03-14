import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = ({ searchResults }) => {
  const [countrys, setCountrys] = useState(searchResults);
  const [weather, setWeather] = useState({})

  useEffect(() => {
    setCountrys(searchResults);
  }, [searchResults])

  useEffect(() => {
    const API_KEY = '...'
    if (countrys.length === 1) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${countrys[0].capital}`)
        .then(response => setWeather(response.data.current))
    }
  }, [countrys])

  const handleShowOnClick = (country) => {
    setCountrys([country])
  }

  const shortCountry = (country) => {
    return (
      <div key={country.name}>
        <p>{country.name} <button
          onClick={() => handleShowOnClick(country)}>show</button></p>
      </div>
    )
  }

  const longCountry = (country) => {
    return (
      <div key={country.name}>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages:</h2>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
        <img src={country.flag} alt={country.name} style={{ width: '150px' }} />
        <h2>Weather in {country.capital}</h2>
      </div>
    )
  }

  const rows = () => {
    if (countrys.length > 10) {
      return <p>To many matches, specify another filter</p>
    }
    else if (countrys.length > 1 && countrys.length <= 10) {
      return countrys.map(country => shortCountry(country))
    }
    else if (countrys.length === 1) {
      return (
        <>
          {longCountry(countrys[0])}
          <p>Temperature: {weather.temperature}</p>
          <img src={weather.weather_icons} alt={weather.weather_icons} style={{ width: '50px' }} />
          <p>Wind: {weather.wind_speed} kph direction {weather.wind_dir}</p>
        </>
      )

    }
  }

  return (
    <>
      <div>{rows()}</div>
    </>
  )
}

export default Countries;
