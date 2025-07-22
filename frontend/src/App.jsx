import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import StudentDashboard from './pages/dashboard'
import FileUpload from './pages/fileUpload'
import SignUp from './pages/signUp'
import Login from './pages/login'
import TestPage from './pages/test'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<StudentDashboard />} />
          <Route path='/upload' element={<FileUpload />} />
          <Route path='/test' element={<TestPage />} />

        </Route>

        <Route element={<PublicRoute />}>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
