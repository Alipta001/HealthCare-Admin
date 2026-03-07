"use client";
import Link from "next/link";
import { Bell, Plus, ChevronLeft } from "lucide-react";

export default function DoctorDetailsHeader() {
  return (
    <div className="relative bg-gradient-to-r from-[#0f172a] via-[#111c2d] to-[#0f172a] border-b border-white/5 px-4 sm:px-8 py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
           <Link href="/admin/doctors" className="text-indigo-400 hover:text-indigo-300 transition">
            <ChevronLeft className="w-5 h-5" />
           </Link>
           <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
             Doctor Profile
           </h1>
        </div>
        <p className="text-slate-400 text-sm">
          Comprehensive view of practitioner performance and schedule
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition">
            <Bell className="w-5 h-5" />
          </div>
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-md">
            3
          </span>
        </div>

        {/* Action Button */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-indigo-500/20 transition-all active:scale-95">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Download Analytics</span>
        </button>
      </div>
    </div>
  );
}