import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
  } from "./ActionType";

  const initialState = {
    user:null,
    isLoading:false,
    error:null,
    jwt:null
  }

  export const authReducer = (state=initialState,action)=>{
   switch(action.type){
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
        return {...state,isLoading:true,error:null}
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
        return {...state,isLoading:false,error:false,jwt:action.payload}
    case GET_USER_SUCCESS:
         return {...state,isLoading:false,error:false,user:action.payload}
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
        return {...state,isLoading:false,error:action.payload}
    default:
        return state
   }
  }