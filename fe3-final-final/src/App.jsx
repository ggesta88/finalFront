import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Navbar from './Components/Navbar'
import './App.css'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/favs' element={<Favs />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
