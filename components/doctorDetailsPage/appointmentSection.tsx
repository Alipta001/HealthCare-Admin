import AppointmentTable from "./appointmentTable";
import { AppointmentSectionProps } from "@/types/components";

export default function AppointmentSection({ appointments }: AppointmentSectionProps) {
  return (
    <div className="bg-white/10 backdrop-blur-3xl rounded-[2rem] lg:rounded-[3.5rem] p-1 border border-white/20 shadow-2xl overflow-hidden">
      <div className="p-6 lg:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5">
        <h2 className="text-xl lg:text-3xl font-black text-white tracking-tight">
          Doctor Appointments
        </h2>

        <span className="bg-indigo-500/20 text-indigo-300 px-4 lg:px-6 py-2 rounded-full font-bold text-[10px] lg:text-sm border border-indigo-500/30 whitespace-nowrap">
          March 2026 Schedule
        </span>
      </div>

      <div className="bg-white rounded-b-[1.9rem] lg:rounded-b-[3.4rem] overflow-x-auto">
        <AppointmentTable appointments={appointments} />
      </div>
    </div>
  );
}