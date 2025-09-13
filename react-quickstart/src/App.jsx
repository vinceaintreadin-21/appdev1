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
    </>
  )
}
export default App
