import {
  SERVICE_LIST_FAIL,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_DETAILS_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
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
  SERVICE_UPDATE_FAIL,
} from "../constants/serviceConstants";

function serviceListReducer(state = { services: [] }, action) {
  switch (action.type) {
    case SERVICE_LIST_REQUEST:
      return { loading: true , services:[]};
    case SERVICE_LIST_SUCCESS:
      return { loading: false, services: action.payload };
    case SERVICE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function serviceDetailsReducer(state = { service: {} }, action) {
  switch (action.type) {
    case SERVICE_DETAILS_REQUEST:
      return { loading: true };
    case SERVICE_DETAILS_SUCCESS:
      return { loading: false, service: action.payload };
    case SERVICE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export const serviceUpdateReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case SERVICE_UPDATE_REQUEST:
      return { loading: true };
    case SERVICE_UPDATE_SUCCESS:
      return { loading: false, success: true, service: action.payload };
    case SERVICE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
function serviceDeleteReducer(state = { service: {} }, action) {
  switch (action.type) {
    case SERVICE_DELETE_REQUEST:
      return { loading: true };
    case SERVICE_DELETE_SUCCESS:
      return { loading: false, service: action.payload, success: true };
    case SERVICE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function serviceSaveReducer(state = { service: {} }, action) {
  switch (action.type) {
    case SERVICE_SAVE_REQUEST:
      return { loading: true };
    case SERVICE_SAVE_SUCCESS:
      return { loading: false, success: true, service: action.payload };
    case SERVICE_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
function serviceCategoryListReducer( state = { categories: [] }, action) {
  switch (action.type) {
    case SERVICE_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case SERVICE_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case SERVICE_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export { serviceListReducer, serviceDetailsReducer, serviceSaveReducer, serviceDeleteReducer, serviceCategoryListReducer}; 
