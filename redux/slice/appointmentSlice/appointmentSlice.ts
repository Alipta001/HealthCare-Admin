import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

/* =========================
   Types
========================= */

export interface Appointment {
  _id: string;
  userId: string;
  doctorId: string;
  date: string;
  time: string;
  status: string;
}

interface AppointmentState {
  data: Appointment[];
  listLoading: boolean;
  actionLoading: boolean;
  error: string | null;
}

/* =========================
   Initial State
========================= */

const initialState: AppointmentState = {
  data: [],
  listLoading: false,
  actionLoading: false,
  error: null,
};

/* =========================
   Thunks
========================= */

/* Fetch Appointment List */

export const appointmentList = createAsyncThunk<
  Appointment[],
  void,
  { rejectValue: string }
>("appointment/list", async (_, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(endPoints.appointment.list);

    console.log("Appointment List:", response.data);

    return response.data.data as Appointment[];
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Appointment fetch failed",
    );
  }
});

/* Confirm Appointment */
export const appointmentConfirm = createAsyncThunk<
  Appointment,
  string,
  { rejectValue: string }
>("appointment/confirm", async (id, thunkAPI) => {
  try {
    const response = await AxiosInstance.put(
      `${endPoints.appointment.confirm}/${id}`,
    );
    toast.success(response.data.message);
    console.log("Appointment Confirm:", response.data);

    return response.data.data as Appointment;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Appointment confirmation failed",
    );
  }
});

/* Reject Appointment */

export const appointmentReject = createAsyncThunk<
  Appointment,
  string,
  { rejectValue: string }
>("appointment/reject", async (id, thunkAPI) => {
  try {
    const response = await AxiosInstance.put(
      `${endPoints.appointment.cancel}/${id}`,
    );
    toast.error("Appointment Rejected");
    console.log("Appointment Reject:", response.data);

    return response.data.data as Appointment;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Appointment rejection failed",
    );
  }
});

export const acceptedAppointments = createAsyncThunk<
  Appointment[],
  void,
  { rejectValue: string }
>("appointment/accepted", async (_, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(
      endPoints.appointment.acceptedList,
    );

    console.log("Accepted Appointments:", response.data);

    return response.data.data as Appointment[];
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Failed to fetch accepted appointments",
    );
  }
});

/* =========================
   Slice
========================= */

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      /* ======================
         FETCH APPOINTMENTS
      ====================== */

      .addCase(appointmentList.pending, (state) => {
        state.listLoading = true;
        state.error = null;
      })

      .addCase(
        appointmentList.fulfilled,
        (state, action: PayloadAction<Appointment[]>) => {
          state.listLoading = false;
          state.data = action.payload;
        },
      )

      .addCase(appointmentList.rejected, (state, action) => {
        state.listLoading = false;
        state.error = action.payload ?? "Appointment fetch failed";
      })

      /* ======================
         CONFIRM APPOINTMENT
      ====================== */

      .addCase(appointmentConfirm.pending, (state) => {
        state.actionLoading = true;
        state.error = null;
      })

      .addCase(
        appointmentConfirm.fulfilled,
        (state, action: PayloadAction<Appointment>) => {
          state.actionLoading = false;

          const index = state.data.findIndex(
            (item) => item._id === action.payload._id,
          );

          if (index !== -1) {
            state.data[index] = action.payload;
          }
        },
      )

      .addCase(appointmentConfirm.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.payload ?? "Appointment confirmation failed";
      })

      /* ======================
         REJECT APPOINTMENT
      ====================== */

      .addCase(appointmentReject.pending, (state) => {
        state.actionLoading = true;
        state.error = null;
      })

      .addCase(
        appointmentReject.fulfilled,
        (state, action: PayloadAction<Appointment>) => {
          state.actionLoading = false;

          const index = state.data.findIndex(
            (item) => item._id === action.payload._id,
          );

          if (index !== -1) {
            state.data[index] = action.payload;
          }
        },
      )

      .addCase(appointmentReject.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.payload ?? "Appointment rejection failed";
      })

      /* ======================
         FETCH ACCEPTED APPOINTMENTS
      ====================== */
      .addCase(acceptedAppointments.pending, (state) => {
        state.listLoading = true;
        state.error = null;
      })

      .addCase(
        acceptedAppointments.fulfilled,
        (state, action: PayloadAction<Appointment[]>) => {
          state.listLoading = false;
          state.data = action.payload;
        },
      )

      .addCase(acceptedAppointments.rejected, (state, action) => {
        state.listLoading = false;
        state.error = action.payload ?? "Failed to fetch accepted appointments";
      });
  },
});

export default appointmentSlice.reducer;
