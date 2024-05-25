import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {useState,useContext, useRef} from 'react'
import {Link} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {Context} from "./Context"

function Login() {

  //get passwords and email
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [red,setRed] = useState(false)
  const {setUserData} = useContext(Context)

  //handle Login
   async function handleLogin(e) {
    e.preventDefault()
    const res = await fetch('https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (res.ok) {
     // get user data from context
      setRed(true)
      res.json().then(userData => {
        setUserData(userData)
      })
    }else {
      alert('wrong email or password')
    }
   }
     
     if (red) {
    return <Navigate to={'/publicHome'} />
  }  
  
    
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
                <h2>Public Login</h2>
                <form onSubmit={handleLogin}>
                  
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email"  placeholder='Enter Email' name='email'  className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                  
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'  
                           className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} required/>
                    </div>




                  
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Submit</button>
                  <Link to="/register" className=' btn btn-success w-100 rounded-0'>Go To Register</Link>
                </form>
            </div>
        </div>
  )
}

export default Login