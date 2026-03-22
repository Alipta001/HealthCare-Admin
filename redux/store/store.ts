import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../slice/authSlice/authSlice"
import { departmentSlice } from "../slice/departmentSlice/departmentSlice"
import {doctorSlice} from "../slice/doctorSlice/doctorSlice"
import { appointmentSlice } from "../slice/appointmentSlice/appointmentSlice"
import branchSlice from "../slice/branchSlice/branchSlice"

export const store = configureStore({
reducer:{
    auth: authSlice.reducer,
    department: departmentSlice.reducer,
    doctor: doctorSlice.reducer,
    appointment: appointmentSlice.reducer,
    branch: branchSlice.reducer
}
})