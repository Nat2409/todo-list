import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  // Visibility,
  // VisibilityOff,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getVerifyEmail, setAccessSignUpToken } from '../redux/auth/authSlice';
// import { connect } from "react-redux";
// import authOperations from "../redux/auth/authOperations";

const RegisterView = () => {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  // const verifyToken = useLocation();
  let createUser = null;
  const dispatch = useDispatch();
  const verifyEmail = useSelector(state => state.auth.verifyEmail);
  const verifyToken = useSelector(state => state.auth.verifyToken);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  useEffect(() => {
    console.log('createUser in useEffect: ', createUser);
  }, user);
  // console.log(
  //   'verifyEmail: ',
  //   useSelector(state => state.verifyEmail)
  // );
  // setVerifyToken(params.search.slice(13));
  // console.log('params:', verifyToken);
  // const handleRedirect = e => {
  //   return navigate('/auth/login');
  // };
  useEffect(() => {
    // const verifiedEmail = dispatch(getVerifyEmail);
    // console.log('verifiedEmail: ', verifiedEmail);
    // setEmail(dispatch(getVerifyEmail));
    // const signIn = axios.post(
    //   'https://simple-api-9x8f.onrender.com/auth/signUp',
    //   user
    // );
    // console.log('user: ', user);
    // console.log('signIn: ', signIn);
    // console.log(
    //   'signIn: ',
    // fetch('https://simple-api-9x8f.onrender.com/auth/signIn', user).then(res =>
    //   console.log(res)
    // );
    // .then(token => console.log(token));
    // );
  });

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async e => {
    console.log('userName: ', name);
    // console.log('userEm: ', email);
    console.log('userPas: ', password);
    e.preventDefault();

    setUser({
      password: password,
      name: name,
      verifyToken: verifyToken,
    });
    console.log('user:', user);
    createUser = await axios.post(
      'https://simple-api-docker.onrender.com/auth/signUp',
      user
    );
    // if()
    // const res = createUser;
    // if()
    // dispatch(setAccessSignUpToken(createUser.data.accessToken));
    console.log('createUser: ', createUser);
    // this.props.onRegister({ ...this.state });
    // this.setState({name: '', email: '', password: ''});
  };

  return (
    <div>
      <h1>Create new account</h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            sx={{ mb: 1 }}
            label="Name"
            variant="outlined"
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <TextField
            sx={{ mb: 1 }}
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={verifyEmail}
          />
          <FormControl>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              sx={{ mb: 1 }}
              label="Password"
              variant="outlined"
              type={showPassword ? 'password' : 'text'}
              name="password"
              value={password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Register
          </Button>
        </FormControl>
      </form>
      <Button
        sx={{ mt: 2 }}
        variant="outlined"
        type="button"
        value="login"
        onClick={() => navigate('/auth/login')}
      >
        Log in
      </Button>
    </div>
  );
};

export default RegisterView;
