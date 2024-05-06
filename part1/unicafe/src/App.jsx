import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give FeedBack</h1>

      <Button handleClick={handleClickGood} text="good"></Button>
      <Button handleClick={handleClickNeutral} text="neutral"></Button>
      <Button handleClick={handleClickBad} text="bad"></Button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad;
  let average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / all;
  let positive = (props.good / all) * 100 + " % ";

  if (all == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedBack given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

export default App;
