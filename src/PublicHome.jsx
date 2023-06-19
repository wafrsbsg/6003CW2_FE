import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PublicCatlist from './PublicCatlist'
import { useEffect, useState } from 'react'

function  PublicHome() {
  const[cats, setCat] = useState([])
  const[search, setSearch] = useState('')
  


  //set cat data
  useEffect(() => {
    axios.get("https://6003be.darwelldavid.repl.co/showCat")
      .then((res) => {
      console.log(res.data)
        setCat(res.data)
      })
  },[])

  //use filter to search cat
const searchedCats = cats.filter(cat=>cat.catName.toLowerCase().includes(search))

  //console.log('cats',cats)
  console.log('searchedCats',searchedCats)
  
  return (
    <div className='registerPage'>
      <br/>
      <h1><b>Browse Cat</b></h1>
    <br/>
        <input type="text" placeholder='Search...' className='form-control rounded search' onChange={(e) => setSearch(e.target.value)} />
                    
              <br/>


              <ul>
                {searchedCats.map((cat => 
                         <PublicCatlist 
                           key={cat._id}
                           id={cat._id}
                           catName={cat.catName}
                           describe={cat.describe}
                           imageurl={cat.imageurl}
                           /> 
                          ))}
                </ul>
      </div>

    
  )
}

export default PublicHome