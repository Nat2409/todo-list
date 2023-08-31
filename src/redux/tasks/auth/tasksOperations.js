import axios from 'axios';
import tasksActions from './tasksActions';

axios.defaults.baseURL = 'https://localhost:2000';

const addTask = text => dispatch => {
  dispatch(tasksActions.addTaskRequest());
  axios
    .post('/tasks', { text, completed: false })
    .then(({ data }) => {
      dispatch(tasksActions.addTaskSuccess(data));
    })
    .catch(error => dispatch(tasksActions.addTaskError(error)));
};
const fetchTasks = () => dispatch => {
  dispatch(tasksActions.fetchTasksRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginError(error)));
};

const removeTask = id => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.logoutSuccess(response.data));
    })
    .catch(error => dispatch(authActions.logoutError(error)));
};

const toggleCompleted = id => dispatch => {
  dispatch(authActions.getCurrentUserRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.getCurrentUserSuccess(response.data));
    })
    .catch(error => dispatch(authActions.getCurrentUserError(error)));
};

export default {
  addTask,
  removeTask,
  fetchTasks,
  toggleCompleted,
};
