import Login from './Login'
import Register from "./Register"
import Home from "./Home"
import Topbar from "./Topbar"
import StaffLogin from './StaffLogin'
import StaffRegister from './StaffRegister'
import StaffHome from './StaffHome'
import PublicHome from './PublicHome'
import PublicFavorite from './PublicFavorite'

import {ContextProvider} from "./Context"

import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    
    <BrowserRouter>
      <ContextProvider>
      <Topbar />
      <Routes>
        <Route path='' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
        <Route path='/staffLogin' element={<StaffLogin />}></Route>
        <Route path='/staffRegister' element={<StaffRegister />}></Route>
        <Route path='/staffHome' element={<StaffHome />}></Route>
        <Route path='/publicHome' element={<PublicHome />}></Route>
        <Route path='/publicFavorite' element={<PublicFavorite />}></Route>
        </Routes>
        </ContextProvider>
  </BrowserRouter>
      
    
  )
}

export default App