import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function StaffRegister() {

  //get passwords and email
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [registerCode, setRegisterCode] = useState('')

  //handle Register

const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://6003be.darwelldavid.repl.co/staffRegister", {
        name,
        email,
        password,
        registerCode,
      })
      alert('register success')
    } catch (err) {
      alert('email has been used or register code is incorrect!')
    }
  }


    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
                <h2>Staff Register</h2>
                <form onSubmit={handleRegister}>
                  
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'  className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                  
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                           className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

<div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                           className='form-control rounded-0' onChange={(e) => setName(e.target.value)} required/>
                    </div>
                  
                  <div className='mb-3'>
                        <label htmlFor="name"><strong>Register Code</strong></label>
                        <input type="text" placeholder='Enter Code' name='name'
                           className='form-control rounded-0'  onChange={(e) => setRegisterCode(e.target.value)} required/>
                    </div>



                  
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Submit</button>
                  <br/>
                  <Link to="/staffLogin" className=' btn btn-success w-100 rounded-0'>Go To Login</Link>
                </form>
            </div>
        </div>
  )
}

export default StaffRegister