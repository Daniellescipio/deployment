import axios from 'axios'
import { useEffect, useState } from 'react'

function Login({setToken}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const user = {email:email, password:password}
            const response = await axios.post('http://localhost:3000/auth/login', user)
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            
            //set something(s)
            //definitely question
        } catch (error) {
            console.log(error)
           // setError(error)
        }

       //set something
       //maybe go somewhere
    }

  return (
    <>
    {error &&
    <p className="warningMssg" >{error}</p>}
    <form onSubmit={(e)=>handleSubmit(e)}>
        <label> Email :
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
        <button>Login</button>
    </form>
    </>
  )
}

export default Login