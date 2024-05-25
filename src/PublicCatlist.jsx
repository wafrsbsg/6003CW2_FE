import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Context} from "./Context"
import {useState,useContext, useRef} from 'react'

//get data from PubilcHome Page
const PublicCatlist = ({id,catName,describe,imageurl}) => {

  //Send the displayed cat list and the current user's email to the backend
  const {userData} = useContext(Context)
  
    const handleLike = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/likeCat", {
        userEmail: userData.email,
        catName: catName,
        describe: describe,
        imageurl: imageurl,
      })
      
  if(res){
    alert('add successful')
  }
    } catch (err) {
      alert('cat has been liked!')
      console.log(err)
    }
  }



    return (
            <div className='bg-white p-2 h-100 rounded w-25 border m-2 list'>
            <li className='li'>
              <img src={'https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/images/' + imageurl} className='image'/>
              <b>Cat Name:</b><br/> {catName}
              <br/>
              <b>Describe:</b><br/> {describe}
              <br/>
              <button onClick={handleLike} className='btn btn-success button'>Like</button>
              </li>
        </div>
      
  )
  

  
}

export default PublicCatlist