// doctorProfileCard.tsx
"use client";

import { IndianRupee } from "lucide-react";
import { Doctor } from "@/types/api";

// Props type for DoctorProfileCard
export interface DoctorProfileCardProps {
  doctor: Doctor | null;
  departmentName?: string;
}

export default function DoctorProfileCard({
  doctor,
  departmentName,
}: DoctorProfileCardProps) {
  console.log(doctor);
  console.log("Department in doctor details page", departmentName);

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-8 sm:p-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Profile Image Section */}
        <div className="relative group mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[3rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />

          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-[3rem] bg-slate-100 flex items-center justify-center text-5xl font-black text-white bg-gradient-to-br from-indigo-500 to-purple-600 shadow-inner border-4 border-white">
            {doctor?.name?.slice(0, 2)?.toUpperCase()}
          </div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-slate-50">
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {doctor?.status ?? "Unknown"}
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            <div className="space-y-1 group">
              <p className="text-[14px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                Full Name
              </p>
              <p className="text-slate-800 font-bold text-lg group-hover:text-indigo-600 transition-colors">
                {doctor?.name ?? "Unknown"}
              </p>
            </div>

            <div className="space-y-1 group">
              <p className="text-[14px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                Specialization
              </p>
              <p className="text-slate-800 font-bold text-lg group-hover:text-indigo-600 transition-colors">
                {doctor?.specialization ?? "N/A"}
              </p>
            </div>

            <div className="space-y-1 group">
              <p className="text-[14px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                Department
              </p>
              <p className="text-slate-800 font-bold text-lg group-hover:text-indigo-600 transition-colors">
                {departmentName ?? "N/A"}
              </p>
            </div>

            <div className="space-y-1 group">
              <p className="text-[14px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                Fees
              </p>
              <p className="flex items-center text-slate-800 font-bold text-lg group-hover:text-indigo-600 transition-colors">
                <IndianRupee className="w-4 h-4 mr-1" /> {doctor?.fees ?? "0"}
              </p>
            </div>

            <div className="space-y-1 group">
              <p className="text-[14px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                Email Address
              </p>
              <p className="text-slate-800 font-bold text-lg group-hover:text-indigo-600 transition-colors">
                {/* You can compute email here */}
                {doctor?.name?.slice(0, 4).toLowerCase() + "@gmail.com"}
              </p>
            </div>

            <div className="space-y-1 group">
              <p className="text-[14px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                Available Slots
              </p>
              <div className="text-slate-800 font-bold text-lg group-hover:text-indigo-600 transition-colors space-y-1">
                {doctor?.availableSlots?.map((slot, index) => (
                  <div key={index}>
                    {new Date(slot.date).toLocaleDateString()} — {slot.time}
                  </div>
                )) ?? "No Slots"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
