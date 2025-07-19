import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import StudentDashboard from './pages/dashboard'
import FileUpload from './pages/fileUpload'
import SignUp from './pages/signUp'
import Login from './pages/login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<StudentDashboard />} />
        <Route path='/upload' element={<FileUpload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
