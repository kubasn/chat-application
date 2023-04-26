// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './authActions'

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user') 
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  },
  extraReducers: {
        // login user
        [loginUser.pending]: (state) => {
          state.loading = true
          state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.success = true // registration success
        },
        [registerUser.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = payload // registration error
        },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration success
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload // registration error
    },
  },
})
export default authSlice.reducer