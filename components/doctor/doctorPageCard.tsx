"use client";

import { departmentList } from "@/redux/slice/departmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ActionButtons from "./actionButtons";

export default function DoctorPageCard({ doctor }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: department } = useSelector((state) => state.department);

  useEffect(() => {
    dispatch(departmentList());
  }, [dispatch]);

  const departmentName =
    (department || []).find(
      (dept) => dept._id === doctor.departmentId
    )?.name || "Unknown";

  const firstSlot = doctor?.availableSlots?.[0];

  const formattedDate = firstSlot
    ? new Date(firstSlot.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;

  const formattedTime = firstSlot ? firstSlot.time : null;

  return (
    <div
      onClick={() => router.push(`/admin/doctors/${doctor._id}`)}
      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      {/* Doctor Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/login/profile-icon.png"
          alt={doctor.name}
          className="w-14 h-14 rounded-xl object-cover border border-slate-200"
        />
        <div>
          <p className="text-base font-semibold text-slate-800">
            {doctor.name}
          </p>
          <p className="text-xs text-slate-400 uppercase tracking-wide">
            Senior Specialist
          </p>
        </div>
      </div>

      {/* Department */}
      <div className="mb-4">
        <span className="inline-flex px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
          {departmentName}
        </span>
      </div>

      {/* Next Available */}
      <div className="mb-5">
        {firstSlot ? (
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-semibold">
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">
                Next Available
              </span>
              <span>{formattedDate}</span>
            </div>
            <div className="h-4 w-px bg-slate-300"></div>
            <span>{formattedTime}</span>
          </div>
        ) : (
          <span className="inline-flex px-3 py-1.5 rounded-lg bg-slate-100 text-slate-400 text-xs font-medium">
            No Slots Available
          </span>
        )}
      </div>

      {/* Actions */}
      <div onClick={(e) => e.stopPropagation()}>
        <ActionButtons doctorId={doctor._id} />
      </div>
    </div>
  );
}