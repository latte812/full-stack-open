const App = () => {
  const course_info = [
    { name: "Half Stack application development" },
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "Sate of a component", exercises: 14 },
  ];
  return (
    <>
      <Header course_info={course_info} />
      <Content course_info={course_info} />
      <Total course_info={course_info} />
    </>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.course_info[0].name}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part
        parts={props.course_info[1].part}
        exercises={props.course_info[1].exercises}
      />
      <Part
        parts={props.course_info[2].part}
        exercises={props.course_info[2].exercises}
      />
      <Part
        parts={props.course_info[3].part}
        exercises={props.course_info[3].exercises}
      />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.parts} {props.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises:{" "}
        {props.course_info[1].exercises +
          props.course_info[2].exercises +
          props.course_info[3].exercises}
      </p>
    </>
  );
};

export default App;
