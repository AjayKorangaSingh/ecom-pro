import axios from "axios";
import { url } from "../../config/cofigApi";
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

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${url}/auth/register`, userData);
    const user = response.token;
    if (user) {
      localStorage.setItem("jwt", user);
    }
    dispatch(registerSuccess(user));
  } catch (err) {
    dispatch(registerFailure());
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${url}/auth/signin`, userData);
    const user = response.token;
    if (user) {
      localStorage.setItem("jwt", user);
    }
    dispatch(loginSuccess(user));
  } catch (err) {
    dispatch(loginFailure());
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });
const token  = localStorage.getItem('jwt')

export const getUser = () => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.post(`${url}/api/users/profile`,{
      headers:{
         "Authorization":`Bearer ${token}`
      }
    });
    const user = response.user;
    dispatch(getUserSuccess(user));
  } catch (err) {
    dispatch(getUserFailure(err));
  }
};

export const logout = ()=>async(dispatch)=>{
dispatch({type:'LOGOUT',payload:null})
}
