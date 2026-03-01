// components/DoctorHeader.jsx

import Link from "next/link";

export default function DoctorPageHeader() {
  return (
    <div className="relative mb-12">
      
      <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 tracking-tight">
            Doctors
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Manage and monitor all registered doctors
          </p>
        </div>

        <Link
          href="/admin/doctors/add"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          + Add Doctor
        </Link>
      </div>
    </div>
  );
}