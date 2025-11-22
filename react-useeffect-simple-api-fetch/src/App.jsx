import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersFetch from './UsersFetch'
import PostFetchAsync from './PostsFetchAsync'
import TodosFetchAxios from './TodosFetchAxios'
function App() {
 

  return (
    <>
      {/* <UsersFetch /> */}
      {/* <PostFetchAsync> */}
      <TodosFetchAxios />
    </>
  )
}

export default App
