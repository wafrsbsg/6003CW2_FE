import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Context} from "./Context"
import {useState,useContext, useRef} from 'react'

//get data from PubilcHome Page
const PublicCatlist = ({key,id,catName,describe,imageurl,setUpdateUI,updateMode}) => {

  //Send the displayed cat list and the current user's email to the backend
  const {userData} = useContext(Context)
    const handleLike = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://6003be.darwelldavid.repl.co/likeCat", {
        userEmail: userData.email,
        catName: catName,
        describe: describe,
        imageurl: imageurl,
      });
      
  if(res){
    alert('add successful')
  }
    } catch (err) {
      console.log(err);
    }
  };



    return (
      <div className='justify-content-center  registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
            <li className='bg-white '>
              {catName}
              {describe}
              {imageurl}
              <button onClick={handleLike}>Like</button>
              </li>
        </div>
        </div>
      
  )
  

  
}

export default PublicCatlist