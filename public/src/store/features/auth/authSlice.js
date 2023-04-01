import { createSlice } from "@reduxjs/toolkit";
// initialize userToken from local storage

const userToken = JSON.parse(localStorage.getItem("userToken")) || null;

const initialState = {
  adminLogin: userToken?.adminLogin || false,
  login: userToken?.login || false,
  hidePublicRoutes: userToken?.hidePublicRoutes || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handelLogin: (state, { payload }) => {
      state.login = payload?.login;
      state.hidePublicRoutes = payload?.hidePublicRoutes;

      localStorage.setItem(
        "userToken",
        JSON.stringify({
          adminLogin: state.adminLogin,
          login: state.login,
          hidePublicRoutes: state.hidePublicRoutes,
        })
      );
    },
    handelAdminLogin: (state, { payload }) => {
      state.adminLogin = payload?.adminLogin;

      localStorage.setItem(
        "userToken",
        JSON.stringify({
          adminLogin: state.adminLogin,
          login: state.login,
          hidePublicRoutes: state.hidePublicRoutes,
        })
      );
    },
  },
  extraReducers: {
    // login user
    // [userLogin.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [userLogin.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.userInfo = payload;
    //   state.userToken = payload.user_token;
    // },
    // [userLogin.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },
    // register user reducer...
  },
});

export default authSlice.reducer;

export const { handelLogin, handelAdminLogin } = authSlice.actions;
