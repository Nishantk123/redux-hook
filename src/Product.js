import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {productAction} from './Action';
const Product = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(productAction())
    },[])

    const product_list = useSelector(state => state.product.product)
    return(
        <div className="container">
            {
              product_list.length>0&&(
                product_list.map((d,n)=>{
                    return(
                        <div key={n} className="card my-3">
                            <div className="card-body bg-info">
                                <div>{d.category}</div>
                                <div>{d.description}</div>
                            </div>
                        </div>
                    )
                })
              )  
            }
        </div>
    )
}

export default Product;