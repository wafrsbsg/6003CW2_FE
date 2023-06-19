import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'

//get data from Home Page
const StaffCatlist = ({id,catName,describe,imageurl,setUpdateUI}) => {
  //delete cat
    const handleDeleteCat = () => {
    axios.delete('https://6003be.darwelldavid.repl.co/deleteCat/' + id)
      .then((res) => {
        console.log(res)
        alert('delete successful')
        setUpdateUI((prevState) => !prevState)
      })
  }

 

    return (
      <div className='bg-white p-2 h-100 rounded w-25 border m-2 list'>
            <li className='li'>
              <img src={'https://6003be.darwelldavid.repl.co/images/' + imageurl} className='image'/>
              <b>Cat Name:</b><br/> {catName}
              <br/>
              <b>Describe:</b><br/> {describe}
              <br/>
              <button onClick={handleDeleteCat} className='btn btn-success button'>Delete</button>
              </li>
        </div>
      
  )
  

  
}

export default StaffCatlist