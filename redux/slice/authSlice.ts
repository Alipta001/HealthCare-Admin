// import { AxiosInstance } from "@/api/axios/axios";
// import endPoints from "@/api/endPoints/endPoints";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     isAuthenticated: false,
//     user: null,
//     token: null,
// };

// export const authLogin = createAsyncThunk(
//   "auth/signin",
//   async (
//     payload: { email: string; password: string },
//     thunkAPI
//   ) => {
//     try {
//       const response = await AxiosInstance.post(
//         endPoints.auth.signin,
//         payload
//       );
//       return response.data;

//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Login failed"
//       );
//     }
//   }
// );


// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(authLogin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.isAuthenticated = false;
//       })
//       .addCase(authLogin.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.error = null;
//       })
//       .addCase(authLogin.rejected, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = false;
//         state.user = null;
//         state.token = null;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;

import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  data: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const cookie = new Cookies();
const token = cookie.get("token") as string | undefined;

const initialState: AuthState = {
  isAuthenticated: Boolean(token),
  data: null,
  token: token || null,
  loading: false,
  error: null,
};

export const authLogin = createAsyncThunk<
  any,
  { email: string; password: string },
  { rejectValue: string }
>(
  "auth/signin",
  async (payload, thunkAPI) => {
    try {
      const response = await AxiosInstance.post(
        endPoints.auth.signin,
        payload
      );
      console.log(response)
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      const cookie = new Cookies();
      cookie.remove("token", { path: "/" });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
      })

      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.token = action.payload.token || state.token;
        // persist token in cookie for subsequent requests
        const cookie = new Cookies();
        if (state.token) {
          cookie.set("token", state.token, { path: "/" });
        }
      })

      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.data = null;
        state.token = null;
        state.error = action.payload ?? "Login failed";
        const cookie = new Cookies();
        cookie.remove("token", { path: "/" });
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;