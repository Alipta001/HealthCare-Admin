import AppointmentRow from "./appointmentRow";
import { CalendarX } from "lucide-react";
import { AppointmentTableProps } from "@/types/components";

export default function AppointmentTable({
  appointments,
}: AppointmentTableProps) {
  const isEmpty = !appointments || appointments.length === 0;

  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
      <table className="min-w-full">
        <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-6 py-3 text-left">Patient</th>
            <th className="px-6 py-3 text-left">Date</th>
            <th className="px-6 py-3 text-left">Time</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {isEmpty ? (
            <tr>
              <td colSpan={5} className="py-16 text-center">
                <div className="flex flex-col items-center gap-3 text-gray-400">
                  <CalendarX size={32} />
                  <p className="text-sm font-semibold">No Appointments Found</p>
                  <p className="text-xs">
                    There are currently no appointments available.
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            appointments.map((appointment) => (
              <AppointmentRow key={appointment._id} appointment={appointment} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
