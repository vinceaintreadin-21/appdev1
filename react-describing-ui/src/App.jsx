import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './Gallary.jsx'
import TodoList from './TodoList.jsx'
import Profile from './Profile.jsx'
import PackingList from './PackingList.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Gallery></Gallery> from task 2*/}
      <TodoList></TodoList>
      <Profile></Profile>
      <PackingList></PackingList>
    </>
  )
}

export default App
