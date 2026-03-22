import { AppointmentMobileCardProps } from "@/types/components";

export default function AppointmentMobileCard({ appointment, showActions = true }: AppointmentMobileCardProps) {

  const statusColor = {
    Pending: "bg-yellow-100 text-yellow-700",
    Accepted: "bg-emerald-100 text-emerald-700",
    Rejected: "bg-rose-100 text-rose-700",
  };

  return (
    <div
      className="rounded-2xl p-5
      bg-white/70 dark:bg-slate-900/70
      backdrop-blur-xl
      border border-white/40 dark:border-slate-800
      shadow-md"
    >
      <div className="flex justify-between items-start">

        <div>
          <p className="text-xs text-slate-400">Patient</p>

          <p className="font-semibold text-lg text-slate-800 dark:text-white">
            {appointment.patient}
          </p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded ${statusColor[appointment.status]}`}
        >
          {appointment.status}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
        Doctor: {appointment.doctor}
      </p>

      <div className="flex justify-between mt-2 text-sm text-slate-500 dark:text-slate-400">
        <span>{appointment.date}</span>
        <span>{appointment.time}</span>
      </div>

      {/* Show buttons only for Pending appointments */}
      {showActions && (
        <div className="flex gap-3 mt-4">
          <button className="flex-1 py-2 rounded-lg bg-emerald-500 text-white font-medium">
            Accept
          </button>

          <button className="flex-1 py-2 rounded-lg bg-rose-500 text-white font-medium">
            Reject
          </button>
        </div>
      )}
    </div>
  );
}