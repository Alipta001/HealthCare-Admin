"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { authLogout } from "@/redux/slice/authSlice/authSlice";
import { useDispatch } from "react-redux";
import {
  LayoutDashboard,
  Building2,
  Users,
  CalendarCheck,
  Clock,
  MapPin,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import AdminLogoutModal from "./adminLogoutModal";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const menu = [
    { name: "Overview", path: "/pages/dashboard", icon: LayoutDashboard },
    { name: "Departments", path: "/pages/department", icon: Building2 },
    { name: "Doctors", path: "/pages/doctorList", icon: Users },
    { name: "Appointments", path: "/pages/appointments", icon: CalendarCheck },
    /*   { name: "Schedules", path: "/pages/schedules", icon: Clock }, */
    { name: "Branch", path: "/pages/branch", icon: MapPin },
  ];

  const handleLogoutConfirm = async () => {
    setIsPending(true);
    try {
      await dispatch(authLogout() as any).unwrap();
      router.push("/auth/signin");
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed");
    } finally {
      setIsPending(false);
      setIsLogoutOpen(false);
    }
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-b flex items-center justify-between px-5 z-[50]">
        <h1 className="font-black text-xl tracking-tighter italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-600">
          Doc<span className="font-light">Admin</span>
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="p-2 bg-slate-900 text-white rounded-xl shadow-lg"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[60] lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-[70] h-screen w-72
          bg-slate-950 text-white
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
          flex flex-col border-r border-slate-800
        `}
      >
        <div className="p-8 flex items-center justify-between">
          <span className="text-2xl font-black italic tracking-tighter uppercase">
            Doc<span className="text-slate-500 font-light">Admin</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-4 space-y-2 flex-1 overflow-y-auto">
          {menu.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="text-[12px] font-black uppercase tracking-[0.15em]">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-slate-900">
          <button
            onClick={() => setIsLogoutOpen(true)}
            className="w-full py-4 rounded-2xl bg-red-500/10 text-red-500 hover:bg-red-600 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            <LogOut size={20} />
            <span className="text-[12px] font-black uppercase tracking-[0.15em]">
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* MODAL COMPONENT */}
      <AdminLogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogoutConfirm}
        isPending={isPending}
      />
    </>
  );
}
