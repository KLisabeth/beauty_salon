import Axios from 'axios'
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_APPOINTMENT_TIME } from '../constants/cartConstants';

const addToCart = (serviceId) => async (dispatch, getState)=>{
    try{
const {data} = await Axios.get("/api/service/" + serviceId);
dispatch({
    type: CART_ADD_ITEM , payload:{
    product: data._id,
    name: data.name,
    price: data.price,
    timeSlotSizeMinutes: data.timeSlotSizeMinutes,
    description: data.description
    
}});

const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

    }catch(error){

    }
}
const removeFromCart =(serviceId) => async (dispatch, getState)=>{
  
dispatch({type: CART_REMOVE_ITEM , payload:serviceId});

const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems)); 
}
const saveAppointmentTime = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_APPOINTMENT_TIME, payload: data });
  };

export {addToCart, removeFromCart,saveAppointmentTime}