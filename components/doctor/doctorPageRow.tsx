// "use client";
// import ActionButtons from "./actionButtons";

// export default function DoctorPageRow({ doctor, departments }) {
//   const departmentName =
//     departments.find((dept) => dept._id === doctor.departmentId)?.name ||
//     "General";

//   // Sort slots by date (nearest first)
//   const slots =
//     doctor?.availableSlots
//       ?.slice()
//       ?.sort((a, b) => new Date(a.date) - new Date(b.date)) || [];

//   return (
//     <tr className="flex flex-col md:table-row group border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300 p-4 md:p-0">
      
//       {/* Practitioner */}
//       <td className="px-4 md:px-8 py-3 md:py-5">
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-xl md:text-2xl shadow-inner shrink-0">
//             👤
//           </div>
//           <div className="text-left">
//             <p className="font-bold text-slate-800 text-[16px] md:text-[18px] tracking-tight group-hover:text-indigo-600 transition-colors">
//               {doctor.name}
//             </p>
//             <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
//               Senior Specialist
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* Department */}
//       <td className="px-4 md:px-6 py-2 md:py-5 md:text-center">
//         <div className="flex md:justify-center items-center gap-2">
//           <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">
//             Dept:
//           </span>
//           <span className="inline-flex px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-black tracking-widest uppercase rounded-xl bg-slate-100 text-slate-500 border border-slate-200/50">
//             {departmentName}
//           </span>
//         </div>
//       </td>

//       {/* Slots */}
//       <td className="px-4 md:px-6 py-3 md:py-5">
//         <div className="flex md:justify-center">
//           <div className="flex flex-col gap-2 w-full md:w-auto">
//             {slots.length > 0 ? (
//               slots.map((slot, index) => {
//                 const formattedDate = new Date(slot.date).toLocaleDateString(
//                   "en-US",
//                   {
//                     day: "2-digit",
//                     month: "short",
//                     year: "numeric",
//                   }
//                 );

//                 return (
//                   <div
//                     key={index}
//                     className="inline-flex items-center rounded-xl md:rounded-2xl overflow-hidden bg-[#5e2ced] text-white shadow-lg shadow-indigo-200"
//                   >
//                     <div className="px-4 py-2 text-[12px] md:text-[14px] font-bold flex gap-3 items-center">
//                       <span>{formattedDate}</span>
//                       <span className="opacity-40 text-lg font-extralight">
//                         |
//                       </span>
//                       <span className="opacity-90">{slot.time}</span>
//                     </div>
//                   </div>
//                 );
//               })
//             ) : (
//               <div className="text-slate-400 text-sm font-medium">
//                 No Available Slots
//               </div>
//             )}
//           </div>
//         </div>
//       </td>

//       {/* Actions */}
//       <td className="px-4 md:px-8 py-4 md:py-5 text-right overflow-visible">
//         <div className="flex justify-between md:justify-end items-center">
//           <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">
//             Manage
//           </span>
//           <ActionButtons doctor={doctor} />
//         </div>
//       </td>
//     </tr>
//   );
// }


// "use client";
// import { useState } from "react";
// import ActionButtons from "./actionButtons";

// export default function DoctorPageRow({ doctor, departments }) {
//   const [more, showMore] = useState(false);

//   const departmentName =
//     departments.find((dept) => dept._id === doctor.departmentId)?.name ||
//     "General";

//   // Sort slots by upcoming date
//   const slots =
//     doctor?.availableSlots
//       ?.filter((slot) => new Date(slot.date) >= new Date())
//       ?.sort((a, b) => new Date(a.date) - new Date(b.date)) || [];

//   const visibleSlots = more ? slots : slots.slice(0, 2);
//   const remainingCount = slots.length - 2;

//   return (
//     <tr className="flex flex-col md:table-row group border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300 p-4 md:p-0">
      
//       {/* Practitioner */}
//       <td className="px-4 md:px-8 py-3 md:py-5">
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-xl md:text-2xl shadow-inner shrink-0">
//             👤
//           </div>
//           <div className="text-left">
//             <p className="font-bold text-slate-800 text-[16px] md:text-[18px] tracking-tight group-hover:text-indigo-600 transition-colors">
//               {doctor.name}
//             </p>
//             <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
//               Senior Specialist
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* Department */}
//       <td className="px-4 md:px-6 py-2 md:py-5 md:text-center">
//         <div className="flex md:justify-center items-center gap-2">
//           <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">
//             Dept:
//           </span>
//           <span className="inline-flex px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-black tracking-widest uppercase rounded-xl bg-slate-100 text-slate-500 border border-slate-200/50">
//             {departmentName}
//           </span>
//         </div>
//       </td>

//       {/* Slots */}
//       <td className="px-4 md:px-6 py-3 md:py-5">
//         <div className="flex md:justify-center">
//           <div className="flex flex-col gap-2 w-full md:w-auto">
//             {visibleSlots.length > 0 ? (
//               <>
//                 {visibleSlots.map((slot, index) => {
//                   const formattedDate = new Date(slot.date).toLocaleDateString(
//                     "en-US",
//                     {
//                       day: "2-digit",
//                       month: "short",
//                       year: "numeric",
//                     }
//                   );

//                   return (
//                     <div
//                       key={index}
//                       className="inline-flex items-center rounded-xl md:rounded-2xl overflow-hidden bg-[#5e2ced] text-white shadow-lg shadow-indigo-200"
//                     >
//                       <div className="px-4 py-2 text-[12px] md:text-[14px] font-bold flex gap-3 items-center">
//                         <span>{formattedDate}</span>
//                         <span className="opacity-40 text-lg font-extralight">
//                           |
//                         </span>
//                         <span className="opacity-90">{slot.time}</span>
//                       </div>
//                     </div>
//                   );
//                 })}

//                 {/* +X more toggle */}
//                 {slots.length > 2 && !more && (
//                   <button
//                     onClick={() => showMore(true)}
//                     className="text-indigo-600 text-xs font-semibold text-left hover:underline"
//                   >
//                     +{remainingCount} more
//                   </button>
//                 )}

//                 {more && slots.length > 2 && (
//                   <button
//                     onClick={() => showMore(false)}
//                     className="text-slate-500 text-xs font-semibold text-left hover:underline"
//                   >
//                     Show less
//                   </button>
//                 )}
//               </>
//             ) : (
//               <div className="text-slate-400 text-sm font-medium">
//                 No Upcoming Slots
//               </div>
//             )}
//           </div>
//         </div>
//       </td>

//       {/* Actions */}
//       <td className="px-4 md:px-8 py-4 md:py-5 text-right overflow-visible">
//         <div className="flex justify-between md:justify-end items-center">
//           <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">
//             Manage
//           </span>
//           <ActionButtons doctor={doctor} />
//         </div>
//       </td>
//     </tr>
//   );
// }










"use client";
import { useState } from "react";
import ActionButtons from "./actionButtons";
import { useRouter } from "next/navigation";

export default function DoctorPageRow({ doctor, departments, onEdit, onDelete }) {
  const [more, showMore] = useState(false);


  const departmentName =
    departments.find((dept) => dept._id === doctor.departmentId)?.name ||
    "General";

  // Sort slots by upcoming date
  const slots =
    doctor?.availableSlots
      ?.filter((slot) => new Date(slot.date) >= new Date())
      ?.sort((a, b) => new Date(a.date) - new Date(b.date)) || [];

  const visibleSlots = more ? slots : slots.slice(0, 2);
  const remainingCount = slots.length - 2;

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

      {/* Department */}
      <td className="px-4 md:px-6 py-2 md:py-5 md:text-center">
        <div className="flex md:justify-center items-center gap-2">
          <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">
            Dept:
          </span>
          <span className="inline-flex px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-black tracking-widest uppercase rounded-xl bg-slate-100 text-slate-500 border border-slate-200/50">
            {departmentName}
          </span>
        </div>
      </td>

      {/* Slots */}
      <td className="px-4 md:px-6 py-3 md:py-5">
        <div className="flex md:justify-center">
          <div className="flex flex-col gap-2 w-full md:w-auto">
            {visibleSlots.length > 0 ? (
              <>
                {visibleSlots.map((slot, index) => {
                  const formattedDate = new Date(slot.date).toLocaleDateString(
                    "en-US",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  );

                  return (
                    <div
                      key={index}
                      className="inline-flex items-center rounded-xl md:rounded-2xl overflow-hidden bg-[#5e2ced] text-white shadow-lg shadow-indigo-200"
                    >
                      <div className="px-4 py-2 text-[12px] md:text-[14px] font-bold flex gap-3 items-center">
                        <span>{formattedDate}</span>
                        <span className="opacity-40 text-lg font-extralight">
                          |
                        </span>
                        <span className="opacity-90">{slot.time}</span>
                      </div>
                    </div>
                  );
                })}

                {/* +X more toggle */}
                {slots.length > 2 && !more && (
                  <button
                    onClick={() => showMore(true)}
                    className="text-indigo-600 text-xs font-semibold text-left hover:underline"
                  >
                    +{remainingCount} more
                  </button>
                )}

                {more && slots.length > 2 && (
                  <button
                    onClick={() => showMore(false)}
                    className="text-slate-500 text-xs font-semibold text-left hover:underline"
                  >
                    Show less
                  </button>
                )}
              </>
            ) : (
              <div className="text-slate-400 text-sm font-medium">
                No Upcoming Slots
              </div>
            )}
          </div>
        </div>
      </td>

      {/* Actions */}
      <td className="px-4 md:px-8 py-4 md:py-5 text-right overflow-visible">
        <div className="flex justify-between md:justify-end items-center">
          <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">
            Manage
          </span>
          <ActionButtons
            doctor={doctor}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </td>
    </tr>
  );
}