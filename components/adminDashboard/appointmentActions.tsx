// export default function AppointmentActions() {
//   return (
//     <div className="flex justify-center gap-3">
//       <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
//         Accept
//       </button>

//       <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
//         Cancel
//       </button>
//     </div>
//   );
// }



// export default function AppointmentActions() {
//   return (
//     <div className="flex justify-center gap-3">
//       <button className="h-10 w-10 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm border border-emerald-100 group">
//         <span className="group-hover:scale-125 transition-transform">✓</span>
//       </button>
//       <button className="h-10 w-10 flex items-center justify-center bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-sm border border-rose-100 group">
//         <span className="group-hover:scale-125 transition-transform">✕</span>
//       </button>
//     </div>
//   );
// }



"use client";

export default function AppointmentActions() {
  return (
    <div className="flex justify-center gap-3">
      
      {/* Accept */}
      <button
        title="Accept Appointment"
        className="relative h-11 w-11 flex items-center justify-center rounded-2xl 
        bg-gradient-to-br from-emerald-50 to-emerald-100 
        text-emerald-600 shadow-sm border border-emerald-200
        hover:from-emerald-500 hover:to-emerald-600 hover:text-white
        hover:shadow-lg hover:shadow-emerald-200
        active:scale-95 transition-all duration-300 group overflow-hidden"
      >
        <span className="text-lg font-bold group-hover:scale-125 transition-transform">
          ✓
        </span>
      </button>

      {/* Cancel */}
      <button
        title="Cancel Appointment"
        className="relative h-11 w-11 flex items-center justify-center rounded-2xl 
        bg-gradient-to-br from-rose-50 to-rose-100 
        text-rose-600 shadow-sm border border-rose-200
        hover:from-rose-500 hover:to-rose-600 hover:text-white
        hover:shadow-lg hover:shadow-rose-200
        active:scale-95 transition-all duration-300 group overflow-hidden"
      >
        <span className="text-lg font-bold group-hover:scale-125 transition-transform">
          ✕
        </span>
      </button>
    </div>
  );
}