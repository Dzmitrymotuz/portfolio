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
import BugTrag404 from './pages/bugtrag/bugtragComponents/BugTrag404'
import BugProjects from './pages/bugtrag/bugtragComponents/BugProjects'
import BugProjectSingle from './pages/bugtrag/bugtragComponents/BugProjectSingle'
import CreateProject from './pages/bugtrag/bugtragComponents/CreateProject'

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
                  <div className='my-5 w-[100%]'>
                  <BugNavBar/>
                  </div>
                  <Routes>
                    <Route path='/' element={<BHome />}/>
                    <Route path='/ticket/:id' element={<Ticket />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/create_ticket' element={<CreateTicket/>}/>
                    <Route path='/projects' element={<BugProjects/>}/>
                    <Route path='/projects/:id' element={<BugProjectSingle/>}/>
                    <Route path='/projects/create' element={<CreateProject/>}/>
                    <Route path="*" element={<BugTrag404/>}/>
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
