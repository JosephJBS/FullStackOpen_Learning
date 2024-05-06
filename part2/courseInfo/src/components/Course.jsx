const Course = ({ course }) => (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );

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
        {props.parts.map((part) => (
          <Part part={part.name} exercises={part.exercises} key={part.id} />
        ))}
      </div>
    );
  };
  
  const Part = (props) => {
    console.log(props);
    return (
      <div>
        <p key={props.id}>
          {props.part} {props.exercises}
        </p>
      </div>
    );
  };
  
  const Total = (props) => {
    const sum = props.total.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      0
    );
    console.log(sum);
    return (
      <div>
        <p>
          <b>total of {sum} exercises</b>
        </p>
      </div>
    );
  };
  

  
  export default Course;