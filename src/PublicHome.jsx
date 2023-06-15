import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PublicCatlist from './PublicCatlist'
import { useEffect, useState } from 'react'

function  PublicHome() {
  const[cats, setCat] = useState([])
  const[updateUI, setUpdateUI] = useState(false)


  //set cat data
  useEffect(() => {
    axios.get("https://6003be.darwelldavid.repl.co/showCat")
      .then((res) => {
      console.log(res.data)
        setCat(res.data)
      })
  },[updateUI])

  return (
      
              


              <ul>
                {cats.map((cat => 
                         <PublicCatlist 
                           key={cat._id}
                           id={cat._id}
                           catName={cat.catName}
                           describe={cat.describe}
                           imageurl={cat.imageurl}
                           setUpdateUI={setUpdateUI}
                           /> 
                          ))}
                </ul>

    
  )
}

export default PublicHome