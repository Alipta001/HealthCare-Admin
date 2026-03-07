// "use client";

// export default function AppointmentRow({ appointment }) {

//   return (
//     <tr className="border-t hover:bg-slate-50 transition">

//       <td className="px-6 py-4 font-medium text-slate-700">
//         {appointment.patient}
//       </td>

//       <td className="px-6 py-4 text-slate-600">
//         {appointment.date}
//       </td>

//       <td className="px-6 py-4 text-slate-600">
//         {appointment.time}
//       </td>

//       <td className="px-6 py-4">
//         <span
//           className={`px-3 py-1 text-xs rounded-full font-medium ${
//             appointment.status === "Accepted"
//               ? "bg-green-100 text-green-700"
//               : "bg-yellow-100 text-yellow-700"
//           }`}
//         >
//           {appointment.status}
//         </span>
//       </td>

//       <td className="px-6 py-4 flex justify-end gap-2">

//         <button className="px-3 py-1 text-xs rounded-lg bg-green-500 text-white hover:bg-green-600 transition">
//           Accept
//         </button>

//         <button className="px-3 py-1 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
//           Cancel
//         </button>

//       </td>

//     </tr>
//   );
// }



// export default function AppointmentRow({ appointment }) {
//   const isAccepted = appointment.status === "Accepted";

//   return (
//     <tr className="bg-white border-b-4 lg:border-b-[12px] border-[#0b0e19] hover:bg-slate-50 transition-colors">
//       <td className="px-6 lg:px-10 py-6">
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 rounded-xl bg-[#0b0e19] text-white flex items-center justify-center text-lg font-black shrink-0">
//             {appointment.patient.charAt(0)}
//           </div>
//           <span className="font-bold text-slate-900 text-base lg:text-xl tracking-tight">
//             {appointment.patient}
//           </span>
//         </div>
//       </td>

//       <td className="px-6 lg:px-10 py-6 text-slate-500 font-semibold text-sm lg:text-base whitespace-nowrap">
//         {appointment.date}
//       </td>

//       <td className="px-6 lg:px-10 py-6 text-slate-500 font-semibold text-sm lg:text-base whitespace-nowrap">
//         {appointment.time}
//       </td>

//       <td className="px-6 lg:px-10 py-6">
//         <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg border-2 ${
//           isAccepted ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
//         }`}>
//           {appointment.status}
//         </span>
//       </td>

//       <td className="px-6 lg:px-10 py-6">
//         <div className="flex justify-end gap-3">
//           {!isAccepted && (
//             <button className="px-6 py-2.5 text-[11px] font-black uppercase rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all">
//               Accept
//             </button>
//           )}
//           <button className="px-6 py-2.5 text-[11px] font-black uppercase rounded-xl border border-slate-200 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-all">
//             Cancel
//           </button>
//         </div>
//       </td>
//     </tr>
//   );
// }






export default function AppointmentRow({ appointment }) {
  const isAccepted = appointment.status === "Accepted";

  return (
    <tr className="border-b">

      <td className="px-4 py-4 font-medium text-slate-800">
        {appointment.patient}
      </td>

      <td className="px-4 py-4 text-slate-600">
        {appointment.date}
      </td>

      <td className="px-4 py-4 text-slate-600">
        {appointment.time}
      </td>

      <td className="px-4 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isAccepted
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {appointment.status}
        </span>
      </td>

      <td className="px-4 py-4 text-right space-x-2">

        {!isAccepted && (
          <button className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-md">
            Accept
          </button>
        )}

        <button className="border border-red-500 text-red-500 text-xs px-3 py-1.5 rounded-md">
          Cancel
        </button>

      </td>
    </tr>
  );
}