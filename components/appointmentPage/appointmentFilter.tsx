import { AppointmentFiltersProps } from "@/types/components";

export default function AppointmentFilters({
  search,
  setSearch,
  statusFilter,
  onPendingClick,
  onAcceptedClick,
}: AppointmentFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

      <input
        type="text"
        placeholder="Search patient or doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-80 px-4 py-3 rounded-xl
        bg-white/70 dark:bg-slate-900/70
        backdrop-blur-xl
        border border-slate-200 dark:border-slate-700
        text-slate-700 dark:text-white
        placeholder-slate-400"
      />

      {/* Status Filter Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onPendingClick}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            statusFilter === "Pending"
              ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/40"
              : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-800"
          }`}
        >
          Pending Appointments
        </button>

        <button
          onClick={onAcceptedClick}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            statusFilter === "Accepted"
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/40"
              : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-emerald-50 dark:hover:bg-slate-800"
          }`}
        >
          Accepted Appointments
        </button>
      </div>

    </div>
  );
}