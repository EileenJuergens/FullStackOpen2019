import React from 'react';

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.number}</p>
    </>
  )
}


const Content = (props) => {
  return (
    <>
      <Part name={props.part1} number={props.exercises1}/>
      <Part name={props.part2} number={props.exercises2}/>
      <Part name={props.part3} number={props.exercises3}/>
    </>
  );
}

export default Content;