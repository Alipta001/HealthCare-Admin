import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../slice/authSlice"
import { departmentSlice } from "../slice/departmentSlice"
import {doctorSlice} from "../slice/doctorSlice"

export const store = configureStore({
reducer:{
    auth: authSlice.reducer,
    department: departmentSlice.reducer,
    doctor: doctorSlice.reducer
}
})