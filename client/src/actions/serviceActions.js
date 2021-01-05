import { 
    SERVICE_LIST_REQUEST, 
    SERVICE_LIST_SUCCESS, 
    SERVICE_LIST_FAIL, 
    SERVICE_DETAILS_REQUEST, 
    SERVICE_DETAILS_SUCCESS,
    SERVICE_DETAILS_FAIL ,
    SERVICE_SAVE_REQUEST,
    SERVICE_SAVE_SUCCESS,
    SERVICE_SAVE_FAIL,
    SERVICE_DELETE_REQUEST,
    SERVICE_DELETE_SUCCESS,
    SERVICE_DELETE_FAIL,
    SERVICE_CATEGORY_LIST_REQUEST,
    SERVICE_CATEGORY_LIST_SUCCESS,
    SERVICE_CATEGORY_LIST_FAIL,
    SERVICE_UPDATE_REQUEST,
    SERVICE_UPDATE_SUCCESS,
    SERVICE_UPDATE_FAIL
    } from "../constants/serviceConstants";
import Axios from 'axios';

const listServices = () => async (dispatch) => {
    try{
    dispatch({type: SERVICE_LIST_REQUEST});
    const {data} = await Axios.get("/api/service");
    dispatch({type: SERVICE_LIST_SUCCESS, payload: data});
}catch(error){
    dispatch({ type: SERVICE_LIST_FAIL, payload: error.message})
}
}
export const updateService = (service) => async (dispatch, getState) => {
    try {
      dispatch({ type: SERVICE_UPDATE_REQUEST, payload: service });
  
      const {userSignin: {userInfo}} = getState();
  
      const { data } = await Axios.put(`/api/service/${service._id}`, service, {
        headers: {
            'Authorization':"Bearer" + userInfo.token
        },
      });
      dispatch({ type: SERVICE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SERVICE_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
const detailsService = (serviceId) => async (dispatch) =>{
    try{
        dispatch({type: SERVICE_DETAILS_REQUEST, payload: serviceId});
        const {data} = await Axios.get("/api/service/" + serviceId);
        dispatch({type: SERVICE_DETAILS_SUCCESS, payload: data});
    }catch(error){
        dispatch({ type: SERVICE_DETAILS_FAIL, payload: error.message})
    }
}

const saveService = (service) => async (dispatch, getState) =>{
    try{
        dispatch({type: SERVICE_SAVE_REQUEST, payload: service});
        const {userSignin: {userInfo}} = getState();
        if(!service._id){
            const {data} = await Axios.post("/api/service", service, {
                headers:{
                'Authorization':"Bearer" + userInfo.token
            }});
        dispatch({type: SERVICE_SAVE_SUCCESS, payload: data});
        }else{
            const {data} = await Axios.put("/api/service/" + service._id, service, 
        {headers:{
            'Authorization':"Bearer" + userInfo.token
        }});
        dispatch({type: SERVICE_SAVE_SUCCESS, payload: data});
        }
       
    }catch(error){
        dispatch({ type: SERVICE_SAVE_FAIL, payload: error.message})
    }
}

const deleteService = (serviceId) => async (dispatch, getState) =>{
    try{
        const {userSignin: {userInfo}} = getState();
        dispatch({type: SERVICE_DELETE_REQUEST, payload: serviceId});
        const {data} = await Axios.delete("/api/service/" + serviceId,{
            headers:{
                'Authorization':"Bearer" + userInfo.token
            }
        });
        dispatch({type: SERVICE_DELETE_SUCCESS, payload: data, success: true});
    }catch(error){
        dispatch({ type: SERVICE_DELETE_FAIL, payload: error.message})
    }
}
const listServiceCategories = () => async (dispatch) => {
    dispatch({ type: SERVICE_CATEGORY_LIST_REQUEST, loading: true });
    try {
      const result = await Axios.get('/api/service/categories');
      dispatch({ type: SERVICE_CATEGORY_LIST_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({
        type: SERVICE_CATEGORY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export {listServices, detailsService, saveService, deleteService, listServiceCategories}