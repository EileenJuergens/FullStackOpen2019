import React from 'react';

const Countries = ({ searchResults, countries }) => {
  
  const rows = () => {
    if (searchResults.length > 10) {
      return <p>To many matches, specify another filter</p>
    }
    else if (searchResults.length > 1 && searchResults.length <= 10) {
      return searchResults.map(country => <p key={country.name}>{country.name}</p>)
    }
    else if (searchResults.length === 1) {
      return (searchResults.map(country => (
        <div key={country.name}>
          <h1>{country.name}</h1>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h2>languages</h2>
          {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
          <img src={country.flag} alt={country.name} style={{width: '150px'}}/>
        </div>
      )));
    }
  }

  
  // show country with:
  // name, capital, population, languages, flag


  return (
    <>
      <div>{rows()}</div>
    </>
  )
}

export default Countries;
