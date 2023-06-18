import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Context} from "./Context"
import {useState,useContext, useRef} from 'react'

//get data from Home Page
const PublicMessagelist = ({id,senderEmail,message,imageurl,setUpdateUI}) => {


    return (
      <div className='justify-content-center  registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
            <li className='bg-white '>
              {senderEmail}
              <br/>
              {message}
              </li>
        </div>
        </div>
      
  )
  
}

export default PublicMessagelist