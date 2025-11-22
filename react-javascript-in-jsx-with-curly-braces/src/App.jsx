import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './Avatar'
import TodoList from './TodoList'
import TodoList2 from './TodoList2'
import Person from './Person'
function App() {
  return (
    <>
      <Avatar />
      <TodoList/>
      <TodoList2 />
      <Person/>
    </>
  )
}

export default App
