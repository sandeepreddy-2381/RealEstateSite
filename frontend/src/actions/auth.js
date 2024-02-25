import axios from 'axios'
import  {setAlert } from './alert';

import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT
} from './types';


export const login = ( email,password) => async dispatch =>{
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({email,password})

    try{
        const res = await axios.post('http://localhost:8000/api/token/',body,config);
        dispatch ({
            type : LOGIN_SUCCESS,
            payload : res.data
        });
        dispatch(setAlert('Authenticated successfully'));

    }
    catch (err){
        dispatch ({
            type : LOGIN_FAIL
        });
        dispatch(setAlert('Authentication failure','error'));
    }
}



export const signup = (name , email , password1,password2) => async dispatch =>
{
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({name,email,password1,password2});

    try{
        const res = await axios.post('http://localhost:8000/api/accounts/signup',body,config);
        dispatch ({
            type : SIGNUP_SUCCESS,
            payload : res.data
        });
        dispatch(login(email,password1));
    }
    catch (err){
        dispatch ({
            type : SIGNUP_FAIL
        });
        dispatch(setAlert('Authentication failure','error'));
    }

}


export const logout = () => dispatch => {
    dispatch(setAlert('logout successful.','success'))
    dispatch({type : LOGOUT });
}