import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const login = createAsyncThunk("auth/login", async (formvalue,navigate,toast) => {

  try {
    const response =await api.signIn(formvalue)
    toast.success("Login is Successfully")
    navigate("/")
    return response.data

  } catch (error) {
    console.log(error);
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: null,
    error: "",
    loading: false
  },
  extraReducers:{
    [login.pending]:(state,action)=>{
        state.loading=true
    },
    [login.fulfilled]:(state,action)=>{
        state.login=false
        localStorage.setItem("profile",JSON.stringify({...action.payload}))
        state.user=action.payload
    },
    [login.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload.message

    }
  }
});

export default authSlice.reducer;
