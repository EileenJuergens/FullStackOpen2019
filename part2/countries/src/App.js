import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import Countries from './components/Countries';


const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  useEffect(() => {
    if (searchTerm.length) {
      const results = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchTerm, countries])

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  
  
  return ( 
    <div>
      <Filter searchTerm={searchTerm} handleChangeSearch={handleChangeSearch}/>
      <Countries searchResults={searchResults} countries={countries}/>
    </div>
  );
}

export default App;
