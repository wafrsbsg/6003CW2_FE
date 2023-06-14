import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'

//get data from Home Page
const Catlist = ({key,id,catName,describe,imageurl,setUpdateUI,updateMode}) => {

    return (
      <div>
            <li className='bg-white '>
              {catName}
              </li>
      <li className='bg-white '>
              {describe}
              </li>
        <li className='bg-white '>
              {imageurl}
              </li>
        </div>
      
  )
  

  
}

export default Catlist