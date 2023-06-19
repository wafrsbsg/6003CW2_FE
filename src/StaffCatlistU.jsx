import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'

//get data from Home Page
const StaffCatlistU = ({id,catName,describe,imageurl,setUpdateUI,showUpdateText}) => {
    

 

    return (
      <div className='bg-white p-2 h-100 rounded w-25 border m-2 list'>
            <li className='li'>
              <img src={'https://6003be.darwelldavid.repl.co/images/' + imageurl} className='image'/>
              <b>Cat Name:</b><br/> {catName}
              <br/>
              <b>Describe:</b><br/> {describe}
              <br/>
              <button onClick={() => showUpdateText(id, catName, describe, imageurl) } className='btn btn-success button'>Update</button>
              </li>
        </div>

      
  )
  

  
}

export default StaffCatlistU