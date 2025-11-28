import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import NavBar from './NavBar'
import Dashboard from './Protected Routes/Dashboard'
import PrivateRoutes from './Protected Routes/PrivateRoutes'

const App1 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><NavBar /><Home /></>} />
          <Route path = '/about' element={<><NavBar /><About /></>} />
          <Route path = '/contact' element={<><NavBar /><Contact /></>} />
          <Route path="*" element={<><h1>404 Not Found</h1><NavBar /></>} />
          <Route path = '/user/:username' element={<><NavBar /><User /></>} />
          <Route path ='/dashboard' element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App1
