import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../slice/authSlice"
import { departmentSlice } from "../slice/departmentSlice"

export const store = configureStore({
reducer:{
    auth: authSlice.reducer,
    department: departmentSlice.reducer
}
})