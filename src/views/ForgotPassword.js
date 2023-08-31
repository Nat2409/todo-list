import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, TextField } from '@mui/material';
import Timer from '../components/Timer';
import axios from 'axios';

// import { connect } from "react-redux";
// import authOperations from "../redux/auth/authOperations";

const ForgotPasswordView = () => {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  // const [verifyEmail, setVerifyEmail] = useState({});

  const handleChange = ({ target: { value } }) => {
    setEmail(value);

    return;
  };
  // useEffect(() => {});
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const verify = await axios.post(
        'https://simple-api-docker.onrender.com/auth/forgotPassword',
        { email: email }
      );
      const verifiedEmail = verify.data;
      console.log('verify', verifiedEmail);
      setDisabled(true);

      setTimeout(() => setDisabled(false), 30000);
    } catch (error) {
      console.log('error:', error);
    }

    // this.props.onLogin({ ...this.state });
    // this.setState({name: '', email: '', password: ''});
  };

  return (
    <div>
      <h1>Verify page</h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
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
          <Button variant="contained" disabled={disabled} type="submit">
            {disabled ? <Timer /> : 'Send email for verify'}
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default ForgotPasswordView;
