"use client";

interface Appointment {
  status: string;
}

interface AppointmentStatsProps {
  appointments: Appointment[];
}

export default function AppointmentStats({ appointments }: AppointmentStatsProps) {

  const total = appointments.length;
  const pending = appointments.filter(a => a.status === "Pending").length;
  const accepted = appointments.filter(a => a.status === "Accepted").length;
  const rejected = appointments.filter(a => a.status === "Rejected").length;

  const stats = [
    { title: "Total Appointments", value: total, color: "text-indigo-600" },
    { title: "Pending Appts", value: pending, color: "text-amber-500" },
    { title: "Accepted", value: accepted, color: "text-emerald-500" },
    { title: "Rejected", value: rejected, color: "text-rose-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((card) => (
        <div
          key={card.title}
          className="
          bg-white dark:bg-slate-900
          p-5 sm:p-8
          rounded-[2rem]
          border border-slate-100 dark:border-slate-800
          shadow-sm hover:shadow-xl
          transition-all duration-300
          "
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