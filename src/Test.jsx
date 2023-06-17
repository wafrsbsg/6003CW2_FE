import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import StaffCatlist from './StaffCatlist'
import { useEffect, useState } from 'react'

function Test() {
  const [file, setFile] = useState()

  const handleUpload = async (e) => {
    e.preventDefault();
    const formdata = new FormData()
    formdata.append('file',file)
    try {
      const res = await axios.post("https://6003be.darwelldavid.repl.co/upload", formdata);
      
      setUpdateUI((prevState) => !prevState)
      console.log(res)
      //console.log(imageurl)
    } catch (err) {
      setError(true);
    }
  }

  


  return (
    <div>
        <input type="file"   className='form-control rounded-0' onChange={e => setFile(e.target.files[0])} />

        <button onClick={handleUpload}>Upload</button>
</div>


    
  )
}

export default Test