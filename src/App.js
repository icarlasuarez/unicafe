import { useState } from 'react';
import './App.css';
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics';

const App = () => {
  // save clicks of each button to its own state
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)

 const voteGood = () => {
  setGood(good +1)
}
const voteNeutral = () => {
  setNeutral(neutral +1)
}
const voteBad = () => {
  setBad(bad +1)
}

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={voteGood} text="good"/>
      <Button onClick={voteNeutral} text="neutral"/>
      <Button onClick={voteBad} text="bad"/>
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    
  );
}

export default App;
