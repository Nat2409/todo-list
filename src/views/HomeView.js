import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import {
  getVerifyEmail,
  setVerifyEmail,
  setVerifyToken,
} from '../redux/auth/authSlice';
import { Button } from '@mui/material';
import { redirect } from 'react-router-dom';
import Loader from '../components/Loader';
import User from '../components/User';

const HomeView = () => {
  const [user, setUser] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(true);

  console.log('робимо запит на бекенд');
  console.log('shouldRedirect', shouldRedirect);
  const params = useLocation();

  console.log('params:', params.search);

  const token = useSelector(state => state.auth.verifyToken)
    ? 'Perfect'
    : 'sad';
  console.log('token:', token);

  const dispatch = useDispatch();
  // console.log(decodedEmail);
  // setVerifyToken(params.search.slice(13));
  console.log('params:', params);
  useEffect(() => {
    params.search &&
      dispatch(setVerifyToken(params.search.slice(13))) &&
      dispatch(setVerifyEmail(jwt_decode(params.search.slice(13)).email));
    //  &&setToken(params.search.slice(13));
    console.log('token:', params.search.slice(13));
  });
  // useEffect(() => {
  //   // params && setToken(params.search.slice(13));
  //   console.log('token:', params.search.slice(13));
  //   params && setToken(params.search.slice(13));
  // });
  // useEffect(() => {
  //   // const decodedEmail = jwt_decode(token).email;
  //   console.log('token: ', params.search.slice(13));
  //   token && dispatch(setVerifyToken(params.search.slice(13)));
  //   console.log(
  //     'dispatchToken',
  //     dispatch(setVerifyToken(params.search.slice(13)))
  //   );

  //   // token && dispatch(setVerifyEmail(decodedEmail));
  //   console.log(
  //     'dispatchEmail',
  //     dispatch(setVerifyEmail(jwt_decode(params.search.slice(13)).email))
  //   );
  // });
  // useEffect(() => {
  //   // params && setToken(params.search.slice(13));
  //   console.log('token:', params.search.slice(13));
  //   params &&
  //     setToken(params.search.slice(13)) &&
  //     dispatch(setVerifyToken(params.search.slice(13)));
  //   console.log(
  //     'dispatchToken',
  //     dispatch(setVerifyToken(params.search.slice(13)))
  //   );

  //   token && dispatch(setVerifyEmail(decodedEmail));
  //   console.log('dispatchEmail', dispatch(setVerifyEmail(decodedEmail)));
  // });
  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get('?verifyToken=');
  // console.log('params:', searchParams);
  // getUser = () => {
  //   console.log('робимо запит на бекенд');
  //   this.setState(null);
  //   return;
  // };
  // loader = async () => {
  //   // const user = await getUser();
  //   console.log('робимо запит на бекенд');
  //   const user = this.state;
  //   if (!user) {
  //     return redirect('auth/login');
  //   }
  //   return null;
  // };
  // loader();

  return (
    <div>
      {/* <Loader /> */}
      {shouldRedirect && <Navigate replace to="auth/verify" />}
      {token && <Navigate replace to="auth/sign-up" />}
      <User />
      <br />
      <br />
      <br />
      <h1>Home View</h1>
    </div>
  );
};
export default HomeView;
