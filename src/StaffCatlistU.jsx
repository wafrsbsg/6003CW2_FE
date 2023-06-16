import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'

//get data from Home Page
const StaffCatlistU = ({id,catName,describe,imageurl,setUpdateUI,showUpdateText}) => {
    

 

    return (
      <div className='justify-content-center  registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
            <li className='bg-white '>
              {catName}
              {describe}
              {imageurl}
              <button onClick={() => showUpdateText(id, catName, describe, imageurl)}>Update</button>
              </li>
        </div>
        </div>
      
  )
  

  
}

export default StaffCatlistU