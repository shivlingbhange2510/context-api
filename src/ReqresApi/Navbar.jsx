import { useState, useContext } from "react";
import {AuthContext} from '../App';
import './Navbar.css';

export const Navbar = () => {
  const[isLogin, setIslogin]=useState(false)
  const {data} =useContext(AuthContext);
  const handleLogin=()=>{
    setIslogin(true)
  }
 const handleLogout=()=>{
    setIslogin(false)
  }
  return (
    <>
    <div className='navbar'>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleLogout}>Logout</button>

    </div>
       {isLogin?<h3> Token is : {data?.data?.token} </h3> : null}
       </>
  )
}
