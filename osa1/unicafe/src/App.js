import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr><StatisticsLine text='good' value={props.good} /></tr>
          <tr><StatisticsLine text='neutral' value={props.neutral} /></tr>
          <tr><StatisticsLine text='bad' value={props.bad} /></tr>
          <tr><StatisticsLine text='all' value={props.good + props.neutral + props.bad} /></tr>
          <tr><StatisticsLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} /></tr>
          <tr><StatisticsLine text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100 + ' %'} /></tr>
        </tbody>
      </table>    
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good + 1) }
  const handleNeutralClick = () => { setNeutral(neutral + 1) }
  const handleBadClick = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App