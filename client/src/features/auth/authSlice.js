import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginuser, signup } from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userExist ? userExist : null,
  userLoading: false,
  userError: false,
  userSuccess: false,
  userMessage: "",
};

export const signin = createAsyncThunk(
  "auth/signin", // Updated action type for clarity
  async (frontendData, thunkAPI) => {
    try {
      return await loginuser(frontendData);
    } catch (error) {
      // Capture and return the error message
      return thunkAPI.rejectWithValue(
        error.response.data.error || "Login failed"
      );
    }
  }
);

export const registeruser = createAsyncThunk(
  "auth/signup", // Updated action type for clarity
  async (frontendData, thunkAPI) => {
    try {
      return await signup(frontendData);
    } catch (error) {
      // Capture and return the error message
      return thunkAPI.rejectWithValue(
        error.response.data.error || "Login failed"
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.userError = false;
      state.userMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(signin.rejected, (state, action) => {
        state.user = null;
        state.userLoading = false;
        state.userSuccess = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userMessage = "Welcome!";
        state.user = action.payload;
      })
      .addCase(registeruser.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(registeruser.rejected, (state, action) => {
        state.user = null;
        state.userLoading = false;
        state.userSuccess = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(registeruser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userMessage = "Welcome!";
        state.user = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;
