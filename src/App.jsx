import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agnece from './pages/Agnece'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {


  return (
    <div className=' text-6xl overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agnece' element={<Agnece />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App