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


   const handleUpdateCat = async (e) => {
     e.preventDefault();
     const formdata = new FormData()
    formdata.append('file',imageurl)
     try {
    const res = await axios.put('https://6003be.darwelldavid.repl.co/updateCat/' + id + "/"+ catName + "/"+ describe ,formdata)
      setUpdateUI((prevState) => !prevState)
    } catch (err) {
      setError(true);
    }
  }

  
  //set cat data
  useEffect(() => {
    axios.get("https://6003be.darwelldavid.repl.co/showCat")
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

  return (
      <div>



              <h2>Update Cat</h2>
                <form onSubmit={handleUpdateCat}>

                  <div className='mb-3'>
                        <label htmlFor="name"><strong>Cat Name</strong></label>
                        <input type="text" placeholder='Enter Cat Name' name='name' value={catName}
                           className='form-control rounded-0' onChange={(e) => setCatName(e.target.value)}/>
  
                    </div>
                  
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Cat Describe</strong></label>
                        <input type="text" placeholder='Enter Cat Name' name='name'  value={describe}className='form-control rounded-0' onChange={(e) => setDescribe(e.target.value)}/>
                    </div>
                  
<div className='mb-3'>
                        <label htmlFor="file"><strong>Cat Image</strong></label>
                        <input type="file"  name='image'  className='form-control rounded-0' onChange={(e) => setImageurl(e.target.files[0])} />
                    </div>





                  
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Submit</button>
                </form>


              <ul>
                {cats.map((cat => 
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