// import AppointmentActions from "./appointmentActions";

// export default function DoctorRow({ doctor }: any) {
//   return (
//     <tr className="border-b hover:bg-gray-50 transition">
//       <td className="p-4 font-medium">{doctor.name}</td>
//       <td className="p-4">{doctor.department}</td>
//       <td className="p-4">
//         <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
//           {doctor.appointmentStatus}
//         </span>
//       </td>
//       <td className="p-4 text-center">
//         <AppointmentActions />
//       </td>
//     </tr>
//   );
// }



// import AppointmentActions from "./appointmentActions";

// export default function DoctorRow({ doctor }) {
//   return (
//     <tr className="group hover:bg-indigo-50/40 transition-all duration-300">
//       <td className="p-6">
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 bg-slate-200 rounded-2xl overflow-hidden shadow-inner border-2 border-white">
//              <img src={`https://i.pravatar.cc/150?u=${doctor.id}`} alt={doctor.name} />
//           </div>
//           <span className="font-bold text-slate-700 tracking-tight">{doctor.name}</span>
//         </div>
//       </td>
//       <td className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">{doctor.department}</td>
//       <td className="p-6 text-center">
//         <span className="px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] bg-amber-50 text-amber-600 border border-amber-100">
//           {doctor.appointmentStatus}
//         </span>
//       </td>
//       <td className="p-6">
//         <AppointmentActions />
//       </td>
//     </tr>
//   );
// }




// "use client"
// import { departmentList } from "@/redux/slice/departmentSlice";
// import AppointmentActions from "./appointmentActions";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// export default function DoctorRow({ doctor }) {
  
// const dispatch = useDispatch();
//   const{
//     data:department,
//     loading, 
//     error
//   } = useSelector((state) => state.department)
// useEffect(()=>{
//   dispatch(departmentList())
// },[])

//   /* const departmentName = department.find((dept)=>{
//  return dept.id === doctor. departmentId? dept.name : null
// }) */

// const departmentName = (department || []).find(
//   (dept) => dept._id === doctor.departmentId
// )?.name || "Unknown";
//   const statusStyle =
//     doctor.appointmentStatus === "Accepted"
//       ? "bg-emerald-50 text-emerald-600 border-emerald-200"
//       : doctor.appointmentStatus === "Cancelled"
//       ? "bg-rose-50 text-rose-600 border-rose-200"
//       : "bg-amber-50 text-amber-600 border-amber-200";

//   return (
//     <tr className="group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white transition-all duration-300">
      
//       {/* Doctor Info */}
//       <td className="p-6">
//         <div className="flex items-center gap-4">
          
//           <div className="relative">
//             <img
//               src="/images/login/profile-icon.png"
//               alt={doctor.name}
//               className="w-14 h-14 rounded-2xl object-cover shadow-md border-2 border-white group-hover:scale-105 transition"
//             />
//           </div>

//           <div>
//             <p className="font-bold text-slate-800 tracking-tight">
//               {doctor.name}
//             </p>
//             <p className="text-sm text-slate-400 font-medium">
//               Senior Specialist
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* Department */}
//       <td className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">
//         {departmentName}
//       </td>

//       {/* Status */}
//       <td className="p-6 text-center">
//         <span
//           className={`px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] border ${statusStyle}`}
//         >
//           {doctor.availableSlots[0].date} And {doctor.availableSlots[0].time}
//         </span>
//       </td>

//       {/* Actions */}
//       <td className="p-6">
//         <AppointmentActions />
//       </td>
//     </tr>
//   );
// }



/**------------------Claude------------------ */

// "use client";

// import AppointmentActions from "./appointmentActions";

// interface DoctorRowProps {
//   doctor: any;
//   department?: any[];
// }

// export default function DoctorRow({ doctor, department = [] }: DoctorRowProps) {
//   // LOGIC FIX: Check if departmentId is an object or a string
//   const docDeptId = typeof doctor.departmentId === 'object' 
//     ? doctor.departmentId._id 
//     : doctor.departmentId;

//   const departmentMatch = department.find((dept) => dept._id === docDeptId);
//   const departmentName = departmentMatch ? departmentMatch.name : "Unknown Dept";

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
      
//       {/* Practitioner Info */}
//       <td className="p-6">
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

//       {/* Department Name - Fixed Alignment */}
//       <td className="p-6">
//         <span className="inline-flex px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-xl bg-slate-100 text-slate-600">
//           {departmentName}
//         </span>
//       </td>

//       {/* Available Slot - Centered */}
//       <td className="p-6">
//         <div className="flex justify-center">
//           {firstSlot ? (
//             <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 group-hover:shadow-xl transition-all duration-300">
//               <div className="flex flex-col leading-tight text-left">
//                 <span className="text-[10px] uppercase tracking-widest opacity-70">
//                   Next Available
//                 </span>
//                 <span className="text-sm font-bold tracking-wide">
//                   {formattedDate}
//                 </span>
//               </div>
//               <div className="h-6 w-px bg-white/30"></div>
//               <div className="text-sm font-semibold tracking-wide">
//                 {formattedTime}
//               </div>
//             </div>
//           ) : (
//             <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-4 py-2 rounded-xl">
//               No Slots Available
//             </span>
//           )}
//         </div>
//       </td>

//       {/* Actions - Centered */}
//       <td className="p-6 text-center">
//         <div className="flex justify-center">
//           <AppointmentActions />
//         </div>
//       </td>
//     </tr>
//   );
// }




"use client";

import AppointmentActions from "./appointmentActions";

export default function DoctorRow({ doctor, department = [] }: any) {

  const docDeptId =
    typeof doctor.departmentId === "object"
      ? doctor.departmentId._id
      : doctor.departmentId;

  const departmentMatch = department.find((dept: any) => dept._id === docDeptId);
  const departmentName = departmentMatch ? departmentMatch.name : "Unknown Dept";

  const firstSlot = doctor?.availableSlots?.[0];

  const formattedDate = firstSlot
    ? new Date(firstSlot.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "No Date";

  const formattedTime = firstSlot ? firstSlot.time : "No Time";

  return (
    <tr className="group border-b border-slate-100 hover:bg-gradient-to-r hover:from-indigo-50/70 hover:to-white transition-all duration-300">

      <td className="p-6">
        <div className="flex items-center gap-4">

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-20 blur-md group-hover:opacity-40 transition"></div>

            <img
              src="/images/login/profile-icon.png"
              alt={doctor.name}
              className="relative w-14 h-14 rounded-2xl object-cover shadow-lg border border-white group-hover:scale-105 transition duration-300"
            />
          </div>

          <div>
            <p className="font-bold text-slate-800 text-[15px] tracking-tight">
              {doctor.name}
            </p>

            <p className="text-xs text-slate-400 font-medium tracking-wide">
              Senior Specialist
            </p>
          </div>

        </div>
      </td>

      <td className="p-6">
        <span className="inline-flex px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-xl bg-slate-100 text-slate-600">
          {departmentName}
        </span>
      </td>

      <td className="p-6">
        <div className="flex justify-center">
          {firstSlot ? (
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 group-hover:shadow-xl transition-all duration-300">

              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] uppercase tracking-widest opacity-70">
                  Next Available
                </span>

                <span className="text-sm font-bold tracking-wide">
                  {formattedDate}
                </span>
              </div>

              <div className="h-6 w-px bg-white/30"></div>

              <div className="text-sm font-semibold tracking-wide">
                {formattedTime}
              </div>

            </div>
          ) : (
            <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-4 py-2 rounded-xl">
              No Slots Available
            </span>
          )}
        </div>
      </td>

      <td className="p-6 text-center">
        <div className="flex justify-center">
          <AppointmentActions />
        </div>
      </td>

    </tr>
  );
}