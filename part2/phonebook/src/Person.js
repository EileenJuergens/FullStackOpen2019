import React from 'react'

const Person = ({ person }) => {
  return (
    <>
      <div>{person.name} {person.number}</div>
      <br/>
    </>
  )
}

export default Person;