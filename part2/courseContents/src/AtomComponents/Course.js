import React from 'react';
import Header from './MoleculeComponents/Header'
import Content from './MoleculeComponents/Content'


const Course = ({courses}) => {
  return (
    <div>
      <Header name={courses.name}/>
      <Content parts={courses.parts}/>
    </div>
  )
}

export default Course;