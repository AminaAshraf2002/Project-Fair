import { Route, Routes } from 'react-router-dom' 
import Home from './pages/Home'
import './App.css'
import Auth from './pages/Auth'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/project' element={<Project/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer/>
     
    </>
  )
}

export default App
