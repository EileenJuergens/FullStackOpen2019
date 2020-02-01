import React, { useState, useEffect } from 'react';


const Countries = ({ searchResults }) => {
  const [ countrys, setCountrys ] = useState(searchResults);

  useEffect(() => {
    setCountrys(searchResults);
  }, [searchResults])

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
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
        <img src={country.flag} alt={country.name} style={{ width: '150px' }} />
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
      return longCountry(countrys[0]);
    }
  }

  return (
    <>
      <div>{rows()}</div>
    </>
  )
}

export default Countries;
