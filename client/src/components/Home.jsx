import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home({token, setuser}) {
    const navigate = useNavigate()

  useEffect(()=>{
    const getUser = async()=>{
        //get the user
    }
    if(token){
        getUser()
    }else{
        navigate('/login')
    }
  },[])
    const handleLogOut = ()=>
    {
        localStorage.setItem("token", "")
        // setToken(null)
        // setuser(null)
    }
  return (
    <>
    <h1>Home page</h1>
    <button onClick={handleLogOut}>Log Out</button>
    </>
  )
}

export default Home