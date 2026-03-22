"use client";

import React from "react";

export default function DoctorRow({ doctor, departments = [] }: any) {
  const docDeptId =
    typeof doctor.departmentId === "object"
      ? doctor.departmentId._id
      : doctor.departmentId;

  const departmentMatch = departments.find(
    (dept: any) => dept._id === docDeptId,
  );

  const departmentName = departmentMatch
    ? departmentMatch.name
    : doctor.department?.name || "Unknown Dept";

  const startTime = doctor?.schedule?.startTime;
  const endTime = doctor?.schedule?.endTime;

  const formattedSchedule =
    startTime && endTime ? `${startTime} - ${endTime}` : "No Schedule";

  return (
    /* BACKGROUND COLOR UPDATED TO #cfd0d2 */
    <tr className="group border-b border-slate-100 bg-[#cfd0d2] hover:bg-[#cfd0d2]/90 transition-all duration-300 w-full">
      {/* 1. DOCTOR NAME */}
      <td className="px-8 py-5 align-middle">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-800 flex items-center justify-center text-xl shadow-lg border border-slate-700">
            <span className="text-white/50 text-lg">👤</span>
          </div>
          <div className="flex flex-col min-w-0">
            <p className="font-bold text-slate-800 text-[16px] tracking-tight leading-tight">
              {doctor.name}
            </p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
              Medical Practitioner
            </p>
          </div>
        </div>
      </td>

      {/* 2. DEPARTMENT */}
      <td className="px-6 py-5 align-middle text-center">
        <span className="inline-flex px-4 py-1.5 text-[11px] font-black uppercase tracking-wider rounded-xl bg-slate-100 text-slate-500 border border-slate-200/50 shadow-sm">
          {departmentName}
        </span>
      </td>

      {/* 3. TIME AVAILABLE */}
      <td className="px-8 py-5 align-middle">
        <div className="flex justify-end items-center">
          <div className="inline-flex items-center rounded-xl bg-[#5e2ced] text-white shadow-lg shadow-indigo-100 transition-all hover:scale-[1.02]">
            <div className="px-4 py-2 text-[12px] font-bold flex gap-3 items-center whitespace-nowrap">
              <span className="uppercase tracking-widest text-[10px] opacity-90">
                Available
              </span>
              <span className="opacity-30 font-light">|</span>
              <span className="tracking-wide">{formattedSchedule}</span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
