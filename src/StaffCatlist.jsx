import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'

//get data from Home Page
const StaffCatlist = ({key,id,catName,describe,imageurl,setUpdateUI,updateMode}) => {
    const handleDeleteCat = () => {
    axios.delete('https://6003be.darwelldavid.repl.co/deleteCat/' + id)
      .then((res) => {
        console.log(res)
        setUpdateUI((prevState) => !prevState)
      })
  }


    return (
      <div className='justify-content-center  registerPage'>
            <div className='bg-white p-3 rounded w-25 border'>
            <li className='bg-white '>
              {catName}
              {describe}
              {imageurl}
              <button onClick={handleDeleteCat}>Delete</button>
              </li>
        </div>
        </div>
      
  )
  

  
}

export default StaffCatlist