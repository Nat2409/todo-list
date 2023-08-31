import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessSignUpToken: null,
  verifyEmail: null,
  verifyToken: null,
  // user: {},
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setVerifyToken: (state, action) => {
      state.verifyToken = action.payload;
    },
    setVerifyEmail: (state, action) => {
      state.verifyEmail = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessSignUpToken: (state, action) => {
      state.accessSignUpToken = action.payload;
    },
    // getVerifyEmail: state => {
    //   console.log('state: ', state);
    //   console.log('email: ', state.verifyEmail);
    //   return state.verifyEmail;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setVerifyEmail,
  setVerifyToken,
  setAccessSignUpToken,
  getVerifyToken,
} = signUpSlice.actions;

export default signUpSlice.reducer;
