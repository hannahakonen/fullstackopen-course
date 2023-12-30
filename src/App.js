const Part = ({ part, exercises }) => { 
  return (
    <p>{part} {exercises}</p>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
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

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App