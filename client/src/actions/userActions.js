import Axios from 'axios';
import Cookie from 'js-cookie';
import { 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNOUT} from '../constants/userConstants';

const signin = (email, password) => async (dispatch)=>{
    try{
    dispatch({type:USER_SIGNIN_REQUEST, payload:{email, password}});
    const {data} = await Axios.post('/api/users/signin',{email, password})
        dispatch({type:USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({type:USER_SIGNIN_FAIL, payload: error.message});
    }
}
const register = (name, email, phone, password) => async (dispatch)=>{
    try{
    dispatch({type:USER_REGISTER_REQUEST, payload:{name, email, phone, password}});
    const {data} = await Axios.post('/api/users/register',{name, email, phone, password})
        dispatch({type:USER_REGISTER_SUCCESS, payload:data});
        Cookie.set('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch({type:USER_REGISTER_FAIL, payload: error.message});
    }
}
const signout = () => (dispatch) => {
    Cookie.set('userInfo', JSON.stringify(null));
    dispatch({ type: USER_SIGNOUT });
  };


export {signin, register, signout};