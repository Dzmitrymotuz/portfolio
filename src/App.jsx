import React, { useState } from 'react'
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, About, Projects, Contact, Game} from "./pages"
import Crypto from './pages/crypto/Crypto'
import ShowCurrency from './pages/crypto/cryptoComponents/showCurrency'
import BHome from './pages/bugtrag/BHome'
import Login from './pages/bugtrag/bugtragComponents/Login'
import Signup from './pages/bugtrag/bugtragComponents/Sugnup'
import { AuthProvider } from './pages/bugtrag/bugtragComponents/context/AuthContext'
import BugNavBar from './pages/bugtrag/bugtragComponents/BugNavBar'
import CreateTicket from './pages/bugtrag/bugtragComponents/CreateTicket'
import Ticket from './pages/bugtrag/bugtragComponents/Ticket'

const App = () => {
  const [showNavBar, setShowNavBar] = useState(true)

  return (
   <main className='bg-slate-300/20'>
    <Router>
        
        <AuthProvider>
        <Routes>
          <Route path="/*"
          element={
            <>
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
            </>
          }
          />
            <Route 
                path='/bugtrag/*' 
                element={
                  <>
                  <BugNavBar/>
                  <Routes>
                    <Route path='/' element={<BHome />}/>
                    <Route path='/ticket/:id' element={<Ticket />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/create_ticket' element={<CreateTicket/>}/>
                  </Routes>
              </>
            }
          />
        </Routes>
        </AuthProvider>
    </Router>
   </main>
  )
}

export default App
