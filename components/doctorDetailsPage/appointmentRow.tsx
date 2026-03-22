"use client";

import { AppointmentRowProps } from "@/types/components";

export default function AppointmentRow({ appointment }: AppointmentRowProps) {
  const formattedDate = new Date(appointment.date).toLocaleDateString();

  const statusStyle = {
    Pending: "bg-yellow-100 text-yellow-700",
    Accepted: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <tr className="hover:bg-gray-50 transition">
      {/* Patient */}
      <td className="px-6 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
          {appointment.patient?.charAt(0) || "U"}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800">
            {appointment.patient}
          </p>
          <p className="text-xs text-gray-500">Patient</p>
        </div>
      </td>

      {/* Date */}
      <td className="px-6 py-4 text-sm text-gray-600">{formattedDate}</td>

      {/* Time */}
      <td className="px-6 py-4 text-sm text-gray-600">{appointment.time}</td>

      {/* Status */}
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            statusStyle[appointment.status as keyof typeof statusStyle] ||
            "bg-gray-100 text-gray-600"
          }`}
        >
          {appointment.status}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-4 text-center space-x-2">
        <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          View
        </button>

        <button className="px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Approve
        </button>

        <button className="px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Cancel
        </button>
      </td>
    </tr>
  );
}
