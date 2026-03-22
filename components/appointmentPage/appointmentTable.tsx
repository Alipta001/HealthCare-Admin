import AppointmentRow from "./appointmentRow";
import AppointmentMobileCard from "./appointmentMobileCard";
import { CalendarX } from "lucide-react";
import { AppointmentTableProps } from "@/types/components";

export default function AppointmentTable({
  appointments,
  statusFilter,
}: AppointmentTableProps) {
  // Show action buttons only for Pending appointments
  const showActions = statusFilter === "Pending";

  if (!appointments || appointments.length === 0) {
    return (
      <div
        className="
        flex flex-col items-center justify-center
        py-20
        rounded-[2rem]
        bg-white/60 dark:bg-slate-900/70
        backdrop-blur-xl
        border border-white/40 dark:border-slate-800
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]
        text-center
        "
      >
        <CalendarX className="w-12 h-12 text-slate-400 mb-4" />

        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
          No Appointments Found
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          There are currently no appointments available.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div
        className="hidden md:block rounded-[2rem]
        bg-white/60 dark:bg-slate-900/70
        backdrop-blur-xl
        border border-white/40 dark:border-slate-800
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]
        overflow-hidden"
      >
        <table className="w-full text-base">
          <thead className="bg-slate-100 dark:bg-slate-900/40 text-sm uppercase text-slate-500 dark:text-slate-400">
            <tr>
              <th className="px-6 py-4 text-left">Patient</th>
              <th className="px-6 py-4 text-left">Doctor</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Time</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <AppointmentRow
                key={a._id}
                appointment={a}
                showActions={showActions}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="grid md:hidden gap-4">
        {appointments.map((a) => (
          <AppointmentMobileCard
            key={a._id}
            appointment={a}
            showActions={showActions}
          />
        ))}
      </div>
    </>
  );
}
