import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './PAGES/Login'
import Netflix from './PAGES/Netflix'
import Signup from './PAGES/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App