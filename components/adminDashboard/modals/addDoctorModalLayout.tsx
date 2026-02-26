// "use client";

import DoctorModalForm from "./doctorModalForm";

// export default function AddDoctorModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

//       <div className="bg-white dark:bg-slate-900 
//         w-full max-w-lg 
//         rounded-3xl p-8 
//         shadow-2xl relative">

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-slate-400"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-6">
//           Register New Doctor
//         </h2>

//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Doctor Name"
//             className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800"
//           />
//           <input
//             type="text"
//             placeholder="Department"
//             className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800"
//           />
//           <button className="w-full py-3 bg-indigo-600 text-white rounded-xl">
//             Save Doctor
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useState } from 'react';
// import { X, User, Stethoscope, Building2, Banknote, CalendarPlus, Trash2 } from 'lucide-react';

// export default function AddDoctorModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
//         onClick={onClose} 
//       />

//       {/* Modal Container */}
//       <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        
//         {/* Header */}
//         <div className="p-8 pb-4 flex justify-between items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
//               Register Doctor
//             </h2>
//             <p className="text-slate-500 dark:text-slate-400 mt-1">Add a new healthcare professional to the system.</p>
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Scrollable Content */}
//         <div className="p-8 pt-2 overflow-y-auto space-y-6">
          
//           {/* Section: Basic Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label className="text-sm font-semibold ml-1 text-slate-700 dark:text-slate-300">Full Name</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-3 text-slate-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Dr. Jane Smith"
//                   className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-semibold ml-1 text-slate-700 dark:text-slate-300">Specialization</label>
//               <div className="relative">
//                 <Stethoscope className="absolute left-3 top-3 text-slate-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Cardiologist"
//                   className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label className="text-sm font-semibold ml-1 text-slate-700 dark:text-slate-300">Department</label>
//               <div className="relative">
//                 <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
//                 <select className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none appearance-none transition-all">
//                   <option value="">Select Department</option>
//                   <option value="dept1">Neurology</option>
//                   <option value="dept2">Pediatrics</option>
//                 </select>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-semibold ml-1 text-slate-700 dark:text-slate-300">Consultation Fees</label>
//               <div className="relative">
//                 <Banknote className="absolute left-3 top-3 text-slate-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="$150"
//                   className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Section: Available Slots */}
//           <div className="space-y-3">
//             <div className="flex justify-between items-center">
//               <label className="text-sm font-semibold ml-1 text-slate-700 dark:text-slate-300 flex items-center gap-2">
//                 <CalendarPlus size={18} className="text-indigo-500" />
//                 Available Slots
//               </label>
//               <button className="text-xs font-bold text-indigo-600 hover:text-indigo-500 uppercase tracking-wider">
//                 + Add Slot
//               </button>
//             </div>
            
//             <div className="p-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-wrap gap-2">
//               {/* Example Slot Chip */}
//               <div className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg text-sm font-medium">
//                 Mon, 09:00 AM
//                 <Trash2 size={14} className="cursor-pointer hover:text-red-500" />
//               </div>
//               <p className="text-xs text-slate-400 italic py-1.5">No more slots added yet...</p>
//             </div>
//           </div>
//         </div>

//         {/* Footer Actions */}
//         <div className="p-8 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex gap-3">
//           <button 
//             onClick={onClose}
//             className="flex-1 py-4 px-6 rounded-2xl text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
//           >
//             Cancel
//           </button>
//           <button className="flex-[2] py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all transform active:scale-[0.98]">
//             Complete Registration
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// type AddDoctorModalLayoutProps = {
//   open: boolean;
//   onClose: (value: boolean) => boolean;
//   title: string;
//   description?: string;
// };


// export default function AddDoctorModalLayout({
//   open,
//   onClose,
//   title,
//   description,
// }: AddDoctorModalLayoutProps) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-6">
//       <div
//         className={`relative w-full max-w-2xl 
//         bg-white rounded-3xl 
//         shadow-[0_40px_80px_rgba(0,0,0,0.35)]
//         p-10 overflow-y-auto max-h-[90vh]`}
//       >
//         {/* Close Button */}
//         <button
//           type="button"
//           onClick={onClose}
//           className="absolute top-6 right-6 w-9 h-9 rounded-full 
//           bg-slate-100 hover:bg-red-500 hover:text-white 
//           flex items-center justify-center text-slate-500 transition"
//         >
//           ✕
//         </button>

//         {/* Header */}
//         {(title || description) && (
//           <div className="mb-10">
//             {title && (
//               <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
//             )}
//             {description && (
//               <p className="text-slate-500 mt-2 text-sm">{description}</p>
//             )}
//             <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
//           </div>
//         )}

//         {/* Directly render DoctorForm */}
//         <DoctorModalForm onCancel={onClose} />
//       </div>
//     </div>
//   );
// }


type AddDoctorModalLayoutProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
};

export default function AddDoctorModalLayout({
  open,
  onClose,
  title,
  description,
}: AddDoctorModalLayoutProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.35)] p-6 sm:p-10 overflow-y-auto max-h-[90vh]">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-red-500 hover:text-white flex items-center justify-center text-slate-500 transition"
        >
          ✕
        </button>

        {(title || description) && (
          <div className="mb-8">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-slate-500 mt-2 text-sm">{description}</p>
            )}
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
          </div>
        )}

        <DoctorModalForm onCancel={onClose} />
      </div>
    </div>
  );
}