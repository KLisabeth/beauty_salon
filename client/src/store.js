import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  serviceDeleteReducer,
  serviceDetailsReducer,
  serviceListReducer,
  serviceSaveReducer,
} from "./reducers/serviceReducers";
import { cartReducer } from "./reducers/cartReducer";
import Cookie from "js-cookie";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }, userSignin:{userInfo} };
const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceDetails: serviceDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  serviceSave: serviceSaveReducer,
  serviceDelete: serviceDeleteReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
