import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

/* ------------------ TYPES ------------------ */

export interface Branch {
  _id?: string;
  name: string;
  phone: string;
  address: string;
  lat: number;
  lng: number;
}

interface BranchState {
  data: Branch[];
  loading: boolean;
  error: string | null;
}

/* ------------------ INITIAL STATE ------------------ */

const initialState: BranchState = {
  data: [],
  loading: false,
  error: null,
};

/* ------------------ CREATE BRANCH ------------------ */

export const createBranch = createAsyncThunk<
  any, // API Response type
  Branch, // Payload type
  { rejectValue: string }
>("branch/create", async (payload, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(endPoints.branch.create, payload);

    console.log("Branch Create Api response:", response.data);

    toast.success("Branch created successfully");

    return response.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || "Branch creation failed";

    toast.error(message);

    return thunkAPI.rejectWithValue(message);
  }
});

/* ------------------ SLICE ------------------ */

const branchSlice = createSlice({
  name: "branch",
  initialState,

  reducers: {
    resetBranchState: (state) => {
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /* pending */
      .addCase(createBranch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      /* success */
      .addCase(createBranch.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;

        if (action.payload?.data) {
          state.data.push(action.payload.data);
        }
      })

      /* error */
      .addCase(createBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetBranchState } = branchSlice.actions;

export default branchSlice;
