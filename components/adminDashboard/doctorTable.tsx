// import DoctorRow from "./doctorRow";

// export default function DoctorTable() {
//   const doctors = [
//     {
//       id: 1,
//       name: "Dr. Smith",
//       department: "Cardiology",
//       appointmentStatus: "Pending",
//     },
//     {
//       id: 2,
//       name: "Dr. John",
//       department: "Neurology",
//       appointmentStatus: "Pending",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow overflow-hidden">
//       <table className="w-full text-left">
//         <thead className="bg-gray-50 border-b">
//           <tr>
//             <th className="p-4">Doctor</th>
//             <th className="p-4">Department</th>
//             <th className="p-4">Appointment</th>
//             <th className="p-4 text-center">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {doctors.map((doctor) => (
//             <DoctorRow key={doctor.id} doctor={doctor} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import DoctorRow from "./doctorRow";
// export default function DoctorTable() {
//   const doctors = [
//     { id: 1, name: "Dr. Smith", department: "Cardiology", appointmentStatus: "Pending" },
//     { id: 2, name: "Dr. John", department: "Neurology", appointmentStatus: "Pending" },
//   ];

//   return (
//     <div className="bg-white/90 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-white/50 overflow-hidden">
//       <table className="w-full text-left">
//         <thead className="bg-slate-50/80 border-b border-slate-100">
//           <tr>
//             <th className="p-6 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black">Practitioner</th>
//             <th className="p-6 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black">Dept.</th>
//             <th className="p-6 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black text-center">Status</th>
//             <th className="p-6 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-slate-100">
//           {doctors.map((doc) => <DoctorRow key={doc.id} doctor={doc} />)}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import DoctorRow from "./doctorRow";

export default function DoctorTable() {
  const doctors = [
    { id: 1, name: "Dr. Smith", department: "Cardiology", appointmentStatus: "Pending" },
    { id: 2, name: "Dr. John", department: "Neurology", appointmentStatus: "Accepted" },
    { id: 3, name: "Dr. Alice", department: "Orthopedic", appointmentStatus: "Cancelled" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left min-w-[600px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
        <thead className="bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
          <tr>
            <th className="p-6 text-xs uppercase tracking-[0.25em] text-slate-400 font-black">Practitioner</th>
            <th className="p-6 text-xs uppercase tracking-[0.25em] text-slate-400 font-black">Department</th>
            <th className="p-6 text-xs text-center uppercase tracking-[0.25em] text-slate-400 font-black">Status</th>
            <th className="p-6 text-xs text-center uppercase tracking-[0.25em] text-slate-400 font-black">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {doctors.map((doc) => (
            <DoctorRow key={doc.id} doctor={doc} />
          ))}
        </tbody>
      </table>
    </div>
  );
}