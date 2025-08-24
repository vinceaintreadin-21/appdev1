import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import profilePic from './assets/profile-pic.jpg'

function App() {
  return (
    <>
      <div className="grid grid-cols-[250px_1fr] grid-rows-[auto_1fr_auto] bg-[#0d1117] gap-2 text-[#c9d1d9] min-h-screen flex flex-col p-2">
        {/* Navbar */}
        <nav className="bg-[#161b22] border-b border-[#30363d] p-4 w-full fixed top-0 left-0 shadow fade-in">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className='text-[#c9d1d9] font-bold text-xl'>My About Me Page</div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20 grid grid-cols-[300px_1fr] gap-8 p-6 items-start fade-in">
          {/* Sidebar */}
          <div className="rounded-lg p-6 w-[300px] bg-[#161b22] hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.6)] transition duration-300">
            <img 
              className="w-40 h-40 mx-auto rounded-full mb-4" 
              src={profilePic} 
              alt="Vince' Profile Picture" 
            />
            <h1 className="text-[24px] font-bold mb-4">Vincent Duriga</h1>

            <a href="https://www.instagram.com/goofball_prodigy" className='flex items-center hover:text-[#58a6ff] transition mb-3'>
              {/* IG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className='mr-2'>
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75c0-1.793 1.457-3.25 3.25-3.25h8.5c1.793 0 3.25 1.457 3.25 3.25v8.5c0 1.793-1.457 3.25-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5Zm7.25 1a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Zm0 2a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm4.75-2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
              </svg>
              goofball_prodigy
            </a>

            <a href="#" className="flex items-center hover:text-[#58a6ff] transition mb-3">
              {/* FB Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className='mr-2'>
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.003 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17.003 22 12Z"/>
              </svg>
              duriga.vince123
            </a>

            <a href="https://github.com/vinceaintreadin-21" className='flex items-center hover:text-[#58a6ff] transition'>
              {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className='mr-2'>
                  <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.387 7.865 10.916.575.105.785-.25.785-.556v-2.163c-3.2.696-3.872-1.54-3.872-1.54-.523-1.327-1.278-1.68-1.278-1.68-1.043-.713.079-.698.079-.698 1.153.081 1.76 1.184 1.76 1.184 1.026 1.757 2.69 1.249 3.345.955.104-.743.402-1.25.73-1.538-2.554-.291-5.238-1.278-5.238-5.683 0-1.256.449-2.283 1.184-3.088-.119-.29-.513-1.462.113-3.048 0 0 .965-.309 3.162 1.178a10.95 10.95 0 0 1 2.878-.387c.976.005 1.96.132 2.878.387 2.196-1.487 3.162-1.178 3.162-1.178.626 1.586.232 2.758.114 3.048.737.805 1.184 1.832 1.184 3.088 0 4.415-2.687 5.389-5.25 5.674.414.357.783 1.06.783 2.136v3.164c0 .31.209.665.79.553C20.71 21.384 24 17.086 24 12c0-6.352-5.148-11.5-12-11.5Z"/>
                </svg>
              vinceaintreadin-21
            </a>
          </div>

          {/* About Me */}
          <div className="rounded-lg p-8 bg-[#161b22] shadow leading-relaxed w-[900px] h-auto hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.6)] transition duration-300">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className='font-bold'>Name:
              <span className='font-normal ml-2'>Vincent Lee T. Duriga</span>
            </p>
            <p className='font-bold'>Course/Year:
              <span className='font-normal ml-2'>BSIS 3-B</span>
            </p>
            <p className='font-bold'>Fun Fact:
              <span className='font-normal ml-2'>I play guitar and ukelele</span>
            </p>
            <h2 className="text-2xl font-bold mt-5 mb-4">Why I Want to Learn Git & Github</h2>
            <span>I want to learn Git and Github because i think this tool is essential for me to develop web applications like the previous projects that i've accomplished. I also want my codes to be stored remotely so whenever i bought a new device, i can easily access it through Github with the use of Git commands.</span>
          </div>
        </main>
      </div>
    </>
  )
}

export default App