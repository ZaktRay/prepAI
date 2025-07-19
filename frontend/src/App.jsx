import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import StudentDashboard from './pages/dashboard'
import FileUpload from './pages/fileUpload'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<StudentDashboard />} />
        <Route path='/upload' element={<FileUpload />} />
        

      </Routes>
    </BrowserRouter>

  )
}

export default App
