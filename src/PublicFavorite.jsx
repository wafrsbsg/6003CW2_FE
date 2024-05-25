import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PublicFavoritelist from './PublicFavoritelist'
import { useState, useContext, useEffect, useRef } from 'react'
import { Context } from "./Context"

function PublicFavorite() {
  const [cats, setCat] = useState([])
  const [updateUI, setUpdateUI] = useState(false)
  const { userData } = useContext(Context)
  const userEmail = userData.email
  const [search, setSearch] = useState('')

  //After get the current user's email and sending it to the backend, get the current user's favorite list from the backend based on the email
  useEffect(() => {
    axios.get("https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/showLikeCat/" + userEmail)
      .then((res) => {
        console.log({ userEmail })
        setCat(res.data)
      })
  }, [updateUI])

  //use filter to search cat
  const searchedCats = cats.filter(cat => cat.catName.toLowerCase().includes(search))

  return (
    <div className='registerPage'>
      <br />
      <h1><b>Your Favorite Cat</b></h1>
      <br />
      <input type="text" placeholder='Search...' className='form-control rounded search' onChange={(e) => setSearch(e.target.value)} />

      <br />
      <ul>
        {searchedCats.map((cat =>
          <PublicFavoritelist
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

export default PublicFavorite