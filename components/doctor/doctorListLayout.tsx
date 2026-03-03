// "use client"
// import { useEffect } from 'react'
// import DoctorPageHeader from './doctorPageHeader'
// import DoctorPageTable from './doctorPageTable'
// import { useDispatch, useSelector } from 'react-redux'
// import { doctorList } from '@/redux/slice/doctorSlice'
// import { departmentList } from '@/redux/slice/departmentSlice'

// export default function DoctorListLayout() {
//     const dispatch = useDispatch();
//     const {data: doctors, error:doctorError, loading:doctorLoading} = useSelector((state)=> state.doctor)
//     const {data:departments, error, loading} = useSelector((state)=> state.department)
//     useEffect(()=>{
//         dispatch(doctorList());
//         dispatch(departmentList())
//     },[])
//     return (
//     <>
//     <div className="max-w-7xl mx-auto">
//               <DoctorPageHeader />
//               <DoctorPageTable doctors={doctors} departments={departments} />
//             </div>
//     </>
//   )
// }


"use client";

import DoctorPageHeader from "./doctorPageHeader";
import DoctorPageTable from "./doctorPageTable";
import DoctorFilters from "./doctorFilter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { doctorList } from "@/redux/slice/doctorSlice";
import { departmentList } from "@/redux/slice/departmentSlice";

export default function DoctorListLayout() {
  const dispatch = useDispatch();
  const { data: doctors, loading, error } = useSelector((state) => state.doctor);
  const { data: departments } = useSelector((state) => state.department);

  useEffect(() => {
    dispatch(doctorList());
    dispatch(departmentList());
  }, [dispatch]);

  return (
    <div className="w-full">
      <DoctorPageHeader />
      <DoctorFilters departments={departments || []} />
      <DoctorPageTable
        doctors={doctors || []}
        departments={departments || []}
        loading={loading}
        error={error}
      />
    </div>
  );
}