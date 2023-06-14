import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Home() {

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 homePage'>
            <div className='bg-white p-3 rounded w-25 border'>
                <h2>Home</h2>
                
                
                    <Link to="/login" className=' btn btn-success w-100 rounded-0'>Login</Link>
              <Link to="/register" className=' btn btn-success w-100 rounded-0'>Register</Link>
            </div>
        </div>
  )
}

export default Home