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

const RecoveryView = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  console.log('token:::', props);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const getAccessSignUpToken = useSelector(
    state => state.auth.accessSignUpToken
  );
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);
  const handleMouseDownConfirmPassword = event => {
    event.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'password') {
      setPassword(value);
      return;
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
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
      <h1>Recovery page</h1>
      <FormControl onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="outlined-adornment-password">
            New password
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
        <FormControl>
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm new password
          </InputLabel>
          <OutlinedInput
            sx={{ mb: 1 }}
            label="Password"
            variant="outlined"
            type={showConfirmPassword ? 'password' : 'text'}
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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

export default RecoveryView;
