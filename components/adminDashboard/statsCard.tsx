// export default function StatsCards(doctors) {
//   const doctorCount = doctors? doctors.doctors.length : 0;
//   /* console.log("List of Doctors:", doctors) */
//  /*  console.log(doctorCount) */
//   const stats = [
//     { title: "Total Doctors", value: doctorCount },
//     { title: "Pending Appointments", value: "42" },
//     { title: "Accepted Today", value: "19" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {stats.map((card) => (
//         <div key={card.title} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
//           <p className="text-slate-500 text-sm font-semibold">{card.title}</p>
//           <h2 className="text-3xl font-bold mt-3 text-slate-900 dark:text-white">{card.value}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";
import { doctorList } from "@/redux/slice/doctorSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface StatsCardsProps {
  totalItems: number;
}
export default function StatsCards({totalItems}: StatsCardsProps) {

  const stats = [
    { title: "Total Doctors", value: totalItems, color: "text-indigo-600" },
    { title: "Pending Appts", value: "42", color: "text-amber-500" },
    { title: "Accepted Today", value: "19", color: "text-emerald-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {stats.map((card) => (
        <div
          key={card.title}
          className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-widest">
            {card.title}
          </p>
          <div className="flex items-baseline gap-2 mt-2">
            <h2 className={`text-3xl sm:text-4xl font-black ${card.color}`}>
              {card.value}
            </h2>
            <span className="text-slate-300 text-xs font-medium">
              this month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
