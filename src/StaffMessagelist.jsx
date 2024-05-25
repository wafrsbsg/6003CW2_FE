import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Context} from "./Context"
import {useState,useContext, useRef} from 'react'

//get data from Home Page
const StaffMessagelist = ({id,senderEmail,message,saveEmail,setUpdateUI,showText}) => {


//delete message
    const handleDeleteMessage = () => {
    axios.delete('https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/deleteMessage/' + id)
      .then((res) => {
        console.log(res)
        alert('delete successful')
        setUpdateUI((prevState) => !prevState)
      })
  }
  
    return (
      <div className='bg-white p-2  rounded w-25 border m-2 listM'>
            <li className='li'>
              <b>Sender:</b><br/> {senderEmail}
              <br/>
              <b>Message:</b><br/> {message}
              <br/>
              <b>Communicating users:</b><br/> {saveEmail}
              <br/>
              
              <button onClick={() => showText(saveEmail)} className='btn btn-success button'>Reply</button>
              
              <button onClick={handleDeleteMessage} className='btn btn-success button'>Delete</button>
              </li>
        </div>
      
  )
  
}

export default StaffMessagelist