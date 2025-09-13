import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//making nested components
function Header() {
  return(
    <h1>this is the header</h1>
  )
}
function Main() {
  return(
    <h1>This is the Main content</h1>
  )
}

function Footer() {
  return(
    <h1>This is the Footer</h1>
  )
}

//making data via object
const student = {
  name: "Vincent",
  age: 20
}

//making conditional rendering
const isLoggedIn = true;
let content;
if (isLoggedIn) {
  content = <h1>Welcome back!</h1>;
} else {
  content = <h1>Please log in.</h1>;
}

//making rendering lists
const subjects = [
  { id: 1, name: 'Mathematics' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'History' },
]

const listItems = subjects.map((subject) =>
  <li key={subject.id}>{subject.name}</li>
);

function SubjectList() {
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function ClickButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )

}

// function DataSharing(name, age) {
//   return (
//     <div>
//       <h1>I am {name}, I'm {age} years old </h1>
//     </div>
//   )
// }

function App() {
  return(
    <>
    {/* Done creating and nesting components */}
      <Header />
      <Main />
      <Footer />

    {/* Done writing markup with JSX */}
      <div>
        <h1 className='text-blue-300'>Hello, User</h1> {/*Done adding styles*/}
      </div>

      <h1>I am {student.name}, I'm {student.age} years old </h1> {/*Done displaying data*/}

      <p>{content}</p> {/*Done conditional rendering*/}

      <SubjectList /> {/*Done rendering lists*/}
      <ClickButton /> Done responding to events
      <Counter /> Done using hooks
      {/* <DataSharing name="Dover" age={20} /> Done sharing data between components */}
    </>
  )
}
export default App
