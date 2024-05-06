const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);

  return (
    <div>
      <Part
        part={props.parts[0].name}
        exercises={props.parts[0].exercises}
      ></Part>
      <Part
        part={props.parts[1].name}
        exercises={props.parts[1].exercises}
      ></Part>
      <Part
        part={props.parts[2].name}
        exercises={props.parts[2].exercises}
      ></Part>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        <b>total of{" "}
        {props.total[0].exercises +
          props.total[1].exercises +
          props.total[2].exercises}{" "}
        exercises
        </b>
      </p>
    </div>
  );
};

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total total={course.parts} />
  </div>
);

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
