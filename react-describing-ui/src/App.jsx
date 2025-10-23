import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './Gallary.jsx'
import TodoList from './TodoList.jsx'
import Profile from './Profile.jsx'
import PackingList from './PackingList.jsx'
import List from './List.jsx'
import TeaSet from './TeaSet.jsx'
import RootComponent from './components/RootComponent.jsx'
import RootModule from './modules/RootModule.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Gallery></Gallery> from task 2*/}
      <TodoList></TodoList>
      <Profile></Profile>
      <PackingList></PackingList>
      <List></List>
      <TeaSet></TeaSet>
      <RootComponent></RootComponent>
      <RootModule></RootModule>
    </>
  )
}

export default App
