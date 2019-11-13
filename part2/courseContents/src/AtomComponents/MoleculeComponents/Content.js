import React from 'react'
import Part from './OrganismComponents/Part'
import Total from './OrganismComponents/Total'

const Content = ({parts}) => {

  const lines = () => parts.map(part => <Part key={part.id} part={part}/>)

  const total = parts.reduce( (acc, cur) => {
    return acc + cur.exercises
  },0)

  return (
    <>
      <div>{lines()}</div>
      <Total total={total}/>
    </>
  )
}

export default Content;