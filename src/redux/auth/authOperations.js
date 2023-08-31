import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const token = {};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerError(error)));
};
const logIn = credentials => dispatch => {
  dispatch(authActions.loginRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginError(error)));
};

const logout = credentials => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.logoutSuccess(response.data));
    })
    .catch(error => dispatch(authActions.logoutError(error)));
};

const getCurrentUser = credentials => dispatch => {
  dispatch(authActions.getCurrentUserRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.getCurrentUserSuccess(response.data));
    })
    .catch(error => dispatch(authActions.getCurrentUserError(error)));
};
