// export default function DepartmentHeader() {
//   return (
//     <div className="relative">
//       <div className="absolute -top-16 -left-16 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

//       <div className="relative">
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-white">
//           Departments
//         </h1>

//         <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
//           Manage hospital departments, assign doctors, and oversee medical
//           operations efficiently.
//         </p>

//         <div className="mt-6 h-1 w-32 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full" />
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Bell } from "lucide-react";
// import DepartmentModal from "../adminDashboard/modals/departmentModal";

// export default function DepartmentHeader() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="relative bg-gradient-to-r from-[#0f172a] via-[#111c2d] to-[#0f172a] border-b border-white/5 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6 mb-6">

//         {/* Left */}
//         <div className="flex flex-col">
//           <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
//             Departments
//           </h1>
//           <p className="text-slate-400 text-sm mt-1">
//             Manage hospital departments and oversee medical teams
//           </p>
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-4">
//           {/* Add Department Button */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="
//     flex items-center justify-center gap-3
//     bg-gradient-to-r from-slate-900 to-indigo-800
//     text-white px-5 py-2.5 rounded-2xl font-semibold
//     shadow-lg shadow-indigo-900/30
//     transition-all duration-300 ease-out
//     hover:from-indigo-900 hover:to-indigo-600
//     hover:-translate-y-1
//     hover:shadow-2xl hover:shadow-indigo-700/40
//     active:translate-y-0 active:shadow-md
//     whitespace-nowrap cursor-pointer
//   "
//           >
//             <span className="text-lg">+</span>
//             <span className="hidden sm:inline">Add Department</span>
//           </button>
//           {/* Bell (Desktop Only like Doctors page) */}
//           <div className="hidden lg:block">
//             <div className="relative group">
//               <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition">
//                 <Bell className="w-5 h-5" />
//               </div>
//               <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs font-semibold h-4 w-4 flex items-center justify-center rounded-full shadow-md">
//                 5
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Modal */}
//       {isOpen && (
//         <DepartmentModal
//           open={isOpen}
//           onClose={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   );
// }

export default function DepartmentHeader({ onOpen }) {
  return (
    <div className="relative bg-gradient-to-r from-[#0f172a] via-[#111c2d] to-[#0f172a] border-b border-white/5 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6 mb-6">

      {/* Left */}
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Departments
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Manage hospital departments and oversee medical teams
        </p>
      </div>

      {/* Right */}
      <button
        onClick={onOpen}
        className="flex items-center justify-center gap-3
                   bg-gradient-to-r from-slate-900 to-indigo-800
                   text-white px-5 py-2.5 rounded-2xl font-semibold
                   shadow-lg shadow-indigo-900/30
                   transition-all duration-300 ease-out
                   hover:from-indigo-900 hover:to-indigo-600
                   hover:-translate-y-1
                   hover:shadow-2xl hover:shadow-indigo-700/40
                   active:translate-y-0 active:shadow-md
                   whitespace-nowrap cursor-pointer"
      >
        <span className="text-lg">+</span>
        <span className="hidden sm:inline">Add Department</span>
      </button>
    </div>
  );
}