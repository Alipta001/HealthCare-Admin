// export default function Header() {
//   return (
//     <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
//       <h1 className="text-2xl font-semibold text-gray-700">
//         Dashboard
//       </h1>

//       <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
//         Add Doctor
//       </button>
//     </div>
//   );
// }

// export default function Header() {
//   return (
//     <div className="flex justify-between items-center py-8">
//       <div>
//         <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Staff Directory</h1>
//         <p className="text-slate-500 font-medium mt-1">Manage hospital departments and medical personnel.</p>
//       </div>
//       <button className="flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-95 transform">
//         <span className="text-xl">+</span>
//         <span>Register New Doctor</span>
//       </button>
//     </div>
//   );
// }

// export default function Header() {
//   return (
//     <div className="flex justify-between items-center mb-8">

//       <div>
//         <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
//           Medical Staff Directory
//         </h1>
//         <p className="text-slate-500 font-medium mt-2">
//           Manage hospital departments, doctors, and appointment approvals.
//         </p>
//       </div>

//       <button className="flex items-center gap-3
//         bg-gradient-to-r from-slate-900 to-indigo-800
//         text-white px-8 py-4 rounded-2xl font-bold
//         hover:shadow-2xl hover:shadow-indigo-200
//         active:scale-95 transition-all duration-300">
//         <span className="text-xl">+</span>
//         Register Doctor
//       </button>

//     </div>
//   );
// }

"use client";

import { Bell } from "lucide-react";

export default function Header({ onOpenDoctorModal, onOpenDepartmentModal }) {
  return (
    <div className="relative bg-gradient-to-r from-[#0f172a] via-[#111c2d] to-[#0f172a] border-b border-white/5 px-4 sm:px-6 py-3 sm:py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6">
      {/* Left */}
      <div className="flex flex-col">
        <h1 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
          Dashboard
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Manage hospital departments and medical personnel.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-start sm:items-center justify-end w-full sm:w-auto gap-3 sm:gap-5">
        {/* Mobile Bell */}
        <div className="lg:hidden absolute top-3 right-4">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition">
              <Bell className="w-5 h-5" />
            </div>
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs font-semibold h-4 w-4 flex items-center justify-center rounded-full shadow-md">
              5
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 w-full sm:w-auto mt-3 sm:mt-0">
          <button
            onClick={onOpenDepartmentModal}
            className="
    flex items-center justify-center gap-3
    bg-gradient-to-r from-slate-900 to-indigo-800
    text-white px-5 py-2.5 rounded-2xl font-semibold
    shadow-lg shadow-indigo-900/30
    transition-all duration-300 ease-out
    hover:from-indigo-900 hover:to-indigo-600
    hover:-translate-y-1
    hover:shadow-2xl hover:shadow-indigo-700/40
    active:translate-y-0 active:shadow-md
    whitespace-nowrap cursor-pointer
  "
          >
            <span className="text-lg">+</span>
            <span className="hidden sm:inline">Add Department</span>
          </button>
        </div>

        {/* Desktop Bell */}
        <div className="hidden lg:flex relative">
          <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition">
            <Bell className="w-5 h-5" />
          </div>
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs font-semibold h-4 w-4 flex items-center justify-center rounded-full shadow-md">
            5
          </span>
        </div>
      </div>
    </div>
  );
}
