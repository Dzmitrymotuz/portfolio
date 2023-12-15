import React, { useState } from 'react'
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, About, Projects, Contact, Game} from "./pages"
import Crypto from './pages/crypto/Crypto'
import ShowCurrency from './pages/crypto/cryptoComponents/showCurrency'

const App = () => {
  const [showNavBar, setShowNavBar] = useState(true)

  return (
   <main className='bg-slate-300/20'>
    <Router>
        {showNavBar && <Navbar/>}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/game' element={<Game/>}/>
            <Route path='/crypto' element={<Crypto setShowNavBar={setShowNavBar}/>}/>
            <Route path='/crypto/:id' element={<ShowCurrency setShowNavBar={setShowNavBar}/>}/>
        </Routes>
    </Router>

   </main>
  )
}

export default App
