import axios from 'axios'
import { useEffect, useState } from 'react'

function Register({setToken}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const user = {email:email, password:password}
        console.log(user)
        const response = await axios.post('http://localhost:3000/auth/register', user)
        console.log(response.data)
        localStorage.setItem("token", response.data.token)
       //set something
       //maybe go somewhere
    }
    

  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <label> email:
        <input
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </label>
        <label> Password :
        <input
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </label>
        <button>Register</button>
    </form>
    </>
  )
}

export default Register