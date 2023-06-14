import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Catlist from './Catlist'
import { useEffect, useState } from 'react'

function Home() {
  const [catName, setCatName] = useState('')
  const [describe, setDescribe] = useState('')
  const [imageurl, setImageurl] = useState('')
  const[cats, setCat] = useState([])
  const[updateUI, setUpdateUI] = useState(false)

  //save cat and refresh the page when new cats are saved
  const handleSaveCat = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://6003be.darwelldavid.repl.co/saveCat", {
        catName,
        describe,
        imageurl,
      });
      setUpdateUI((prevState) => !prevState)
    } catch (err) {
      setError(true);
    }
  };

  //set cat data
  useEffect(() => {
    axios.get("https://6003be.darwelldavid.repl.co/showCat")
      .then((res) => {
      console.log(res.data)
        setCat(res.data)
      })
  },[updateUI])

  return (
      <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
              



              <h2>Input New Cat</h2>
                <form onSubmit={handleSaveCat}>

                  <div className='mb-3'>
                        <label htmlFor="name"><strong>Cat Name</strong></label>
                        <input type="text" placeholder='Enter Cat Name' name='name'
                           className='form-control rounded-0' onChange={(e) => setCatName(e.target.value)}/>
  
                    </div>
                  
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Cat Describe</strong></label>
                        <input type="text" placeholder='Enter Cat Name' name='name'  className='form-control rounded-0' onChange={(e) => setDescribe(e.target.value)}/>
                    </div>
                  
                    <div className='mb-3'>
                        <label htmlFor="file"><strong>Cat Image</strong></label>
                        <input type="text" placeholder='Enter Cat Image' name='name'  className='form-control rounded-0' onChange={(e) => setImageurl(e.target.value)}/>
                    </div>





                  
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Submit</button>
                </form>


              <ul>
                {cats.map((cat => 
                         <Catlist 
                           key={cat._id}
                           id={cat._id}
                           catName={cat.catName}
                           describe={cat.describe}
                           imageurl={cat.imageurl}
                           setUpdateUI={setUpdateUI}
                           /> 
                          ))}
                </ul>
              </div>
      </div>   

    
  )
}

export default Home