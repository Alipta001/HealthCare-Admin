// "use client";

// import { LayoutDashboard, Users, Calendar, LogOut } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <div className="w-64 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white flex flex-col justify-between shadow-xl">
//       <div>
//         <div className="p-6 text-2xl font-bold tracking-wide border-b border-indigo-600">
//           Admin Panel
//         </div>

//         <nav className="mt-6 space-y-2 px-4">
//           <SidebarItem icon={<LayoutDashboard />} label="Dashboard" />
//           <SidebarItem icon={<Users />} label="Doctors" />
//           <SidebarItem icon={<Calendar />} label="Appointments" />
//         </nav>
//       </div>

//       <div className="p-4 border-t border-indigo-600">
//         <SidebarItem icon={<LogOut />} label="Logout" />
//       </div>
//     </div>
//   );
// }

// function SidebarItem({ icon, label }: any) {
//   return (
//     <div className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:bg-indigo-600 transition-all duration-200">
//       {icon}
//       <span className="font-medium">{label}</span>
//     </div>
//   );
// }

// export default function Sidebar() {
//   const menu = [
//     { name: "Overview", icon: "📊", active: true },
//     { name: "Appointments", icon: "📅", active: false },
//     { name: "Doctors", icon: "👨‍⚕️", active: false },
//     { name: "Schedules", icon: "⏰", active: false },
//     { name: "Settings", icon: "⚙️", active: false },
//   ];

//   return (
//     <div className="w-72 bg-slate-900 h-screen sticky top-0 flex flex-col p-6 shadow-2xl">
//       <div className="flex items-center gap-3 mb-12 px-2">
//         <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30">
//           M
//         </div>
//         <span className="text-xl font-bold text-white tracking-tight">MedCore <span className="text-indigo-400">AI</span></span>
//       </div>

//       <nav className="flex-1 space-y-2">
//         {menu.map((item) => (
//           <button key={item.name} className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
//             item.active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
//           }`}>
//             <span className="text-lg">{item.icon}</span>
//             <span className="font-semibold text-sm tracking-wide">{item.name}</span>
//             {item.active && <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>}
//           </button>
//         ))}
//       </nav>

//       <div className="bg-slate-800/50 rounded-2xl p-4 mt-auto border border-slate-700">
//         <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2">System Status</p>
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
//           <span className="text-xs text-slate-300 font-medium">Server Online</span>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Overview");
  const [open, setOpen] = useState(false);

  const menu = [
    "Overview",
    "Departments",
    "Doctors",
    "Appointments",
    "Schedules",
    "Settings",
  ];

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex justify-between items-center px-5 py-4 bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-40">
        <h1 className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
          DocAdmin
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="text-2xl text-slate-900 dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static z-50
          top-0 left-0 h-screen w-64 sm:w-72
          bg-slate-900 text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          overflow-y-auto
        `}
      >
        <div className="p-6 text-xl font-bold">DocAdmin</div>

        <nav className="px-4 space-y-2">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative w-full text-left px-4 py-3 rounded-xl transition-all ${
                active === item
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800 text-slate-400"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 top-0 h-full w-1 bg-cyan-400 rounded-r-md animate-pulse"></span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}