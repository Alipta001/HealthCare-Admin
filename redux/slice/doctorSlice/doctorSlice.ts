import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

import { Doctor, DoctorState } from "@/typescript/redux";

/* Commented out interface - imported from @/typescript/redux instead
interface DoctorState {
  data: Doctor[];
  doctorDetails: Doctor | null;

  filteredDoctors: Doctor[] | null;

  loading: boolean;
  filterLoading: boolean;

  error: string | null;
  filterError: string | null;

  page: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}
*/

const initialState: DoctorState = {
  data: [],
  doctorDetails: null,

  filteredDoctors: null,

  loading: false,
  filterLoading: false,

  error: null,
  filterError: null,

  page: 1,
  totalPages: 1,
  totalItems: 0,
  limit: 10,
};

/* ADD DOCTOR */

export const addDoctor = createAsyncThunk<
  Doctor,
  Doctor,
  { rejectValue: string }
>("doctor/add", async (payload, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(endPoints.doctor.create, payload);

    toast.success(response.data.message);

    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor creation failed",
    );
  }
});

/* DOCTOR DETAILS */

export const doctorDetails = createAsyncThunk<
  Doctor,
  string,
  { rejectValue: string }
>("doctor/details", async (id, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(
      `${endPoints.doctor.details}/${id}`,
    );

    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor details failed",
    );
  }
});

/* DOCTOR LIST */

export const doctorList = createAsyncThunk<
  {
    data: Doctor[];
    page: number;
    totalPages: number;
    totalItems: number;
  },
  { page: number; limit: number; name: string },
  { rejectValue: string }
>("doctor/list", async ({ page, limit, name }, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(
      `${endPoints.doctor.list}?page=${page}&limit=${limit}&search=${name || ""}`,
    );
    console.log("Doctor List response:", response.data);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor list failed",
    );
  }
});

/* UPDATE DOCTOR */

export const updateDoctor = createAsyncThunk<
  Doctor,
  Doctor,
  { rejectValue: string }
>("doctor/update", async (payload, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(endPoints.doctor.update, payload);

    toast.success(response.data.message);

    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor update failed",
    );
  }
});

/* DELETE DOCTOR */

export const deleteDoctor = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("doctor/delete", async (doctorId, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(endPoints.doctor.delete, {
      id: doctorId,
    });

    toast.success(response.data.message);

    return doctorId;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor delete failed",
    );
  }
});

/* DEPARTMENT WISE DOCTOR */

export const departmentWiseDoctor = createAsyncThunk<
  Doctor[],
  string,
  { rejectValue: string }
>("doctor/departmentWiseDoctor", async (deptId, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(
      `${endPoints.doctor.departmentWiseDoctor}/${deptId}/doctors`,
    );

    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Department Wise Doctor List failed",
    );
  }
});

/* SLICE */

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,

  reducers: {
    setFilteredDoctors(state, action: PayloadAction<Doctor[]>) {
      state.filteredDoctors = action.payload;
      state.filterError = null;
    },

    clearFilter(state) {
      state.filteredDoctors = null;
      state.filterError = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /* DOCTOR LIST */

      .addCase(doctorList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(doctorList.fulfilled, (state, action) => {
        state.loading = false;

        state.data = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.totalItems;
      })

      .addCase(doctorList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Doctor list failed";
      })

      /* ADD DOCTOR */

      .addCase(addDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.data.unshift(action.payload);
      })

      .addCase(addDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Doctor creation failed";
      })

      /* UPDATE DOCTOR */

      .addCase(updateDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateDoctor.fulfilled, (state, action) => {
        state.loading = false;

        const updatedDoctor = action.payload;

        state.data = state.data.map((doctor: Doctor) =>
          doctor._id === updatedDoctor._id ? updatedDoctor : doctor,
        );
      })

      .addCase(updateDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Doctor update failed";
      })

      /* DELETE DOCTOR */

      .addCase(deleteDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.loading = false;

        state.data = state.data.filter(
          (doctor: Doctor) => doctor._id !== action.payload,
        );
      })

      .addCase(deleteDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Doctor delete failed";
      })

      /* DOCTOR DETAILS */

      .addCase(doctorDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(doctorDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.doctorDetails = action.payload;
      })

      .addCase(doctorDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Doctor details failed";
      })

      /* DEPARTMENT FILTER */

      .addCase(departmentWiseDoctor.pending, (state) => {
        state.filterLoading = true;
        state.filterError = null;
      })

      .addCase(departmentWiseDoctor.fulfilled, (state, action) => {
        state.filterLoading = false;
        state.filteredDoctors = action.payload;
      })

      .addCase(departmentWiseDoctor.rejected, (state, action) => {
        state.filterLoading = false;
        state.filterError =
          action.payload ?? "Department Wise Doctor List failed";
      });
  },
});

export const { setFilteredDoctors, clearFilter } = doctorSlice.actions;

export default doctorSlice.reducer;
