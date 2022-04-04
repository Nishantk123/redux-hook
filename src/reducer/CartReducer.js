const initialState={
    cart_list:[]
}

export const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case "CART_LIST":
            return{
                ...state,
                cart_list: action.payload
            }
        default:
            return state;
    }
}