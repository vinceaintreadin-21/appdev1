import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './Gallary.jsx'
import TodoList from './TodoList.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gallery></Gallery>
      <TodoList></TodoList>
    </>
  )
}

export default App
