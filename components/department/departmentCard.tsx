"use client";

import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import AddDoctorModalLayout from "../modals/addDoctorModalLayout";
import DepartmentDeleteModal from "./modals/departmentDeleteModal";

import {
  departmentDelete,
  departmentList,
} from "@/redux/slice/departmentSlice/departmentSlice";

type Department = {
  _id: string;
  id: number;
  name: string;
  description: string;
};

export default function DepartmentCard({
  department,
  totalDoctors,
}: {
  department: Department;
  totalDoctors: number;
}) {
  const dispatch: any = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await dispatch(departmentDelete(department._id)).unwrap();
      await dispatch(departmentList());
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <>
      <div
        className="relative group rounded-[2.5rem]
        bg-[#cecfd1]
        border border-slate-300
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]
        p-8 transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.2)]
        overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-slate-900">
            {department.name}
          </h2>

          <p className="text-slate-700 mt-3 text-sm leading-relaxed">
            {department.description}
          </p>

          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold">
                Total Doctors
              </p>

              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-cyan-600 bg-clip-text text-transparent">
                {totalDoctors}
              </p>
            </div>

            <span
              className="px-4 py-2 rounded-full
              bg-slate-800
              text-white text-xs font-semibold shadow-md"
            >
              Active
            </span>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              href={`/admin/departments/${department._id}/doctors`}
              className="flex-1 py-3 text-center rounded-2xl
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white font-semibold
              shadow-lg shadow-indigo-200
              hover:shadow-xl hover:scale-[1.03]
              active:scale-[0.97]
              transition-all duration-300"
            >
              View Doctors
            </Link>

            <button
              onClick={() => setOpenModal(true)}
              className="flex-1 py-3 text-center rounded-2xl
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white font-semibold
              shadow-lg shadow-indigo-200
              hover:shadow-xl hover:scale-[1.03]
              active:scale-[0.97]
              transition-all duration-300 cursor-pointer"
            >
              + Add Doctor
            </button>
          </div>

          <button
            onClick={() => setDeleteModalOpen(true)}
            className="mt-4 w-full py-3 rounded-2xl
            bg-gradient-to-r from-red-500 to-red-600
            text-white font-semibold
            shadow-lg shadow-red-200
            hover:shadow-xl hover:scale-[1.02]
            active:scale-[0.97]
            transition-all duration-300 cursor-pointer"
          >
            Delete Department
          </button>
        </div>
      </div>

      <AddDoctorModalLayout
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={`Add Doctor to ${department.name}`}
        departmentId={department._id}
        departmentName={department.name}
        description={`Fill in the details to assign a new doctor to the ${department.name} department.`}
      />

      <DepartmentDeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        name={department.name}
      />
    </>
  );
}
