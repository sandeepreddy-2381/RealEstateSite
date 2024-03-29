import { SIGNUP_FAIL,SIGNUP_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT } from "../actions/types";

const initialState = {
    token :localStorage.getItem('token'),
    isAuthenticated : null,
    loading : false
};

if (initialState.token!=null){
    initialState.isAuthenticated=true
}


export default function (state=initialState,action)
{
    const {type , payload} = action
    console.log(type,payload)
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.access)
            return {
                ...state,
                isAuthenticated : true,
                loading : false,
                token : payload.access
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                isAuthenticated :false,
                loading :true
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token : null,
                isAuthenticated :false,
                loading : false
            }
        default:
            return state
        
    }
}