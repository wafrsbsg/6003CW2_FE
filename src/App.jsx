import Login from './Login'
import Register from "./Register"
import Home from "./Home"
import Topbar from "./Topbar"
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
        </Routes>
        </ContextProvider>
  </BrowserRouter>
      
    
  )
}

export default App