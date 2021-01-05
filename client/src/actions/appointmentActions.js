import Axios from 'axios';
import Cookie from 'js-cookie';
import { 
    APPOINTMENT_FAIL, 
    APPOINTMENT_REQUEST, 
    APPOINTMENT_SUCCESS, 
    } from '../constants/appointmentConstants';


const create = (name, email, phone,  slot_time,  slot_date ) => async (dispatch)=>{
    try{
    dispatch({type:APPOINTMENT_REQUEST, payload:{name, email, phone, slot_time,  slot_date}});
    const {data} = await Axios.post('/api/appointment',{name, email, phone, slot_time,  slot_date})
        dispatch({type:APPOINTMENT_SUCCESS, payload:data});
        Cookie.set( JSON.stringify(data))
    }catch(error){
        dispatch({type:APPOINTMENT_FAIL, payload: error.message});
    }
}



export {create};