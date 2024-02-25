import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import { Hero } from './components/Hero'

function App() {
  return (
    <>
      <div className='overlay'>
        <div className='flex flex-col items-center h-full w-full'>
        <TopBar />
        <Hero />
        </div>
      </div>
    </>
  )
}

export default App
