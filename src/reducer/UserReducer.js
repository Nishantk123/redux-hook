const initialState={
    user_list:[]
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case "USER_LIST":
            return{
                ...state,
                user_list: action.payload
            }
        default:
            return state;
    }
}