import React from 'react'
import Navbar from './Components/Navbar'
import TopBar from './Components/TopBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'
import LogIn from './Components/LogIn'

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Products' element={<Products />} />
        <Route path='LogIn' element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App