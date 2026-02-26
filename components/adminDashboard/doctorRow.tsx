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


import AppointmentActions from "./appointmentActions";

export default function DoctorRow({ doctor }) {
  const statusStyle =
    doctor.appointmentStatus === "Accepted"
      ? "bg-emerald-50 text-emerald-600 border-emerald-200"
      : doctor.appointmentStatus === "Cancelled"
      ? "bg-rose-50 text-rose-600 border-rose-200"
      : "bg-amber-50 text-amber-600 border-amber-200";

  return (
    <tr className="group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white transition-all duration-300">
      
      {/* Doctor Info */}
      <td className="p-6">
        <div className="flex items-center gap-4">
          
          <div className="relative">
            <img
              src={`https://i.pravatar.cc/150?u=${doctor.id}`}
              alt={doctor.name}
              className="w-14 h-14 rounded-2xl object-cover shadow-md border-2 border-white group-hover:scale-105 transition"
            />
          </div>

          <div>
            <p className="font-bold text-slate-800 tracking-tight">
              {doctor.name}
            </p>
            <p className="text-sm text-slate-400 font-medium">
              Senior Specialist
            </p>
          </div>
        </div>
      </td>

      {/* Department */}
      <td className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">
        {doctor.department}
      </td>

      {/* Status */}
      <td className="p-6 text-center">
        <span
          className={`px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] border ${statusStyle}`}
        >
          {doctor.appointmentStatus}
        </span>
      </td>

      {/* Actions */}
      <td className="p-6">
        <AppointmentActions />
      </td>
    </tr>
  );
}