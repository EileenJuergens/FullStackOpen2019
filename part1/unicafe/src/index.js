import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics = ({good, neutral, bad}) => {
  if (!good && !neutral && !bad){
    return <p>No feedback given yet.</p>
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={good+neutral+bad}/>
        <Statistic text="average" value={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}/>
        <Statistic text="positive" value={`${(100*good)/(good+neutral+bad)} %`}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { 
    setGood(good + 1)
  }
  const handleNeutralClick = () => { 
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => { 
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <h2>The Statistics</h2> 
      <Statistics feedbackGiven={false} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))