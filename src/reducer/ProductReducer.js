const initialState={
    product:[],
    user_data:[]
}

export const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case "PRODUCT_LIST":
            return{
                ... state,
                product: action.payload
            }
        // case "USER_LIST":
        //     return{
        //         ... state,
        //         user_data: action.payload
        //     }
        default:
            return state
    }
}