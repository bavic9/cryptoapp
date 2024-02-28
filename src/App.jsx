import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'





const App = () => {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        
        

        
      </Routes>
      <Footer/> 
    </BrowserRouter>
  )
}

export default App