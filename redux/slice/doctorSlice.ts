
/**----------------------Claude---------------------- */

// import { AxiosInstance } from "@/api/axios/axios";
// import { endPoints } from "@/api/endPoints/endPoints";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "sonner";

// interface AvailableSlot {
//   date: string;
//   start: string;
//   end: string;
// }

// export interface Doctor {
//   _id?: string;
//   name: string;
//   email: string;
//   phone: string;
//   departmentId: string;
//   specialization?: string;
//   fees?: string;
//   availableSlots: AvailableSlot[];
// }

// interface DoctorState {
//   data: Doctor[];                      
//   filteredDoctors: Doctor[] | null;
//   filteredDoctorsPage: Doctor[] | null;     
//   loading: boolean;                   
//   error: string | null;                

//   filterLoading: boolean;   
//   filterLoadingPage: boolean;          
//   filterError: string | null; 
//   filterErrorPage: string | null;      

//   page: number;
//   totalPages: number;
//   totalItems: number;
//   limit: number;
// }

// const initialState: DoctorState = {
//   data: [],
//   filteredDoctors: null,
//   filteredDoctorsPage: null,
//   loading: true,
//   error: null,

//   filterLoading: false,
//   filterLoadingPage: false,
//   filterError: null,
//   filterErrorPage: null,

//   page: 1,
//   totalPages: 1,
//   totalItems: 0,
//   limit: 10,
// };

// //add doctor
// export const addDoctor = createAsyncThunk<
//   Doctor,
//   Doctor,
//   { rejectValue: string }
// >("doctor/add", async (payload, thunkAPI) => {
//   try {
//     const response = await AxiosInstance.post(
//       endPoints.doctor.create,
//       payload
//     );

//     toast.success("Doctor created successfully");
//     return response.data;

//   } catch (error: any) {
//     return thunkAPI.rejectWithValue(
//       error.response?.data?.message || "Doctor creation failed"
//     );
//   }
// });



// //doctor list
// export const doctorList = createAsyncThunk<
//   {
//     data: Doctor[];
//     page: number;
//     totalPages: number;
//     totalItems: number;
//   },
//   { page: number; limit: number },
//   { rejectValue: string }
// >("doctor/list", async ({ page, limit }, thunkAPI) => {
//   try {

//     const response = await AxiosInstance.post(
//       endPoints.doctor.list,
//       { page, limit }
//     );

//     console.log(response.data);

//     return response.data;

//   } catch (error: any) {

//     return thunkAPI.rejectWithValue(
//       error.response?.data?.message || "Doctor list failed"
//     );
//   }
// });



// //update doctor
// export const updateDoctor = createAsyncThunk<
//   Doctor,
//   Doctor,
//   { rejectValue: string }
// >("doctor/update", async (payload, thunkAPI) => {
//   try {

//     const response = await AxiosInstance.post(
//       endPoints.doctor.update,
//       payload
//     );

//     toast.success("Doctor updated successfully");
//     return response.data;

//   } catch (error: any) {

//     return thunkAPI.rejectWithValue(
//       error.response?.data?.message || "Doctor update failed"
//     );
//   }
// });



// //delete doctor
// export const deleteDoctor = createAsyncThunk<
//   string,
//   string,
//   { rejectValue: string }
// >("doctor/delete", async (doctorId, thunkAPI) => {
//   try {

//     const response = await AxiosInstance.post(
//       endPoints.doctor.delete,
//       { id: doctorId }
//     );

//     toast.success(response.data.message);

//     return doctorId;

//   } catch (error: any) {

//     return thunkAPI.rejectWithValue(
//       error.response?.data?.message || "Doctor delete failed"
//     );
//   }
// });



// // department wise doctor filter
// export const departmentWiseDoctor = createAsyncThunk<
//   Doctor[],
//   string,
//   { rejectValue: string }
// >(
//   "doctor/departmentWiseDoctor",
//   async (deptId, thunkAPI) => {
//     try {
//       const response = await AxiosInstance.get(
//         `${endPoints.doctor.departmentWiseDoctor}/${deptId}/doctors`
//       );

//       return response.data.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//         "Department Wise Doctor List failed"
//       );
//     }
//   }
// );


// //department wise doctor in doctor page
// export const departmentWiseDoctorPage = createAsyncThunk<
//   Doctor[],
//   string,
//   { rejectValue: string }
// >(
//   "doctor/departmentWiseDoctorPage",
//   async (deptId, thunkAPI) => {
//     try {
//       const response = await AxiosInstance.get(
//         `${endPoints.doctor.departmentWiseDoctor}/${deptId}/doctors`
//       );

//       return response.data.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//         "Department Wise Doctor List failed"
//       );
//     }
//   }
// );



// export const doctorSlice = createSlice({
//   name: "doctor",
//   initialState,
//   reducers: {
//     setFilteredDoctors(state, action) {
//       state.filteredDoctors = action.payload;
//       state.filterError = null;
//     },
//     clearFilter(state) {
//       state.filteredDoctors = null;
//       state.filterError = null;
//     },
//   },

//   extraReducers: (builder) => {

//     builder

//       .addCase(doctorList.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(doctorList.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload.data;
//         state.page = action.payload.page || 1;
//         state.totalPages = action.payload.totalPages || 1;
//         state.totalItems = action.payload.totalItems || 0;
//         state.error = null;
//       })

//       .addCase(doctorList.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload ?? "Doctor list failed";
//       })


//       .addCase(addDoctor.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(addDoctor.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data.unshift(action.payload);
//       })

//       .addCase(addDoctor.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload ?? "Doctor creation failed";
//       })


//       .addCase(updateDoctor.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(updateDoctor.fulfilled, (state, action) => {
//         state.loading = false;

//         const updatedDoctor = action.payload;

//         state.data = state.data.map((doctor) =>
//           doctor._id === updatedDoctor._id
//             ? updatedDoctor
//             : doctor
//         );
//       })

//       .addCase(updateDoctor.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload ?? "Doctor update failed";
//       })


//       .addCase(deleteDoctor.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(deleteDoctor.fulfilled, (state, action) => {
//         state.loading = false;

//         state.data = state.data.filter(
//           (doctor) => doctor._id !== action.payload
//         );
//       })

//       .addCase(deleteDoctor.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload ?? "Doctor delete failed";
//       })


//       .addCase(departmentWiseDoctor.pending, (state) => {
//         state.filterLoading = true;
//         state.filterError = null;
//       })

//       .addCase(departmentWiseDoctor.fulfilled, (state, action) => {
//         state.filterLoading = false;
//         state.filteredDoctors = action.payload;
//         state.filterError = null;
//       })

//       .addCase(departmentWiseDoctor.rejected, (state, action) => {
//         state.filterLoading = false;
//         state.filterError = action.payload ?? "Department Wise Doctor List failed";
//       })


//       //department wise doctor in doctor page
//       .addCase(departmentWiseDoctorPage.pending, (state) => {
//         state.filterLoadingPage = true;
//         state.filterErrorPage = null;
//       })

//       .addCase(departmentWiseDoctorPage.fulfilled, (state, action) => {
//         state.filterLoadingPage = false;
//         state.filteredDoctorsPage = action.payload;
//         state.filterErrorPage = null;
//       })

//       .addCase(departmentWiseDoctorPage.rejected, (state, action) => {
//         state.filterLoadingPage = false;
//         state.filterErrorPage = action.payload ?? "Department Wise Doctor List failed";
//       });

//   },
// });

// export const { setFilteredDoctors, clearFilter } = doctorSlice.actions;

// export default doctorSlice;



import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface AvailableSlot {
  date: string;
  start: string;
  end: string;
}

export interface Doctor {
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

  // global filters
  filteredDoctors: Doctor[] | null;

  // doctor page filters
  filteredDoctorsPage: Doctor[] | null;

  loading: boolean;
  error: string | null;

  filterLoading: boolean;
  filterLoadingPage: boolean;

  filterError: string | null;
  filterErrorPage: string | null;

  page: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}

const initialState: DoctorState = {
  data: [],

  filteredDoctors: null,
  filteredDoctorsPage: null,

  loading: false,
  error: null,

  filterLoading: false,
  filterLoadingPage: false,

  filterError: null,
  filterErrorPage: null,

  page: 1,
  totalPages: 1,
  totalItems: 0,
  limit: 10,
};




/* ================= ADD DOCTOR ================= */

export const addDoctor = createAsyncThunk<
  Doctor,
  Doctor,
  { rejectValue: string }
>("doctor/add", async (payload, thunkAPI) => {
  try {
    const response = await AxiosInstance.post(
      endPoints.doctor.create,
      payload
    );

    toast.success("Doctor created successfully");

    return response.data;

  } catch (error: any) {

    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor creation failed"
    );
  }
});




/* ================= DOCTOR LIST ================= */

export const doctorList = createAsyncThunk<
  {
    data: Doctor[];
    page: number;
    totalPages: number;
    totalItems: number;
  },
  { page: number; limit: number },
  { rejectValue: string }
>("doctor/list", async ({ page, limit }, thunkAPI) => {

  try {

    const response = await AxiosInstance.post(
      endPoints.doctor.list,
      { page, limit }
    );

    return response.data;

  } catch (error: any) {

    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor list failed"
    );
  }

});




/* ================= UPDATE DOCTOR ================= */

export const updateDoctor = createAsyncThunk<
  Doctor,
  Doctor,
  { rejectValue: string }
>("doctor/update", async (payload, thunkAPI) => {

  try {

    const response = await AxiosInstance.post(
      endPoints.doctor.update,
      payload
    );

    toast.success("Doctor updated successfully");

    return response.data;

  } catch (error: any) {

    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor update failed"
    );
  }

});




/* ================= DELETE DOCTOR ================= */

export const deleteDoctor = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("doctor/delete", async (doctorId, thunkAPI) => {

  try {

    const response = await AxiosInstance.post(
      endPoints.doctor.delete,
      { id: doctorId }
    );

    toast.success(response.data.message);

    return doctorId;

  } catch (error: any) {

    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Doctor delete failed"
    );
  }

});




/* ================= FILTER (GLOBAL) ================= */

export const departmentWiseDoctor = createAsyncThunk<
  Doctor[],
  string,
  { rejectValue: string }
>(
  "doctor/departmentWiseDoctor",
  async (deptId, thunkAPI) => {

    try {

      const response = await AxiosInstance.get(
        `${endPoints.doctor.departmentWiseDoctor}/${deptId}/doctors`
      );

      return response.data.data;

    } catch (error: any) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Department Wise Doctor List failed"
      );
    }

  }
);




/* ================= FILTER (DOCTOR PAGE ONLY) ================= */

export const departmentWiseDoctorPage = createAsyncThunk<
  Doctor[],
  string,
  { rejectValue: string }
>(
  "doctor/departmentWiseDoctorPage",
  async (deptId, thunkAPI) => {

    try {

      const response = await AxiosInstance.get(
        `${endPoints.doctor.departmentWiseDoctor}/${deptId}/doctors`
      );

      return response.data.data;

    } catch (error: any) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Department Wise Doctor List failed"
      );
    }

  }
);




/* ================= SLICE ================= */

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,

  reducers: {

    // GLOBAL FILTER
    setFilteredDoctors(state, action) {
      state.filteredDoctors = action.payload;
      state.filterError = null;
    },

    clearFilter(state) {
      state.filteredDoctors = null;
      state.filterError = null;
    },


    // DOCTOR PAGE FILTER
    clearPageFilter(state) {
      state.filteredDoctorsPage = null;
      state.filterErrorPage = null;
    }

  },

  extraReducers: (builder) => {

    builder


      /* ===== DOCTOR LIST ===== */

      .addCase(doctorList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(doctorList.fulfilled, (state, action) => {

        state.loading = false;

        state.data = action.payload.data;
        state.page = action.payload.page || 1;
        state.totalPages = action.payload.totalPages || 1;
        state.totalItems = action.payload.totalItems || 0;

      })

      .addCase(doctorList.rejected, (state, action) => {

        state.loading = false;
        state.error = action.payload ?? "Doctor list failed";

      })



      /* ===== ADD DOCTOR ===== */

      .addCase(addDoctor.fulfilled, (state, action) => {

        state.data.unshift(action.payload);

      })



      /* ===== UPDATE DOCTOR ===== */

      .addCase(updateDoctor.fulfilled, (state, action) => {

        const updatedDoctor = action.payload;

        state.data = state.data.map((doctor) =>
          doctor._id === updatedDoctor._id
            ? updatedDoctor
            : doctor
        );

      })



      /* ===== DELETE DOCTOR ===== */

      .addCase(deleteDoctor.fulfilled, (state, action) => {

        state.data = state.data.filter(
          (doctor) => doctor._id !== action.payload
        );

      })



      /* ===== GLOBAL FILTER ===== */

      .addCase(departmentWiseDoctor.pending, (state) => {
        state.filterLoading = true;
      })

      .addCase(departmentWiseDoctor.fulfilled, (state, action) => {

        state.filterLoading = false;
        state.filteredDoctors = action.payload;

      })

      .addCase(departmentWiseDoctor.rejected, (state, action) => {

        state.filterLoading = false;
        state.filterError =
          action.payload ?? "Department Wise Doctor List failed";

      })



      /* ===== PAGE FILTER ===== */

      .addCase(departmentWiseDoctorPage.pending, (state) => {
        state.filterLoadingPage = true;
      })

      .addCase(departmentWiseDoctorPage.fulfilled, (state, action) => {

        state.filterLoadingPage = false;
        state.filteredDoctorsPage = action.payload;

      })

      .addCase(departmentWiseDoctorPage.rejected, (state, action) => {

        state.filterLoadingPage = false;
        state.filterErrorPage =
          action.payload ?? "Department Wise Doctor List failed";

      });

  },

});



export const {
  setFilteredDoctors,
  clearFilter,
  clearPageFilter
} = doctorSlice.actions;

export default doctorSlice;