import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface DepartmentState {
  data: any[];
  loading: boolean;
  error: string | null;
}


const initialState: DepartmentState = {
  data: [],
  loading: false,
  error: null,
};


export const addDepartment = createAsyncThunk<
  any,
  { name: string; description: string },
  { rejectValue: string }
>(
  "department/add",
  async (payload, thunkAPI) => {
    try {
      const response = await AxiosInstance.post(
        endPoints.doctor.department,
        payload
      );
      console.log("Add Department Response:"+ response)
      return response.data; 
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Department Creation failed"
      );
    }
  }
);

export const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDepartment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDepartment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; 
        state.error = null;
      })
      .addCase(addDepartment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Department Creation failed";
      });
  },
});

export default departmentSlice;