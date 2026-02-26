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

      {/* Right container: bell + buttons */}
      <div className="flex items-start sm:items-center justify-end w-full sm:w-auto gap-3 sm:gap-5">

        {/* Bell - absolute only on mobile */}
        <div className="lg:hidden absolute top-3 right-4">
          <div className="relative group">
            <div className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition">
              <Bell className="w-5 h-5" />
            </div>
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs font-semibold h-4 w-4 flex items-center justify-center rounded-full shadow-md">
              5
            </span>
          </div>
        </div>

        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 w-full sm:w-auto mt-3 sm:mt-0">
          <button
            onClick={onOpenDepartmentModal}
            className="w-full sm:w-auto px-3 sm:px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-all whitespace-nowrap"
          >
            + Department
          </button>

          <button
            onClick={onOpenDoctorModal}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm sm:text-base font-semibold shadow-lg shadow-indigo-900/30 hover:scale-[1.03] hover:shadow-xl active:scale-[0.97] transition-all duration-200 whitespace-nowrap"
          >
            + Doctor
          </button>
        </div>

        <div className="hidden lg:flex relative">
          <div className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition">
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