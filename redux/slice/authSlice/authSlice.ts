import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { User, AuthState } from "@/typescript/redux";

const cookies = new Cookies();
const savedToken = cookies.get("token") as string | undefined;

const initialState: AuthState = {
  isAuthenticated: Boolean(savedToken),
  data: null,
  token: savedToken || null,
  loading: false,
  error: null,
};

//Login
export const authLogin = createAsyncThunk<
  { token: string; data: User },
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async (payload, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(endPoints.auth.signin, payload);

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Login failed",
    );
  }
});

//LOGOUT
export const authLogout = createAsyncThunk<any, void, { rejectValue: string }>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await AxiosInstance.post(endPoints.auth.logout);
      const cookies = new Cookies();
      cookies.remove("token", { path: "/" });
      cookies.remove("refreshToken", { path: "/" });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Logout failed",
      );
    }
  },
);

//slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        // save token in cookie
        const cookies = new Cookies();
        cookies.set("token", action.payload.token, { path: "/" });
      })

      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.data = null;
        state.token = null;
        state.error = action.payload ?? "Login failed";

        const cookies = new Cookies();
        cookies.remove("token", { path: "/" });
      })

      //logout
      .addCase(authLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(authLogout.fulfilled, (state) => {
        state.data = null;
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      })

      .addCase(authLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Logout failed";
      });
  },
});

export default authSlice;
