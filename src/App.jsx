import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import CoinPage from './pages/CoinPage.jsx'



const App = () => {




  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />    
        <Route path='/coins' element={<CoinPage/>} />   
      </Routes>
      <Footer/> 
    </BrowserRouter>
  )
}

export default App