"use client"
import { useDispatch, useSelector } from "react-redux";
import DepartmentCard from "./departmentCard";
import { useEffect } from "react";
import { departmentList } from "@/redux/slice/departmentSlice";

export default function DepartmentGrid() {
  const dispatch = useDispatch();
  const {
    data:list,
    loading,
    error
  } = useSelector((state)=> state.department)
  useEffect(()=>{
    dispatch(departmentList())
  },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
      {list.map((dept) => (
        <DepartmentCard key={dept._id} department={dept} />
      ))}
    </div>
  );
}