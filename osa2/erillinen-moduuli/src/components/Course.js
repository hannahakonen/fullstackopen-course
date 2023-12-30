const Part = ({ part, exercises }) => { 
    return (
      <p>{part} {exercises}</p>
    )
  }
  
  const Header = (props) => {
    return (
      <h2>{props.course}</h2>
    )
  }
  
  const Content = (props) => {    
    return (
      <div>
        {props.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
      </div>
    )
  } 
  
  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <b>total of {total} exercises</b>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} /> 
        <Total parts={course.parts} />  
      </div>
    )
  }

  export default Course