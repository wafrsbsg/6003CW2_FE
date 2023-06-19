import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PublicMessagelist from './PublicMessagelist'
import { useState, useContext, useEffect, useRef } from 'react'
import { Context } from "./Context"

function PublicMessage() {
  const [message, setMessage] = useState('')
  const[messages, setMessages] = useState([])
  const[updateUI, setUpdateUI] = useState(false)
  const { userData } = useContext(Context)
  const senderEmail = userData.email
const saveEmail = userData.email

   const handleSendMessage = async (e) => {
     e.preventDefault()
     try {
    const res = await axios.post("https://6003be.darwelldavid.repl.co/sendMessage", {
        message,
      senderEmail,
      })
      setUpdateUI((prevState) => !prevState)
    } catch (err) {
      setError(true)
    }
  }

  
  //set message data
  useEffect(() => {
    axios.get("https://6003be.darwelldavid.repl.co/showMessage/" + saveEmail)
      .then((res) => {
        console.log(saveEmail)
      console.log(res.data)
        setMessages(res.data)
      })
  },[updateUI])


  return (
      <div className='registerPage'>
      <br/>
      <h1><b>Send Us Message</b></h1>
    <br/>
                <form onSubmit={handleSendMessage}>

                        <input type="text" placeholder='Enter Message' name='name'
                           className='form-control rounded search' onChange={(e) => setMessage(e.target.value)} required/>
  <br/>
                  
                    <button type='submit' className='btn btn-success  rounded bigButton'> Send</button>
                </form>

<br/>
        <hr></hr>
        <br/>
        <div className="m-auto">
              <ul>
                {messages.map((message1 => 
                         <PublicMessagelist 
                           key={message1._id}
                           id={message1._id}
                           senderEmail={message1.senderEmail}
                           message={message1.message}
                           setUpdateUI={setUpdateUI}
                           /> 
                          ))}
                </ul>
          </div>
              </div>

    
  )
}

export default PublicMessage