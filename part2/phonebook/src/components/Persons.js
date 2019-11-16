import React from 'react';
import Person from './Person';

const Persons = ({searchResults, persons}) => {
  const rows = () => {
    if (searchResults.length) {
      return searchResults.map(person => 
        <Person key={person.name} person={person}/>)  
    } else {
      return persons.map(person => 
        <Person key={person.name} person={person}/>)  
    }
  }
  return (
    <>
      <div>{rows()}</div>
    </>
  )
}

export default Persons;