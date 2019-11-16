import React, { useState, useEffect } from 'react';
import Person from './Person';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  
  useEffect(() => {
    if (searchTerm.length) {
      const results = persons.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchTerm, persons])

  const rows = () => {
    if (searchResults.length) {
      return searchResults.map(person => 
        <Person key={person.name} person={person}/>)  
    } else {
      return persons.map(person => 
        <Person key={person.name} person={person}/>)  
    }
  }
      
  const addPerson = (event) => {
    event.preventDefault();
    const foundName = persons.find(person => {
      return person.name === newName
    })
    if (foundName) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const personObject = {
        name: newName,
        id: persons.name,
        number: newNumber
      }
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('')
    }
  }
      
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter shown with <input placeholder='Search...' value={searchTerm} onChange={handleSearchChange}/></div>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>{rows()}</div>
    </div>
  )
}

export default App;