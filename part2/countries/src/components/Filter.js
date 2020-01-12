import React from 'react'

const Filter = ({ searchTerm, handleChangeSearch }) => {
return (
  <>
    <div>Find countries: <input placeholder='Search...' value={searchTerm} onChange={handleChangeSearch}/></div>
  </>
)
}

export default Filter;
