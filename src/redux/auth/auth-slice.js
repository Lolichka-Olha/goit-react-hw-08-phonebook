import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [authOperations.currentUser.pending](state) {
      state.isCurrentUser = true;
    },
    [authOperations.currentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLogin = true;
      state.isCurrentUser = false;
    },
    [authOperations.currentUser.rejected](state) {
      state.isCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
