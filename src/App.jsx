import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './common/header/Header'
import { Suspense } from 'react'
import { AuthProvider } from './context/AuthContext'
import LogIn from './authentication/login/LogIn'
import Home from './pages/home/Home'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<LogIn />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
