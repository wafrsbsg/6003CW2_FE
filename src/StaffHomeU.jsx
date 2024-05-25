import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import StaffCatlistU from './StaffCatlistU'
import { useEffect, useState } from 'react'

function StaffHomeU() {
  const [catName, setCatName] = useState('')
  const [describe, setDescribe] = useState('')
  const [imageurl, setImageurl] = useState('')
  const[cats, setCat] = useState([])
  const[updateUI, setUpdateUI] = useState(false)
const [id, setId] = useState(null)
  const[search, setSearch] = useState('')


   const handleUpdateCat = async (e) => {
     e.preventDefault()
     const formdata = new FormData()
    formdata.append('file',imageurl)
     try {
    const res = await axios.put('https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/updateCat/' + id + "/"+ catName + "/"+ describe ,formdata)
      setUpdateUI((prevState) => !prevState)
    } catch (err) {
      setError(true)
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

  //Help set the text of the selected cat data into the textbox
  const showUpdateText = (id, nameText, describeText) => {
    console.log(id)
    setCatName(nameText)
    setDescribe(describeText)
    setId(id)
  }

  //use filter to search cat
const searchedCats = cats.filter(cat=>cat.catName.toLowerCase().includes(search))

  return (
<div className="registerPage">
<br/>


              <h1><b>Update Cat</b></h1>
        

        
                <form onSubmit={handleUpdateCat}>

                  <br/>

                  <div className='mb-3'>
                        <label htmlFor="name"><strong>Cat Name</strong></label>
                        <input type="text" placeholder='Choose Cat' name='name' value={catName}
                           className='form-control rounded-0' onChange={(e) => setCatName(e.target.value)} required />
  
                    </div>
                  
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Cat Describe</strong></label>
                        <input type="text" placeholder='Enter Cat Describe' name='name'  value={describe}className='form-control rounded-0' onChange={(e) => setDescribe(e.target.value)} required/>
                    </div>
                  
<div className='mb-3'>
                        <label htmlFor="file"><strong>Cat Image</strong></label>
                        <input type="file"  name='image'  className='form-control rounded-0' onChange={(e) => setImageurl(e.target.files[0])} required/>
                    </div>




                  
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Submit</button>
                </form>
              <br/>
              <hr/>
              <br/>
              <div className='mb-3'>
                
        <input type="text" placeholder='Search...' className='rounded search' onChange={(e) => setSearch(e.target.value)}/>
                </div>
        <br/>
        <br/>

              <ul>
                {searchedCats.map((cat => 
                         <StaffCatlistU 
                           key={cat._id}
                           id={cat._id}
                           catName={cat.catName}
                           describe={cat.describe}
                           imageurl={cat.imageurl}
                           setUpdateUI={setUpdateUI}
                           showUpdateText={showUpdateText}
                           /> 
                          ))}
                </ul>
              </div>



    
  )
}

export default StaffHomeU