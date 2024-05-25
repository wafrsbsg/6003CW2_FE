import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Context} from "./Context"
import {useState,useContext, useRef} from 'react'

//get data from Home Page
const PublicFavoritelist = ({id,catName,describe,imageurl,setUpdateUI}) => {
  

  //delete cat
    const handleDeleteCat = () => {
    axios.delete('https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/deleteLikeCat/' + id)
      .then((res) => {
        console.log(res)
        alert('delete successful')
        setUpdateUI((prevState) => !prevState)
      })
  }

    return (
      <div className='bg-white p-2 h-100 rounded w-25 border m-2 list'>
            <li className='li'>
              <img src={'https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/images/' + imageurl} className='image'/>
              <b>Cat Name:</b><br/> {catName}
              <br/>
              <b>Describe:</b><br/> {describe}
              <br/>
              <button onClick={handleDeleteCat}  className='btn btn-success button'>Delete</button>
              </li>
        </div>
      
  )
  
}

export default PublicFavoritelist