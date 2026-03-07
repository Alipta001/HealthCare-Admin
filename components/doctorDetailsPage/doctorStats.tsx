// "use client";

// export default function DoctorStats() {

//   const stats = [
//     { title: "Total Appointments", value: 124 },
//     { title: "Accepted", value: 96 },
//     { title: "Cancelled", value: 18 },
//     { title: "Pending", value: 10 },
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//       {stats.map((stat, index) => (
//         <div
//           key={index}
//           className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
//         >
//           <p className="text-sm text-slate-500">{stat.title}</p>
//           <p className="text-2xl font-bold text-slate-800 mt-2">
//             {stat.value}
//           </p>
//         </div>
//       ))}

//     </div>
//   );
// }




// export default function DoctorStats() {
//   const stats = [
//     { title: "Total Bookings", value: 124, color: "text-white" },
//     { title: "Confirmed", value: 96, color: "text-emerald-400" },
//     { title: "Waiting List", value: 10, color: "text-amber-400" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4 lg:gap-6">
//       {stats.map((stat, index) => (
//         <div key={index} className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/10 flex items-center justify-between group">
//           <div>
//             <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-300/40 mb-1">{stat.title}</p>
//             <p className={`text-3xl lg:text-4xl font-black ${stat.color} tracking-tight`}>{stat.value}</p>
//           </div>
//           <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center opacity-50">
//             {index === 0 ? "📈" : index === 1 ? "✔️" : "⏳"}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




export default function DoctorStats() {
  const stats = [
    { title: "Total Bookings", value: 124 },
    { title: "Confirmed", value: 96 },
    { title: "Waiting List", value: 10 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow"
        >
          <p className="text-xs uppercase tracking-widest text-indigo-300/70">
            {stat.title}
          </p>

          <p className="text-2xl sm:text-3xl font-bold text-white mt-2">
            {stat.value}
          </p>
        </div>
      ))}

    </div>
  );
}