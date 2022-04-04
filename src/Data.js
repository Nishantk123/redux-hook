import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TestData from './TestData';
function Data() {

    let [name, setName] = useState(""); //state
    let [email, setEmail] = useState("");
    let [list, setList] = useState([])

    console.log(name, email)
    useEffect(()=>{
        setName("after")  
    },[])

    useEffect(()=>{
        axios.get("https://api.spacexdata.com/v3/launches")
        .then(res =>{
          console.log(res.data)
          setList(res.data)
        })
    },[name, email])

    useEffect(()=>{
        setName("last")
    },[])
    // console.log(list);
  return (
    <div className="container p-3">
        <input className="form-control" placeholder="Enter Name" value ={name} onChange={(e)=> setName(e.target.value)}/>
        <input className="form-control mt-3" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
        
        <div>{name}</div>
        {
          list.length>0&& list.map((data, index)=>{
            return(
              <div>
                <TestData name ="XYZ" age={40} />
              </div>
            )
          })
        }
    </div>
  );
}

export default Data;