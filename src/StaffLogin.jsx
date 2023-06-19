import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {useState,useContext, useRef} from 'react'
import {Link} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {Context} from "./Context"

function StaffLogin() {

  //get passwords and email
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [red,setRed] = useState(false)
  const {setStaffData} = useContext(Context)

  //handle Login
   async function handleLogin(e) {
    e.preventDefault();
    const response = await fetch('https://6003be.darwelldavid.repl.co/staffLogin', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
     // get staff data from context
      setRed(true)
      response.json().then(staffData => {
        setStaffData(staffData)
        
      })
    }else{
      alert('wrong email or password')
    }
   }
     
     if (red) {
    return <Navigate to={'/staffHome'} />
  } 
  
    
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
                <h2>Staff Login</h2>
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
                  <Link to="/staffRegister" className=' btn btn-success w-100 rounded-0'>Go To Register</Link>
                </form>
            </div>
        </div>
  )
}

export default StaffLogin