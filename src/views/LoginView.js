import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  FormControl,
  TextField,
  ButtonGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAccessSignUpToken, setVerifyToken } from '../redux/auth/authSlice';
// import { connect } from "react-redux";
// import authOperations from "../redux/auth/authOperations";

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const getAccessSignUpToken = useSelector(
    state => state.auth.accessSignUpToken
  );
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
      return;
    } else if (name === 'password') {
      setPassword(value);
      return;
    }

    // return;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const logIn = await axios.post(
        'https://simple-api-docker.onrender.com/auth/signIn',
        { email: email, password: password }
      );
      console.log('logIn: ', logIn);
      const accessToken = logIn.data.accessToken;
      console.log('accessToken: ', accessToken);
      dispatch(setAccessSignUpToken(accessToken));

      if (getAccessSignUpToken) {
        return redirect('auth/');
      }
    } catch (error) {
      console.log('error: ', error.message);
      console.log('error: ', error.response.data.message);
    }
    // this.props.onLogin({ ...this.state });
    // this.setState({name: '', email: '', password: ''});
  };

  const handleRedirect = e => {
    const value = e.target.value;
    if (value === 'sign-up') {
      console.log('redirect to auth/sign-up');
      return navigate('/auth/verify');
    } else if (value === 'forgot-password') {
      console.log('redirect to auth/forgot-password');
      return navigate('/auth/forgot-password');
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <FormControl onSubmit={handleSubmit}>
        {/* <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label> */}
        <TextField
          sx={{ mb: 1 }}
          // id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {/* <TextField
          sx={{ mb: 1 }}
          // id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        /> */}
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
        {/* <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label> */}
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Log in
        </Button>
      </FormControl>

      <div>
        <ButtonGroup
          variant="text"
          aria-label="outlined button group"
          sx={{ mt: 2 }}
        >
          <Button
            // sx={{ mr: 2 }}
            variant="text"
            type="button"
            value="sign-up"
            onClick={handleRedirect}
          >
            Sign up
          </Button>

          <Button
            variant="text"
            type="button"
            value="forgot-password"
            onClick={handleRedirect}
          >
            Forgot password
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default LoginView;
