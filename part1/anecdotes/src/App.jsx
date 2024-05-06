import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);

  const [mostVoted, setMostVoted] = useState(0);

  const [indexMostVoted, setIndexMostVoted] = useState(0);

  const clickNextAnecdote = () => {
    const min = 0;
    const max = anecdotes.length;
    let randomInt = Math.floor(Math.random() * (max - min)) + min;
    setSelected(randomInt);
  };

  const clickVoteAnecdote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);

    const maxValue = Math.max(...newPoints);

    setMostVoted(maxValue);
    setIndexMostVoted(newPoints.findIndex((x) => x == maxValue));
  };

  return (
    <div>
      <Anecdote
        title="Anecdote of the day"
        anecdote={anecdotes[selected]}
        votes={points[selected]}
      />

      <Button text="vote" handleClick={clickVoteAnecdote} />
      <Button text="next anecdote" handleClick={clickNextAnecdote} />

      <Anecdote
        title="Anecdote with most votes"
        anecdote={anecdotes[indexMostVoted]}
        votes={mostVoted}
      />
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Anecdote = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.anecdote}</p>
      <p>has {props.votes} votes</p>
    </div>
  );
};

export default App;
