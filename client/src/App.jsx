import axios from 'axios'
import { useEffect,useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [user, setUser] = useState()
  const [token, setToken] = useState(localStorage.getItem("token")||null)

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home token = {token} setUser = {setUser}/>}/>
      <Route path = "/login" element = {<Login setToken = {setToken}/>}/>
      <Route path = "/register" element = {<Register setToken = {setToken}/>}/>
    </Routes>
    </>
  )
}

export default App


