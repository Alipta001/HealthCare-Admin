// import { AxiosInstance } from "@/api/axios/axios";
// import { endPoints } from "@/api/endPoints/endPoints";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "sonner";


// interface DepartmentState {
//   data: any[];
//   loading: boolean;
//   error: string | null;
// }


// const initialState: DepartmentState = {
//   data: [],
//   loading: false,
//   error: null,
// };


// export const addDepartment = createAsyncThunk<
//   any,
//   { name: string; description: string },
//   { rejectValue: string }
// >(
//   "department/add",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await AxiosInstance.post(
//         endPoints.doctor.department,
//         payload
//       );
//       console.log("Add Department Response:"+ response)
//       toast.success("Department Created Successfuly!")
//       return response.data; 
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Department Creation failed"
//       );
//     }
//   }
// );

// //departmentList
// export const departmentList = createAsyncThunk<
//   any,
//   { name: string; description: string },
//   { rejectValue: string }
// >(
//   "department/list",
//   async (thunkAPI) => {
//     try {
//       const response = await AxiosInstance.get(
//         endPoints.doctor.departmentList
//       );
//       console.log("Department List Response:", response);
// console.log("Response data:", response.data);
// console.log("Response data.data:", response.data.data);
//       return response.data.data; 
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Department Creation failed"
//       );
//     }
//   }
// );

// //department wise doctor list
// export const departmentWiseDoctor = createAsyncThunk<
//   any,
//   { name: string; description: string },
//   { rejectValue: string }
// >(
//   "department/departmentWiseDoctor",
//   async (deptId, thunkAPI) => {
//     try {
//       const response = await AxiosInstance.get(
//        ` ${endPoints.doctor.departmentWiseDoctor}/${deptId}/doctor`
//       );
//       console.log("Department Wise Doctor List Response:", response);
// console.log("Response data:", response.data);
// console.log("Response data.data:", response.data.data);
//       return response.data.data; 
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Department Wise Doctor List failed"
//       );
//     }
//   }
// );


// export const departmentSlice = createSlice({
//   name: "department",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addDepartment.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addDepartment.fulfilled, (state, action) => {
//         state.loading = false;

//         if (action.payload?.data) {
//           state.data.push(action.payload.data);
//         }

//         state.error = null;
//       })
//       .addCase(addDepartment.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload ?? "Department Creation failed";
//       })

//       .addCase(departmentList.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(departmentList.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = Array.isArray(action.payload)
//           ? action.payload
//           : [];
//         state.error = null;
//       })
//       .addCase(departmentList.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload ?? "Department Fetch failed";
//       });
//   },
// });
// export default departmentSlice;


import { AxiosInstance } from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface DepartmentState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DepartmentState = {
  data: [],
  loading: true,
  error: null,
};

// add department
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

      console.log("Add Department Response:", response);

      toast.success("Department Created Successfully!");

      return response.data;

    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Department Creation failed"
      );
    }
  }
);


// department list
export const departmentList = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>(
  "department/list",
  async (_, thunkAPI) => {
    try {
      const response = await AxiosInstance.get(
        endPoints.doctor.departmentList
      );

      console.log("Department List Response:", response);
      console.log("Response data:", response.data);
      console.log("Response data.data:", response.data.data);

      return response.data.data;

    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Department Fetch failed"
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

      // add department
      .addCase(addDepartment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addDepartment.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload?.data) {
          state.data.push(action.payload.data);
        }

        state.error = null;
      })

      .addCase(addDepartment.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? "Department Creation failed";
      })


      // department list
      .addCase(departmentList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(departmentList.fulfilled, (state, action) => {
        state.loading = false;

        state.data = Array.isArray(action.payload)
          ? action.payload
          : [];

        state.error = null;
      })

      .addCase(departmentList.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? "Department Fetch failed";
      });

  },
});

export default departmentSlice;