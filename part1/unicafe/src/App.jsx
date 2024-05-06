import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)

  }



  return (
    <div>
      <h1>Give FeedBack</h1>

      <Button handleClick = {handleClickGood} text = "good"></Button>
      <Button handleClick = {handleClickNeutral} text = "neutral"></Button>
      <Button handleClick = {handleClickBad} text = "bad"></Button>

      <Statistics good = {good} neutral = {neutral} bad={bad}/>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) =>(

    <div>
    <h1>Statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
  </div>

)



export default App

