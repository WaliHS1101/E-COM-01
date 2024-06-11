import React from 'react'
import Navbar from './Components/Navbar'
import TopBar from './Components/TopBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Products' element={<Products />} />
      </Routes>
    </>
  )
}

export default App