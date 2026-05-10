import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
