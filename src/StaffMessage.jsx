import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import StaffMessagelist from './StaffMessagelist'
import { useState, useContext, useEffect, useRef } from 'react'
import { Context } from "./Context"

function StaffMessage() {
  const [message, setMessage] = useState('')
  const [saveEmail, setSaveEmail] = useState('')
  const[messages, setMessages] = useState([])
  const[updateUI, setUpdateUI] = useState(false)
  const[search, setSearch] = useState('')
  const senderEmail = 'Staff'


   const handleSendMessage = async (e) => {
     e.preventDefault()
     try {
    const res = await axios.post("https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/sendMessageS", {
        message,
      senderEmail,
      saveEmail,
      })
      setUpdateUI((prevState) => !prevState)
    } catch (err) {
      setError(true)
    }
  }

  
  //set message data
  useEffect(() => {
    axios.get("https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/showMessageS")
      .then((res) => {
      console.log(res.data)
        setMessages(res.data)
      })
  },[updateUI])

    //Help set the text of the selected cat data into the textbox
  const showText = (saveEmailText) => {
    setSaveEmail(saveEmailText)
  }

  //use filter to search message by user(through saveEmail)
const searchedMessages = messages.filter(message=>message.saveEmail.toLowerCase().includes(search))



  return (
      <div className='registerPage'>
      <br/>
      <h1><b>Reply Message</b></h1>
    <br/>
                <form onSubmit={handleSendMessage}>

                  <div className='mb-3'>
                        <label htmlFor="name"><strong>Message</strong></label>
                        <input type="text" placeholder='Enter Message' name='name'
                           className='form-control rounded-0' onChange={(e) => setMessage(e.target.value)} required/>
  
                    </div>

                  <div className='mb-3'>
                        <label htmlFor="name"><strong>Reply to</strong></label>
                        <input type="text" placeholder='Enter Message' name='name' value={saveEmail}
                          className='form-control rounded-0' onChange={(e) => setSaveEmail(e.target.value)} required/>
  
                    </div>
                
                  
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Send</button>
                </form>
        <br/>
        <hr></hr>
        <br/>

                          <input type="text" placeholder='Search...' className='search' onChange={(e) => setSearch(e.target.value)}/>

<br/>
        <br/>
              <ul>
                {searchedMessages.map((message1 => 
                         <StaffMessagelist 
                           key={message1._id}
                           id={message1._id}
                           senderEmail={message1.senderEmail}
                           message={message1.message}
                           saveEmail={message1.saveEmail}
                           setUpdateUI={setUpdateUI}
                           showText={showText}
                           /> 
                          ))}
                </ul>
              </div>

    
  )
}

export default StaffMessage