import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { DepartmentState } from "@/types/redux";

const initialState: DepartmentState = {
  data: [],
  filteredDepartments: [],
  loading: true,
  error: null,
};

// ADD DEPARTMENT
export const addDepartment = createAsyncThunk<
  any,
  { name: string; description: string },
  { rejectValue: string }
>("department/add", async (payload, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(
      endPoints.doctor.department,
      payload,
    );

    toast.success("Department Created Successfully!");

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Department Creation failed",
    );
  }
});

// DEPARTMENT LIST
export const departmentList = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>("department/list", async (_, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(endPoints.doctor.departmentList);
    console.log("Department List Response:", response.data);
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Department Fetch failed",
    );
  }
});

export const departmentDelete = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("department/delete", async (id, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(
      endPoints.doctor.departmentDelete,
      { id },
    );
    console.log("Department Delete Response:", response.data);
    toast.success("Department Deleted Successfully!");

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Department Deletion failed",
    );
  }
});

export const departmentSlice = createSlice({
  name: "department",
  initialState,

  reducers: {
    setFilteredDepartments: (state, action) => {
      state.filteredDepartments = action.payload;
    },

    clearDepartmentFilter: (state) => {
      state.filteredDepartments = state.data;
    },
  },

  extraReducers: (builder) => {
    builder

      // ADD DEPARTMENT
      .addCase(addDepartment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addDepartment.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload?.data) {
          state.data.push(action.payload.data);
          state.filteredDepartments.push(action.payload.data);
        }

        state.error = null;
      })

      .addCase(addDepartment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Department Creation failed";
      })

      // DEPARTMENT LIST
      .addCase(departmentList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(departmentList.fulfilled, (state, action) => {
        state.loading = false;

        state.data = Array.isArray(action.payload) ? action.payload : [];

        state.filteredDepartments = state.data;

        state.error = null;
      })

      .addCase(departmentList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Department Fetch failed";
      })

      // DELETE DEPARTMENT
      .addCase(departmentDelete.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(departmentDelete.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        /* const deletedId = action.payload?.data?._id;

        state.data = state.data.filter(
          (dept: any) => dept._id !== deletedId
        );

        state.filteredDepartments = state.filteredDepartments.filter(
          (dept: any) => dept._id !== deletedId
        ); */

        state.error = null;
      })

      .addCase(departmentDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Department Deletion failed";
      });
  },
});

export const { setFilteredDepartments, clearDepartmentFilter } =
  departmentSlice.actions;

export default departmentSlice;
