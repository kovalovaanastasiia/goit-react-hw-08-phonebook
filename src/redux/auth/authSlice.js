import {createSlice} from "@reduxjs/toolkit";
import {getProfileThunk, loginThunk, logOutThunk, signUpThunk} from "./thunks";

const initialState = {
  accessToken: "",
  profile: null,
  isLoading: false,
  error: "",
};

const pendingHandler = (state) => {
  state.isLoading = true;
  state.error = "";
};
const logInFulfilledHandler = (state, {payload}) => {
  state.isLoading = false;
  state.accessToken = payload.token;
  state.profile = payload.user;
  console.log(payload.token);
};
const logOutFulfilledHandler = (state) => {
  state.isLoading = false;
  state.profile = null;
  state.accessToken = "";
};
const profileFulfilledHandler = (state, {payload}) => {
  state.isLoading = false;
  state.profile = payload;
};

const rejectedHandler = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload ?? "";
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, logInFulfilledHandler)
      .addCase(loginThunk.fulfilled, logInFulfilledHandler)
      .addCase(getProfileThunk.fulfilled, profileFulfilledHandler)
      .addCase(logOutThunk.fulfilled, logOutFulfilledHandler)
      .addMatcher(({type}) => type.endsWith("/pending"), pendingHandler)
      .addMatcher(({type}) => type.endsWith("/rejected"), rejectedHandler);
  },
});

export const authReducer = authSlice.reducer;
