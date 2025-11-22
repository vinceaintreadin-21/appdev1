import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersFetch from './UsersFetch'
import PostFetchAsync from './PostsFetchAsync'
function App() {
 

  return (
    <>
      {/* <UsersFetch /> */}
      <PostFetchAsync />
    </>
  )
}

export default App
