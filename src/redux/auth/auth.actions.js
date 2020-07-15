import * as types from './auth.types';
import {
  loginPost,
  logoutGet,
  registerPost,
  forgotPasswordPost,
} from '../../api';

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: user,
});

export const loginRequest = payload => async dispatch => {
  dispatch({ type: types.LOGIN_REQUEST, payload });
  try {
    const response = await loginPost(payload);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.LOGIN_FAILURE, payload: err });
    throw err;
  }
};

export const logoutRequest = () => async dispatch => {
  dispatch({ type: types.LOGOUT_REQUEST });
  try {
    const response = await logoutGet();
    dispatch({ type: types.LOGOUT_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.LOGOUT_FAILURE, payload: err });
    throw err;
  }
};

export const registerRequest = payload => async dispatch => {
  dispatch({ type: types.REGISTER_REQUEST, payload });
  try {
    const response = await registerPost(payload);
    dispatch({ type: types.REGISTER_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.REGISTER_FAILURE, payload: err });
    throw err;
  }
};

export const forgotPasswordRequest = payload => async dispatch => {
  dispatch({ type: types.FORGOT_PASSWORD_REQUEST, payload });
  try {
    const response = await forgotPasswordPost(payload);
    dispatch({ type: types.FORGOT_PASSWORD_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.FORGOT_PASSWORD_FAILURE, payload: err });
    throw err;
  }
};
