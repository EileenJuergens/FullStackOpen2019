import React from 'react'

const Filter = ({ searchTerm, handleSearchChange}) => {
return (
  <>
    <div>Filter shown with <input placeholder='Search...' value={searchTerm} onChange={handleSearchChange}/></div>
  </>
)
}

export default Filter;

