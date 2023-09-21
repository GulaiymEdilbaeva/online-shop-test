import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

const signUp = createAsyncThunk("auth/signUp", async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signUp`, data);

    localStorage.setItem("clientData", JSON.stringify(response.data));
    toast.success("You successfuly!");
    return response.data;
    // console.log(response);
  } catch (error) {
    toast.error(error.message);
    return error.message;
  }
});

const signIn = createAsyncThunk("auth/signIn", async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signIn`, data);

    localStorage.setItem("clientData", JSON.stringify(response.data));
    toast.success("You successfuly!");
    return response.data;
    // console.log(response);
  } catch (error) {
    toast.error(error.message);
    return error.message;
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuthorizated: false,
    data: {},
  },
  reducers: {
    autoLogin(state, { payload }) {
      (state.isAuthorizated = true), (state.data = payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthorizated = true;
        // if(typeof action.payload !== 'string'){

        // }
        state.data = action.payload;
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthorizated = true;
        // if(typeof action.payload !== 'string'){

        // }
        state.data = action.payload;
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
      }),
});
export const authActions = authSlice.actions;
export { authSlice, signUp, signIn };
