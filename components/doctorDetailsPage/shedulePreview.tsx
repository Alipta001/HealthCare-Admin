// export default function SchedulePreview() {
//   const days = [
//     { day: "Mon", date: "09", slots: 8, status: "High" },
//     { day: "Tue", date: "10", slots: 5, status: "Mid" },
//     { day: "Wed", date: "11", slots: 2, status: "Low" },
//     { day: "Thu", date: "12", slots: 0, status: "None" },
//     { day: "Fri", date: "13", slots: 6, status: "Mid" },
//     { day: "Sat", date: "14", slots: 4, status: "Mid" },
//     { day: "Sun", date: "15", slots: 0, status: "None" },
//   ];

//   return (
//     <div className="bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 p-6 lg:p-10">
//       <div className="flex justify-between items-center mb-8">
//         <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight">Weekly Capacity</h3>
//         <p className="text-xs lg:text-sm font-bold text-indigo-400/50 uppercase tracking-widest">March 2026</p>
//       </div>

//       <div className="grid grid-cols-7 gap-2 lg:gap-4">
//         {days.map((item, idx) => (
//           <div key={idx} className="flex flex-col items-center">
//             <span className="text-[10px] lg:text-xs font-black uppercase text-indigo-300/30 mb-3 tracking-tighter">
//               {item.day}
//             </span>
//             <div className={`w-full aspect-square rounded-xl lg:rounded-2xl flex flex-col items-center justify-center border-2 transition-all
//                 ${item.status === 'High' ? 'bg-indigo-600 border-indigo-400' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
              
//               <span className={`text-sm lg:text-2xl font-black ${item.status === 'High' ? 'text-white' : 'text-indigo-100'}`}>
//                 {item.date}
//               </span>
              
//               <span className={`hidden lg:block text-[9px] font-black mt-1 uppercase ${item.status === 'High' ? 'text-indigo-200' : 'text-indigo-400/50'}`}>
//                 {item.slots} Slots
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// export default function SchedulePreview() {
//   const days = [
//     { day: "Mon", date: "09", slots: 8 },
//     { day: "Tue", date: "10", slots: 5 },
//     { day: "Wed", date: "11", slots: 2 },
//     { day: "Thu", date: "12", slots: 0 },
//     { day: "Fri", date: "13", slots: 6 },
//     { day: "Sat", date: "14", slots: 4 },
//     { day: "Sun", date: "15", slots: 0 },
//   ];

//   return (
//     <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">

//       <div className="flex justify-between mb-6">
//         <h3 className="text-lg sm:text-xl font-semibold text-white">
//           Weekly Capacity
//         </h3>

//         <span className="text-xs text-indigo-400 uppercase">
//           March 2026
//         </span>
//       </div>

//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">

//         {days.map((item, idx) => (
//           <div
//             key={idx}
//             className="flex flex-col items-center bg-white/5 rounded-xl py-4"
//           >
//             <span className="text-xs text-indigo-300 uppercase">
//               {item.day}
//             </span>

//             <span className="text-lg font-bold text-white">
//               {item.date}
//             </span>

//             {item.slots > 0 && (
//               <span className="text-[10px] text-indigo-300 mt-1">
//                 {item.slots} slots
//               </span>
//             )}
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }




"use client";
import { useEffect, useState } from "react";

export default function SchedulePreview() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState([]);

  // Calculate the week based on the 'currentDate' state
  useEffect(() => {
    const daysArr = [];
    const startOfWeek = new Date(currentDate);
    
    // Find Monday of the current viewed week
    const dayDiff = startOfWeek.getDay() === 0 ? 6 : startOfWeek.getDay() - 1;
    startOfWeek.setDate(startOfWeek.getDate() - dayDiff);

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      
      daysArr.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate().toString().padStart(2, '0'),
        fullDate: date.toDateString(),
        isToday: date.toDateString() === new Date().toDateString(),
        slots: Math.floor(Math.random() * 6) // Dynamic mock slots
      });
    }
    setWeekDays(daysArr);
  }, [currentDate]);

  const changeWeek = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  const goToToday = () => setCurrentDate(new Date());

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-5 lg:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Weekly Capacity</h3>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
            {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2 bg-black/20 p-1.5 rounded-xl border border-white/5">
          <button 
            onClick={() => changeWeek(-1)}
            className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
            title="Previous Week"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button 
            onClick={goToToday}
            className="px-3 py-1 text-[10px] font-black uppercase text-indigo-300 hover:text-white transition-colors"
          >
            Today
          </button>

          <button 
            onClick={() => changeWeek(1)}
            className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
            title="Next Week"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
        {weekDays.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center rounded-xl py-4 transition-all duration-300 border ${
              item.isToday 
                ? "bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-900/40" 
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
          >
            <span className={`text-[10px] uppercase font-bold tracking-tight ${item.isToday ? "text-indigo-100" : "text-indigo-300/50"}`}>
              {item.day}
            </span>

            <span className={`text-xl font-black mt-1 ${item.isToday ? "text-white" : "text-slate-200"}`}>
              {item.date}
            </span>

            <div className="mt-2 min-h-[18px]">
              {item.slots > 0 ? (
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                  item.isToday ? "bg-white/20 text-white" : "bg-indigo-500/10 text-indigo-300"
                }`}>
                  {item.slots} slots
                </span>
              ) : (
                <span className="text-[9px] font-bold text-slate-500 uppercase italic opacity-50">Full</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}