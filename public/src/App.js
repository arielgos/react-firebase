import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { analytics } from './Firebase'
import { logEvent } from 'firebase/analytics'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

function App () {
  logEvent(analytics, 'Application Start')
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
