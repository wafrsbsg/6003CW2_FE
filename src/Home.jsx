import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Catlist from './Catlist'
import { useEffect, useState } from 'react'

function Home() {
  const [cats, setCat] = useState([])
  const [updateUI, setUpdateUI] = useState(false)


  //set cat data
  useEffect(() => {
    axios.get("https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/showCat")
      .then((res) => {
        console.log(res.data)
        setCat(res.data)
      })
  }, [updateUI])

  return (



    <div className='registerPage'>
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

  )
}

export default Home