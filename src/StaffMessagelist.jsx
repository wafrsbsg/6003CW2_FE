import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Context} from "./Context"
import {useState,useContext, useRef} from 'react'

//get data from Home Page
const StaffMessagelist = ({id,senderEmail,message,saveEmail,setUpdateUI,showText}) => {


//delete message
    const handleDeleteMessage = () => {
    axios.delete('https://6003be.darwelldavid.repl.co/deleteMessage/' + id)
      .then((res) => {
        console.log(res)
        alert('delete successful')
        setUpdateUI((prevState) => !prevState)
      })
  }
  
    return (
      <div className='justify-content-center  registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
            <li className='bg-white '>
              Sender: {senderEmail}
              <br/>
              Message: {message}
              <br/>
              Communicating users: {saveEmail}
              <br/>
              <button onClick={() => showText(saveEmail)}>Reply</button>
              <button onClick={handleDeleteMessage}>Delete</button>
              </li>
        </div>
        </div>
      
  )
  
}

export default StaffMessagelist