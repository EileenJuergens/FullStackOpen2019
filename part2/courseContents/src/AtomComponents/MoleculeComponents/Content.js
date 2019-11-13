import React from 'react'
import Part from './OrganismComponents/Part'
import Total from './OrganismComponents/Total'

const Content = ({parts}) => {

  const lines = () => parts.map(part => <Part key={part.id} part={part}/>)
  

  return (
    <>
      <div>{lines()}</div>
      <h4>Total of {parts[0].exercises + parts[1].exercises + parts[2].exercises + parts[3].exercises} exercises</h4>
      <Total/>
    </>
  )
}

export default Content;