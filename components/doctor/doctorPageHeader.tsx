// import Link from "next/link";

// export default function DoctorPageHeader() {
//   return (
//     <div className="relative mb-12">
      
//       <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>

//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative">
//         <div>
//           <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
//             Doctors Management
//           </h1>
//           <p className="text-blue-200 mt-3 text-sm">
//             Monitor, manage and organize healthcare professionals efficiently.
//           </p>
//         </div>

//         <Link
//           href="/admin/doctors/add"
//           className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
//         >
//           + Add Doctor
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { Bell } from "lucide-react";

export default function DoctorPageHeader() {
  return (
    <div className="relative bg-gradient-to-r from-[#0f172a] via-[#111c2d] to-[#0f172a] border-b border-white/5 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6 mb-6">

      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Doctors
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Manage and monitor registered healthcare professionals
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:block">
          <div className="relative group">
            <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition">
              <Bell className="w-5 h-5" />
            </div>
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs font-semibold h-4 w-4 flex items-center justify-center rounded-full shadow-md">
              5
            </span>
          </div>
        </div>

        <Link
          href="/admin/doctors/add"
          className="flex items-center gap-3 bg-gradient-to-r from-slate-900 to-indigo-800 text-white px-5 py-2.5 rounded-2xl font-semibold hover:shadow-xl transition-all"
        >
          <span className="text-lg">+</span>
          <span className="hidden sm:inline">Add Doctor</span>
        </Link>
      </div>

    </div>
  );
}