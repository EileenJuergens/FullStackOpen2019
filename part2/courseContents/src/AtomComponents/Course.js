import React from 'react';
import Header from './MoleculeComponents/Header'
import Content from './MoleculeComponents/Content'


const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

export default Course;