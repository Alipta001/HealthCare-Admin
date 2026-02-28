"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AddDoctorModalLayout from "../adminDashboard/modals/addDoctorModalLayout";

type Department = {
  id: number;
  name: string;
  description: string;
  totalDoctors: number;
};

export default function DepartmentCard({ department }: { department: Department }) {
  const [openModal, setOpenModal] = useState(false);
  useEffect(()=>{
    console.log(department._id)
  },[])

  return (
    <>
      <div
        className="relative group rounded-[2.5rem]
        bg-white/60 dark:bg-slate-900/70
        backdrop-blur-xl
        border border-white/40 dark:border-slate-800
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]
        p-8 transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_35px_80px_-15px_rgba(79,70,229,0.35)]
        overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            {department.name}
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">
            {department.description}
          </p>

          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Total Doctors
              </p>
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {department.totalDoctors}
              </p>
            </div>

            <span className="px-4 py-2 rounded-full 
              bg-gradient-to-r from-indigo-600 to-cyan-500
              text-white text-xs font-semibold shadow-lg">
              Active
            </span>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              href={`/admin/departments/${department.id}/doctors`}
              className="flex-1 py-3 text-center rounded-2xl
                bg-white/70 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-white
                font-medium
                hover:bg-slate-100 dark:hover:bg-slate-700
                transition"
            >
              View Doctors
            </Link>

            <button
              onClick={() => setOpenModal(true)}
              className="flex-1 py-3 text-center rounded-2xl
                bg-gradient-to-r from-indigo-600 to-cyan-500
                text-white font-semibold
                shadow-lg shadow-indigo-900/30
                hover:scale-[1.03] hover:shadow-xl
                active:scale-[0.97]
                transition-all duration-200 cursor-pointer"
            >
              + Add Doctor
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AddDoctorModalLayout
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={`Add Doctor to ${department.name}`}
        departmentId = {`${department._id}`}
        departmentName = {`${department.name}`}
        description={`Fill in the details to assign a new doctor to the ${department.name} department.`}
      />
    </>
  );
}