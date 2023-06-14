import { Link } from "react-router-dom";
import {useState,useEffect,useContext, useRef} from 'react'
import "./App.css";
import axios from 'axios'
import {Context} from "./Context"

export default function TopBar() {
  //get user data from context
  const {setUserData, userData} = useContext(Context)
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
  }

  const email = userData?.email

  //Display different topbars depending on whether are logged in or not
  return (
    <div className="topBar">
      
      <div className="flex-3 display-flex align-items-center justify-content-center topCenter">
        
        {email && (
             <ul className="topList">
          
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="">
              FAVORITES
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="">
              CONTACT US
            </Link>
          </li>
          
        </ul>
          )}
        {!email && (
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
              <a onClick={logout}>
                LOGOUT ({email})
              </a>
            </li>
          </ul>
          
      )}
        {!email && (
      <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
      )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}