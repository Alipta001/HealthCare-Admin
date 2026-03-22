"use client";
import { useState } from "react";
import { Check, X, Loader2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppointmentRowProps } from "@/types/components";
import {
  appointmentConfirm,
  appointmentList,
  appointmentReject,
} from "@/redux/slice/appointmentSlice/appointmentSlice";

export default function AppointmentRow({
  appointment,
  showActions = true,
}: AppointmentRowProps) {
  const [loading, setLoading] = useState<null | "accept" | "reject">(null);
  const dispatch = useDispatch() as any;

  const statusColor: any = {
    Pending: "bg-yellow-100 text-yellow-700",
    Accepted: "bg-emerald-100 text-emerald-700",
    Rejected: "bg-rose-100 text-rose-700",
  };

  const handleAction = async (type: "accept" | "reject") => {
    /* setLoading(type);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(null); */
    if (type === "accept") {
      console.log("Appointment Confirm Api calling.....");
      await dispatch(appointmentConfirm(appointment._id)).unwrap();
      dispatch(appointmentList());
      /* window.location.reload(); */
    } else {
      console.log("Appointment Rejected Api calling.....");
      await dispatch(appointmentReject(appointment._id)).unwrap();
      /* window.location.reload(); */
    }
  };

  return (
    <tr
      className="
      border-t border-slate-300
      transition-all duration-200
      bg-[#cecfd1]
      hover:bg-[#e0e4e8]
      "
    >
      {/* Patient */}
      <td className="px-6 py-5 font-semibold text-slate-800">
        {(appointment as any).name || appointment.patient}
      </td>

      {/* Doctor */}
      <td className="px-6 py-5 text-slate-700">{appointment.doctor}</td>

      {/* Date */}
      <td className="px-6 py-5 text-slate-700">
        {new Date(appointment.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </td>

      {/* Time */}
      <td className="px-6 py-5 text-slate-700">{appointment.time}</td>

      {/* Actions */}
      <td className="px-6 py-5 text-right">
        {/* Status */}
        <span
          className={`px-3 py-1 rounded-full text-xs mr-4 font-medium ${statusColor[appointment.status]}`}
        >
          {appointment.status}
        </span>

        {/* Show buttons only for Pending appointments */}
        {showActions && (
          <>
            {/* Accept Button */}
            <button
              disabled={loading !== null}
              onClick={() => handleAction("accept")}
              className="
          inline-flex items-center justify-center gap-2
          w-[110px]
          mr-3 px-4 py-2
          text-sm font-semibold
          rounded-lg text-white
          bg-gradient-to-r from-emerald-500 to-emerald-600
          shadow-md shadow-emerald-400/40
          hover:shadow-xl hover:shadow-emerald-500/50
          hover:-translate-y-[2px] hover:scale-[1.02]
          active:translate-y-[1px]
          transition-all duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
          "
            >
              {loading === "accept" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  Accept
                </>
              )}
            </button>

            {/* Reject Button */}
            <button
              disabled={loading !== null}
              onClick={() => handleAction("reject")}
              className="
          inline-flex items-center justify-center gap-2
          w-[110px]
          px-4 py-2
          text-sm font-semibold
          rounded-lg text-white
          bg-gradient-to-r from-rose-500 to-rose-600
          shadow-md shadow-rose-400/40
          hover:shadow-xl hover:shadow-rose-500/50
          hover:-translate-y-[2px] hover:scale-[1.02]
          active:translate-y-[1px]
          transition-all duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
          "
            >
              {loading === "reject" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <X className="w-4 h-4" />
                  Reject
                </>
              )}
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
