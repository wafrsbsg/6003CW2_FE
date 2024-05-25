import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'

//get data from Home Page
const Catlist = ({ id, catName, describe, imageurl, setUpdateUI }) => {
  const pleaseLogin = () => {
    alert('Please Login')
  }


  return (

    <div className='bg-white p-2 h-100 rounded w-25 border m-2 list'>
      <li className='li'>
        <img src={'https://ec014493-d2d7-4fa2-95fc-04a64c4aa7b4-00-clzutjej6qos.spock.replit.dev/images/' + imageurl} className='image' />
        <b>Cat Name:</b><br /> {catName}
        <br />
        <b>Describe:</b><br /> {describe}
        <br />
        <button onClick={pleaseLogin} className='btn btn-success button'>Like</button>
      </li>
    </div>

  )



}

export default Catlist