import axios from "axios";

export const productAction = () => dispatch =>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{
        dispatch({
            type:"PRODUCT_LIST",
            payload: res.data
        })
    })

}

export const getUserAction = () => dispatch =>{
    axios.get("https://fakestoreapi.com/users")
    .then(res =>{
        console.log(res.data)
        dispatch({
            type:"USER_LIST",
            payload: res.data
        })
    })
}

export const getCartList = () => dispatch =>{
    axios.get("https://fakestoreapi.com/carts")
    .then(res =>{
        console.log(res.data)
        dispatch({
            type:"CART_LIST",
            payload: res.data
        })
    })
}