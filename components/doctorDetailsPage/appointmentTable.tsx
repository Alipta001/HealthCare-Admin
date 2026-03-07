// "use client";

// import AppointmentRow from "./appointmentRow";

// export default function AppointmentTable() {

//   const appointments = [
//     {
//       id: 1,
//       patient: "Alice Smith",
//       date: "12 Mar 2026",
//       time: "10:30 AM",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       patient: "Michael Brown",
//       date: "12 Mar 2026",
//       time: "11:00 AM",
//       status: "Accepted",
//     },
//     {
//       id: 3,
//       patient: "Sophia Johnson",
//       date: "12 Mar 2026",
//       time: "12:15 PM",
//       status: "Pending",
//     },
//   ];

//   return (
//     <div className="overflow-x-auto">

//       <table className="w-full text-sm">

//         <thead className="bg-slate-50 text-slate-600">
//           <tr>
//             <th className="text-left px-6 py-3">Patient</th>
//             <th className="text-left px-6 py-3">Date</th>
//             <th className="text-left px-6 py-3">Time</th>
//             <th className="text-left px-6 py-3">Status</th>
//             <th className="text-right px-6 py-3">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {appointments.map((appointment) => (
//             <AppointmentRow
//               key={appointment.id}
//               appointment={appointment}
//             />
//           ))}
//         </tbody>

//       </table>

//     </div>
//   );
// }



// "use client";
// import AppointmentRow from "./appointmentRow";

// export default function AppointmentTable() {
//   const appointments = [
//     { id: 1, patient: "Alice Smith", date: "12 Mar 2026", time: "10:30 AM", status: "Pending" },
//     { id: 2, patient: "Michael Brown", date: "12 Mar 2026", time: "11:00 AM", status: "Accepted" },
//     { id: 3, patient: "Sophia Johnson", date: "12 Mar 2026", time: "12:15 PM", status: "Pending" },
//   ];

//   return (
//     <div className="w-full bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
//       <div className="p-8 border-b border-white/50 bg-white/20 flex items-center justify-between">
//         <h2 className="text-2xl font-black text-slate-900 tracking-tight">Upcoming Appointments</h2>
//         <div className="px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-black">
//           {appointments.length} Total
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[900px]">
//           <thead>
//             <tr className="bg-slate-100/50">
//               <th className="px-8 py-5 text-left text-xs font-black uppercase tracking-[0.25em] text-slate-400">Patient Details</th>
//               <th className="px-8 py-5 text-left text-xs font-black uppercase tracking-[0.25em] text-slate-400">Date</th>
//               <th className="px-8 py-5 text-left text-xs font-black uppercase tracking-[0.25em] text-slate-400">Time</th>
//               <th className="px-8 py-5 text-left text-xs font-black uppercase tracking-[0.25em] text-slate-400">Status</th>
//               <th className="px-8 py-5 text-right text-xs font-black uppercase tracking-[0.25em] text-slate-400">Management</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white/40">
//             {appointments.map((appointment) => (
//               <AppointmentRow key={appointment.id} appointment={appointment} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





import AppointmentRow from "./appointmentRow";

export default function AppointmentTable() {
  const appointments = [
    { id: 1, patient: "Alice Smith", date: "12 Mar 2026", time: "10:30 AM", status: "Pending" },
    { id: 2, patient: "Michael Brown", date: "12 Mar 2026", time: "11:00 AM", status: "Accepted" },
    { id: 3, patient: "Sophia Johnson", date: "12 Mar 2026", time: "12:15 PM", status: "Pending" },
  ];

  return (
    <div className="w-full overflow-x-auto">

      <table className="min-w-[700px] w-full text-sm">

        <thead className="bg-slate-100 text-slate-600 text-xs uppercase">
          <tr>
            <th className="px-4 py-3 text-left">Patient</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Time</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {appointments.map((appointment) => (
            <AppointmentRow key={appointment.id} appointment={appointment} />
          ))}
        </tbody>

      </table>
    </div>
  );
}