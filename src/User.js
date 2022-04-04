import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "./Action";

const User = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserAction())
    },[])

    const userData = useSelector(state => state.user.user_list);
    console.log(userData)
    return(
        <div className="container">
           {
              userData.length>0&&
              userData.map((d,n)=>{
                  return(
                      <div className="card my-3 bg-info">
                          <div className="card-body">
                            {d.email}
                          </div>
                      </div>
                  )
              }) 
           }
        </div>
    )
}

export default User;