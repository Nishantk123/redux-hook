import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartList } from "./Action";

const Cart = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCartList())
    },[])

    const cartList = useSelector(state => state.cart.cart_list)
    console.log(cartList)
    return(
        <div className="container">
            {
                cartList.map((d,n)=>{
                    return(
                        <div className="bg-success p-3 my-3" key={n}>
                            {d.userId}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;