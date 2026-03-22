"use client";

import { useState } from "react";
import ActionButtons from "./actionButtons";
import { Doctor, Department, Slot } from "../../typescript/doctor";

interface DoctorPageRowProps {
  doctor: Doctor;
  departments: Department[];
  onEdit: (doctor: Doctor) => void;
  onDelete: (doctor: Doctor) => void;
}

export default function DoctorPageRow({
  doctor,
  departments,
  onEdit,
  onDelete,
}: DoctorPageRowProps) {
  const [more, showMore] = useState(false);

  const departmentName =
    typeof doctor.departmentId === "object"
      ? doctor.departmentId?.name
      : doctor.department?.name;

  const slots =
    doctor?.availableSlots
      ?.filter((slot: Slot) => new Date(slot.date) >= new Date())
      ?.sort(
        (a: Slot, b: Slot) =>
          new Date(a.date).getTime() - new Date(b.date).getTime(),
      ) || [];

  const visibleSlots = more ? slots : slots.slice(0, 2);
  const remainingCount = slots.length - 2;

  return (
    <tr className="flex flex-col md:table-row group border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300 p-4 md:p-0">
      {/* Practitioner */}
      <td className="px-4 md:px-8 py-3 md:py-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-xl">
            👤
          </div>

          <div>
            <p className="font-bold text-slate-800 text-[16px] md:text-[18px]">
              {doctor.name}
            </p>

            <p className="text-[10px] text-slate-400 font-bold uppercase">
              Senior Specialist
            </p>
          </div>
        </div>
      </td>

      {/* Department */}
      <td className="px-4 md:px-6 py-2 md:py-5 md:text-center">
        <span className="inline-flex px-3 py-1.5 text-[11px] font-black uppercase rounded-xl bg-slate-100 text-slate-500">
          {departmentName}
        </span>
      </td>

      {/* Slots */}
      <td className="px-4 md:px-6 py-3 md:py-5">
        {visibleSlots.length > 0 ? (
          <>
            {visibleSlots.map((slot: Slot, index: number) => {
              const formattedDate = new Date(slot.date).toLocaleDateString(
                "en-US",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                },
              );

              return (
                <div
                  key={index}
                  className="inline-flex items-center rounded-xl bg-[#5e2ced] text-white shadow-lg"
                >
                  <div className="px-4 py-2 text-[13px] font-bold flex gap-3 items-center">
                    <span>{formattedDate}</span>
                    <span>|</span>
                    <span>{slot.time}</span>
                  </div>
                </div>
              );
            })}

            {slots.length > 2 && !more && (
              <button
                onClick={() => showMore(true)}
                className="text-indigo-600 text-xs font-semibold block mt-2"
              >
                +{remainingCount} more
              </button>
            )}

            {more && (
              <button
                onClick={() => showMore(false)}
                className="text-slate-500 text-xs font-semibold block mt-2"
              >
                Show less
              </button>
            )}
          </>
        ) : (
          <div className="text-slate-400 text-sm">No Upcoming Slots</div>
        )}
      </td>

      {/* Actions */}
      <td className="px-4 md:px-8 py-4 md:py-5 text-right">
        <ActionButtons doctor={doctor} onEdit={onEdit} onDelete={onDelete} />
      </td>
    </tr>
  );
}
