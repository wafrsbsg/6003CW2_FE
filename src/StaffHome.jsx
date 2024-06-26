import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import StaffCatlist from './StaffCatlist'
import { useEffect, useState } from 'react'

function StaffHome() {
  const [catName, setCatName] = useState('')
  const [describe, setDescribe] = useState('')
  const [imageurl, setImageurl] = useState('')
  const[cats, setCat] = useState([])
  const[updateUI, setUpdateUI] = useState(false)
  const text = 'text'
  const[search, setSearch] = useState('')

  //save cat and refresh the page when new cats are saved
  const handleSaveCat = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('file',imageurl)
    try {
      const res = await axios.post("https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/saveCat" + catName + "/"+ describe ,formdata)
      
      setUpdateUI((prevState) => !prevState)
      console.log(res)
      //console.log(imageurl)
    } catch (err) {
      setError(true)
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    const formdata = new FormData()
    formdata.append('imageurl',imageurl)
    try{
    await axios.post("https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/saveCat", formdata)
    }catch(err){
      console.log(err)
    }
  }



  
  //set cat data
  useEffect(() => {
    axios.get("https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/showCat")
      .then((res) => {
      console.log(res.data)
        setCat(res.data)
      })
  },[updateUI])

      //use filter to search cat
const searchedCats = cats.filter(cat=>cat.catName.toLowerCase().includes(search))

  return (
    
      <div className="registerPage">
<br/>


              <h1><b>Create New Cat or Delete Cat</b></h1>
        <br/>
        
        <div className=' justify-content-center align-items-center vh-40'>
            <div className='p-3 rounded w-35 border '>

        
                <form onSubmit={handleSaveCat}>

                  <h2><b>Input Data to Create New Cat</b></h2>
                  <br/>

                  <div className='mb-3'>
                        <label htmlFor="name"><strong>Cat Name</strong></label>
                        <input type="text" placeholder='Enter Cat Name' name='name'
                           className='form-control rounded' onChange={(e) => setCatName(e.target.value)} required/>
  
                    </div>
                  
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Cat Describe</strong></label>
                        <input type="text" placeholder='Enter Cat Name' name='name'  className='form-control rounded' onChange={(e) => setDescribe(e.target.value)} required/>
                    </div>
                  
<div className='mb-3'>
                        <label htmlFor="file"><strong>Cat Image</strong></label>
                        <input type="file"  name='image'  className='form-control rounded' onChange={(e) => setImageurl(e.target.files[0])} required/>
                    </div>




                  
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Submit</button>
                </form></div></div>
        <br/>
        <hr></hr>
        <br/>

        <div className=' justify-content-center align-items-center vh-40'>
            <div className='p-3 rounded w-35 border'>
              <div className='mb-3'>
                <h2><b>Browse & Delete Cat</b></h2>
                <br/>
        <input type="text" placeholder='Search...' className='rounded search' onChange={(e) => setSearch(e.target.value)}/>
                </div>
        <br/>
        <br/>

              <ul>
                {searchedCats.map((cat => 
                         <StaffCatlist 
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
</div></div>
    
  )
}

export default StaffHome