import { useState,useEffect, createContext } from "react";
import {Navbar} from './ReqresApi/Navbar';
import axios from 'axios';

 export  const AuthContext = createContext();


export function App() {

 const email="eve.holt@reqres.in";
 const password = "cityslicka";
    const[data, setData]=useState()
    const registerUser1=()=>{
        axios.post(`https://reqres.in/api/login`,{
            email, password
        })
        .then((res)=>{
            console.log('response api reg ', res)
            setData(res)
        }).catch((er)=>{
            console.log('API err', er)
        })
    }
    useEffect(()=>{
        registerUser1()
    },[])
  return (
    <div className="Ap1p">  
     <AuthContext.Provider value={{data}}>
            <Navbar/>    
     </AuthContext.Provider>
 
    </div>
  );
}

// export  App;
