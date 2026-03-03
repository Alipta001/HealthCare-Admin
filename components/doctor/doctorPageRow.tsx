// "use client";

// import ActionButtons from "./actionButtons";

// export default function DoctorPageRow({ doctor, departments }) {
//   const departmentName = 
//     departments.find((dept) => dept._id === doctor.departmentId)?.name || "Unknown";

//   // Get first available slot
//   const firstSlot = doctor?.availableSlots?.[0];
  
//   const formattedDate = firstSlot
//     ? new Date(firstSlot.date).toLocaleDateString("en-US", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       })
//     : "No Date";

//   const formattedTime = firstSlot ? firstSlot.time : "No Time";

//   return (
//     <tr className="group border-b border-slate-100 hover:bg-gradient-to-r hover:from-indigo-50/70 hover:to-white transition-all duration-300">
      
//       {/* Doctor Info - Practitioner */}
//       <td className="px-8 py-6">
//         <div className="flex items-center gap-4">
          
//           <div className="relative">
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-20 blur-md group-hover:opacity-40 transition"></div>
//             <img
//               src="/images/login/profile-icon.png"
//               alt={doctor.name}
//               className="relative w-14 h-14 rounded-2xl object-cover shadow-lg border border-white group-hover:scale-105 transition duration-300"
//             />
//           </div>

//           <div>
//             <p className="font-bold text-slate-800 text-[15px] tracking-tight">
//               {doctor.name}
//             </p>
//             <p className="text-xs text-slate-400 font-medium tracking-wide">
//               Senior Specialist
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* Department */}
//       <td className="px-6 py-6">
//         <span className="inline-flex px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-xl bg-slate-100 text-slate-600">
//           {departmentName}
//         </span>
//       </td>

//       {/* Specialization */}
//       <td className="px-6 py-6">
//         {firstSlot ? (
//           <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 group-hover:shadow-xl transition-all duration-300">
            
//             <div className="flex flex-col leading-tight">
//               <span className="text-[10px] uppercase tracking-widest opacity-70">
//                 Next Available
//               </span>
//               <span className="text-sm font-bold tracking-wide">
//                 {formattedDate}
//               </span>
//             </div>

//             <div className="h-6 w-px bg-white/30"></div>

//             <div className="text-sm font-semibold tracking-wide">
//               {formattedTime}
//             </div>
//           </div>
//         ) : (
//           <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-4 py-2 rounded-xl">
//             No Slots Available
//           </span>
//         )}
//       </td>

//       {/* Actions */}
//       <td className="px-8 py-6 z-index-1000">
//         <div onClick={(e) => e.stopPropagation()}>
//                 <ActionButtons doctorId={doctor._id} />
//               </div>
//       </td>
//     </tr>
//   );
// }




// "use client";

// import ActionButtons from "./actionButtons";

// export default function DoctorPageRow({ doctor, departments }) {
//   const departmentName = 
//     departments.find((dept) => dept._id === doctor.departmentId)?.name || "General";

//   const firstSlot = doctor?.availableSlots?.[0];
  
//   const formattedDate = firstSlot
//     ? new Date(firstSlot.date).toLocaleDateString("en-US", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       })
//     : "MAR 18, 2026"; // Fallback placeholder like design

//   const formattedTime = firstSlot ? firstSlot.time : "04:31-03:30";

//   return (
//     <tr className="group border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300">
      
//       {/* Practitioner */}
//       <td className="px-8 py-5">
//         <div className="flex items-center gap-4">
//           <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-2xl shadow-inner">
//              👤
//           </div>
//           <div>
//             <p className="font-bold text-slate-800 text-[15px] tracking-tight group-hover:text-indigo-600 transition-colors">
//               {doctor.name}
//             </p>
//             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
//               Senior Specialist
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* Department */}
//       <td className="px-6 py-5">
//         <span className="inline-flex px-4 py-2 text-[11px] font-black tracking-widest uppercase rounded-xl bg-slate-100 text-slate-500 border border-slate-200/50">
//           {departmentName}
//         </span>
//       </td>

//       {/* Specialization / Next Available Pill */}
//       <td className="px-6 py-5">
//         <div className="inline-flex items-center rounded-2xl overflow-hidden bg-[#5e2ced] text-white shadow-lg shadow-indigo-200 group-hover:scale-[1.02] transition-transform duration-300">
//           <div className="px-4 py-2.5 text-xs font-bold flex gap-3 items-center">
//             <span>{formattedDate}</span>
//             <span className="opacity-40 text-lg font-extralight">|</span>
//             <span className="opacity-90">{formattedTime}</span>
//           </div>
//         </div>
//       </td>

//       {/* Actions */}
//       <td className="px-8 py-5" onClick={(e) => e.stopPropagation()}>
//         <ActionButtons doctorId={doctor._id} />
//       </td>
//     </tr>
//   );
// }



// "use client";

// import ActionButtons from "./actionButtons";

// export default function DoctorPageRow({ doctor, departments }) {
//   const departmentName = 
//     departments.find((dept) => dept._id === doctor.departmentId)?.name || "General";

//   const firstSlot = doctor?.availableSlots?.[0];
  
//   const formattedDate = firstSlot
//     ? new Date(firstSlot.date).toLocaleDateString("en-US", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       })
//     : "MAR 18, 2026";

//   const formattedTime = firstSlot ? firstSlot.time : "04:31-03:30";

//   return (
//     <tr className="group border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300">
      
//       {/* Practitioner - Left Aligned */}
//       <td className="px-8 py-5">
//         <div className="flex items-center gap-4">
//           <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-2xl shadow-inner shrink-0">
//              👤
//           </div>
//           <div className="text-left">
//             <p className="font-bold text-slate-800 text-[18px] tracking-tight group-hover:text-indigo-600 transition-colors">
//               {doctor.name}
//             </p>
//             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
//               Senior Specialist
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* Department - Center Aligned */}
//       <td className="px-6 py-5 text-center">
//         <span className="inline-flex px-4 py-2 text-[11px] font-black tracking-widest uppercase rounded-xl bg-slate-100 text-slate-500 border border-slate-200/50">
//           {departmentName}
//         </span>
//       </td>

//       {/* Next Available Pill - Center Aligned */}
//       <td className="px-6 py-5">
//         <div className="flex justify-center">
//             <div className="inline-flex items-center rounded-2xl overflow-hidden bg-[#5e2ced] text-white shadow-lg shadow-indigo-200 group-hover:scale-[1.02] transition-transform duration-300">
//                 <div className="px-4 py-2.5 text-[14px] font-bold flex gap-3 items-center">
//                     <span>{formattedDate}</span>
//                     <span className="opacity-40 text-lg font-extralight">|</span>
//                     <span className="opacity-90">{formattedTime}</span>
//                 </div>
//             </div>
//         </div>
//       </td>

//       {/* Actions - Right Aligned */}
//       <td 
//   className="px-8 py-5 text-right overflow-visible" 
//   onClick={(e) => e.stopPropagation()}
// >
//   <ActionButtons doctor={doctor} doctorName={doctor.name} />
// </td>
//     </tr>
//   );
// }


"use client";
import ActionButtons from "./actionButtons";

export default function DoctorPageRow({ doctor, departments }) {
  const departmentName = departments.find((dept) => dept._id === doctor.departmentId)?.name || "General";
  
   const firstSlot = doctor?.availableSlots?.[0];
  
  const formattedDate = firstSlot
     ? new Date(firstSlot.date).toLocaleDateString("en-US", {
         day: "2-digit",
         month: "short",
         year: "numeric",
       })
     : "MAR 18, 2026";
  const formattedTime = firstSlot ? firstSlot.time : "04:31-03:30";

  return (
    <tr className="flex flex-col md:table-row group border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300 p-4 md:p-0">
      
      {/* Practitioner */}
      <td className="px-4 md:px-8 py-3 md:py-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-xl md:text-2xl shadow-inner shrink-0">
              👤
          </div>
          <div className="text-left">
            <p className="font-bold text-slate-800 text-[16px] md:text-[18px] tracking-tight group-hover:text-indigo-600 transition-colors">
              {doctor.name}
            </p>
            <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
              Senior Specialist
            </p>
          </div>
        </div>
      </td>

      {/* Department - Hidden label on desktop, shown on mobile */}
      <td className="px-4 md:px-6 py-2 md:py-5 md:text-center">
        <div className="flex md:justify-center items-center gap-2">
          <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">Dept:</span>
          <span className="inline-flex px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-black tracking-widest uppercase rounded-xl bg-slate-100 text-slate-500 border border-slate-200/50">
            {departmentName}
          </span>
        </div>
      </td>

      {/* Slots */}
      <td className="px-4 md:px-6 py-3 md:py-5">
        <div className="flex md:justify-center">
            <div className="inline-flex items-center rounded-xl md:rounded-2xl overflow-hidden bg-[#5e2ced] text-white shadow-lg shadow-indigo-200 w-full md:w-auto">
                <div className="px-4 py-2 md:py-2.5 text-[12px] md:text-[14px] font-bold flex justify-between md:justify-start md:gap-3 items-center w-full">
                    <span>{formattedDate || "Next: MAR 18"}</span>
                    <span className="opacity-40 text-lg font-extralight">|</span>
                    <span className="opacity-90">{formattedTime || "09:00 AM"}</span>
                </div>
            </div>
        </div>
      </td>

      {/* Actions */}
      <td className="px-4 md:px-8 py-4 md:py-5 text-right overflow-visible">
        <div className="flex justify-between md:justify-end items-center">
          <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">Manage</span>
          <ActionButtons doctor={doctor} />
        </div>
      </td>
    </tr>
  );
}