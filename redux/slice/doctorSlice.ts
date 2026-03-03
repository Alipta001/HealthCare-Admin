import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface AvailableSlot {
  date: string;
  start: string;
  end: string;
}

interface Doctor {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  departmentId: string;
  specialization?: string;
  fees?: string;
  availableSlots: AvailableSlot[];
}

interface DoctorState {
  data: Doctor[];
  loading: boolean;
  error: string | null;
}

const initialState: DoctorState = {
  data: [],
  loading: false,
  error: null,
};

export const addDoctor = createAsyncThunk<
  Doctor,
  Doctor,
  { rejectValue: string }
>("doctor/add", async (payload, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(endPoints.doctor.create, payload);
    console.log("Add Doctor Response:", response.data);
    toast.success("Doctor Created Successfuly");
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor Creation failed",
    );
  }
});

export const doctorList = createAsyncThunk<
  Doctor[],
  void,
  { rejectValue: string }
>("doctor/list", async (_, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(endPoints.doctor.list, {
      page: 1,
      limit: 10,
    });

    console.log("Doctor List Response:", response.data);

    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor List failed",
    );
  }
});

export const deleteDoctor = createAsyncThunk<
  string, 
  string, 
  { rejectValue: string }
>("doctor/delete", async (doctorId, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(
      endPoints.doctor.delete, 
      {id: doctorId}, 
    );
console.log(response.data)
toast.success(response.data.message)
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor delete failed",
    );
  }
});

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //Add Doctor
      .addCase(addDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
        state.error = null;
      })

      .addCase(addDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Doctor List
      .addCase(doctorList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(doctorList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })

      .addCase(doctorList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Delete Doctor
      .addCase(deleteDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteDoctor.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.data = state.data
          // filter(
          //   (doctor) => doctor._id !== action.payload,
          // );
        },
      )
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Doctor delete failed";
      });
  },
});

export default doctorSlice.reducer;
