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



// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { authLogout } from "@/redux/slice/authSlice";
// import { useDispatch } from "react-redux";

// export default function Sidebar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const dispatch = useDispatch()
//   const [open, setOpen] = useState(false);

//   const menu = [
//     { name: "Overview", path: "/pages/dashboard" },
//     { name: "Departments", path: "/pages/department" },
//     { name: "Doctors", path: "/pages/doctorList" },
//     { name: "Appointments", path: "/admin/appointments" },
//     { name: "Schedules", path: "/admin/schedules" },
//     { name: "Settings", path: "/admin/settings" },
//   ];

//  const handleLogout = async() => {
//     await dispatch(authLogout()).unwrap(); 
//     router.push("/auth/signin"); 
//     toast.success("Logged out successfully");
//   };

//   return (
//     <>
//       <div className="lg:hidden flex justify-between items-center px-5 py-4 bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-40">
//         <h1 className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
//           DocAdmin
//         </h1>
//         <button
//           onClick={() => setOpen(true)}
//           className="text-2xl text-slate-900 dark:text-white"
//         >
//           ☰
//         </button>
//       </div>

//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
//         />
//       )}

//       <div
//         className={`
//           fixed lg:static z-50
//           top-0 left-0 h-screen w-64 sm:w-72
//           bg-slate-900 text-white
//           transform transition-transform duration-300
//           ${open ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0
//           flex flex-col
//         `}
//       >
//         {/* Logo */}
//         <div className="p-6 text-xl font-bold tracking-wide">
//           DocAdmin
//         </div>

//         {/* Navigation */}
//         <nav className="px-4 space-y-2 flex-1 overflow-y-auto">
//           {menu.map((item) => {
//             const isActive = pathname === item.path;

//             return (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 onClick={() => setOpen(false)}
//                 className={`relative block px-4 py-3 rounded-xl transition-all duration-200 ${
//                   isActive
//                     ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
//                     : "text-slate-400 hover:bg-slate-800 hover:text-white"
//                 }`}
//               >
//                 {item.name}

//                 {isActive && (
//                   <span className="absolute left-0 top-0 h-full w-1 bg-cyan-400 rounded-r-md animate-pulse"></span>
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="p-4 border-t border-slate-800">
//           <button
//             onClick={handleLogout}
//             className="w-full px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-200 font-medium cursor-pointer"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }


// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { authLogout } from "@/redux/slice/authSlice";
// import { useDispatch } from "react-redux";

// export default function Sidebar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(false);

//   const menu = [
//     { name: "Overview", path: "/pages/dashboard" },
//     { name: "Departments", path: "/pages/department" },
//     { name: "Doctors", path: "/pages/doctorList" },
//     { name: "Appointments", path: "/admin/appointments" },
//     { name: "Schedules", path: "/admin/schedules" },
//     { name: "Settings", path: "/admin/settings" },
//   ];

//   const handleLogout = async () => {
//     try {
//       await dispatch(authLogout() as any).unwrap();
//       router.push("/auth/signin");
//       toast.success("Logged out successfully");
//     } catch (err) {
//       toast.error("Logout failed");
//     }
//   };

//   return (
//     <>
//       {/* Mobile Top Header */}
//       <div className="lg:hidden flex justify-between items-center px-5 py-4 bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-40">
//         <h1 className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
//           DocAdmin
//         </h1>
//         <button onClick={() => setOpen(true)} className="text-2xl text-slate-900 dark:text-white">
//           ☰
//         </button>
//       </div>

//       {/* Mobile Overlay */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
//         />
//       )}

//       {/* Fixed Sidebar Container */}
//       <aside
//         className={`
//           fixed top-0 left-0 z-50 h-screen w-64 sm:w-72
//           bg-slate-900 text-white
//           transform transition-transform duration-300
//           ${open ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0
//           flex flex-col
//         `}
//       >
//         <div className="p-6 text-xl font-bold tracking-wide">DocAdmin</div>

//         <nav className="px-4 space-y-2 flex-1 overflow-y-auto custom-scrollbar">
//           {menu.map((item) => {
//             const isActive = pathname === item.path;
//             return (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 onClick={() => setOpen(false)}
//                 className={`relative block px-4 py-3 rounded-xl transition-all duration-200 ${
//                   isActive
//                     ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
//                     : "text-slate-400 hover:bg-slate-800 hover:text-white"
//                 }`}
//               >
//                 {item.name}
//                 {isActive && (
//                   <span className="absolute left-0 top-0 h-full w-1 bg-cyan-400 rounded-r-md animate-pulse"></span>
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="p-4 border-t border-slate-800">
//           <button
//             onClick={handleLogout}
//             className="w-full px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-200 font-medium cursor-pointer"
//           >
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }



"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authLogout } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Overview", path: "/pages/dashboard" },
    { name: "Departments", path: "/pages/department" },
    { name: "Doctors", path: "/pages/doctorList" },
    { name: "Appointments", path: "/admin/appointments" },
    { name: "Schedules", path: "/admin/schedules" },
    { name: "Settings", path: "/admin/settings" },
  ];

  const handleLogout = async () => {
    try {
      await dispatch(authLogout() as any).unwrap();
      router.push("/auth/signin");
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  return (
    <>
      {/* 1. MOBILE TOP BAR - Fixed at the very top */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-b flex items-center justify-between px-5 z-[50]">
        <h1 className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
          DocAdmin
        </h1>
        <button 
          onClick={() => setOpen(true)} 
          className="p-2 text-2xl text-slate-900 dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* 2. OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
        />
      )}

      {/* 3. SIDEBAR - Absolute/Fixed on Mobile, Fixed on Desktop */}
      <aside
        className={`
          fixed top-0 left-0 z-[70] h-screen w-72
          bg-slate-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
          flex flex-col
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <span className="text-xl font-bold tracking-wide">DocAdmin</span>
          <button onClick={() => setOpen(false)} className="lg:hidden text-white text-2xl">✕</button>
        </div>

        <nav className="px-4 space-y-2 flex-1 overflow-y-auto">
          {menu.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all ${
                  isActive ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="w-full py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white cursor-pointer">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}