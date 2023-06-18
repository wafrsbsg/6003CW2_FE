import { Link } from "react-router-dom";
import {useState,useEffect,useContext, useRef} from 'react'
import "./App.css";
import axios from 'axios'
import {Context} from "./Context"

export default function TopBar() {
  //get user data from context
  const {setUserData, userData} = useContext(Context)
  const {staffData,setStaffData} = useContext(Context)

  useEffect(() => {
    fetch('https://6003be.darwelldavid.repl.co/data', {
       credentials: 'include',
    }).then(res => {
      res.json().then(staffData => {
        setStaffData(staffData);
    })
  })
    },[])
  
  useEffect(() => {
    fetch('https://6003be.darwelldavid.repl.co/data', {
       credentials: 'include',
    }).then(res => {
      res.json().then(userData => {
        setUserData(userData);
    })
  })
    },[])

  

  //logout
  function logout() {
    fetch('https://6003be.darwelldavid.repl.co/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserData(null)
    setStaffData(null)
  }

  const email = userData?.email
  const staffEmail = staffData?.email

  //Display different topbars depending on whether are logged in or not
  return (
    <div className="topBar">
      
      <div className="flex-3 display-flex align-items-center justify-content-center topCenter">
        
        

        {staffEmail && !email && (
             <ul className="topList">
          
          <li className="topListItem">
            <Link className="link" to="/staffHome">
              CREATE & DELETE CAT
            </Link>
          </li>

               <li className="topListItem">
            <Link className="link" to="/staffHomeU">
              UPDATE CAT
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="/staffMessage">
              MANAGE MESSAGE
            </Link>
          </li>
          
          
        </ul>
          )}

        {email&& (
             <ul className="topList">
          
          <li className="topListItem">
            <Link className="link" to="/publicHome">
              HOME
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="/publicFavorite">
              FAVORITES
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="/publicMessage">
              CONTACT US
            </Link>
          </li>
          
        </ul>
          )}
        {!email && !staffEmail && (
      <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        )}
       
      </div>
      <div className="topRight">
        {email && (
      <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/" onClick={logout}>
                LOGOUT ({email})
              </Link>
            </li>
          </ul>
          
      )}

        {staffEmail && !email && (
      <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/" onClick={logout}>
                LOGOUT ({staffEmail})
              </Link>
            </li>
          </ul>
          
      )}

        
        {!email && !staffEmail && (
      <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                PUBLIC LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                PUBLIC REGISTER
              </Link>
            </li>
        <li className="topListItem">
              <Link className="link" to="/staffLogin">
                STAFF LOGIN
              </Link>
            </li>
        <li className="topListItem">
              <Link className="link" to="/staffRegister">
                STAFF REGISTER
              </Link>
            </li>
          </ul>
      )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}