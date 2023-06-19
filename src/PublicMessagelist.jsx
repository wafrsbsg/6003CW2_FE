import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Context} from "./Context"
import {useState,useContext, useRef} from 'react'

//get data from Home Page
const PublicMessagelist = ({id,senderEmail,message,imageurl,setUpdateUI}) => {


    return (
              <div className='bg-white p-2 h-100 rounded w-25 border m-2'>
            <li className='li'>
              <b>Sender:</b><br/> {senderEmail}
              <br/>
              <b>Message:</b><br/> {message}
              <br/>
              </li>
        </div>
      
  )
  
}

export default PublicMessagelist