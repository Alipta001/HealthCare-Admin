"use client";

import DoctorPageRow from "./doctorPageRow";
import DoctorListSkeleton from "../layout/doctorListSkeleton";

interface DoctorPageTableProps {
  doctors: any[];
  departments: any[];
  loading?: boolean;
  error?: string;
  onEdit: (doctor: any) => void;
  onDelete: (doctor: any) => void;
}

export default function DoctorPageTable({
  doctors,
  departments,
  loading,
  error,
  onEdit,
  onDelete,
}: DoctorPageTableProps) {
  if (error) {
    return (
      <div className="w-full p-20 text-center bg-red-50/50 rounded-[2.5rem] border border-red-100">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full p-1 md:p-4">
      <div className="overflow-x-auto rounded-[1.5rem] md:rounded-[2.5rem] border border-white/50 bg-white/80 backdrop-blur-xl shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead className="hidden md:table-header-group bg-slate-50/80 border-b border-slate-200">
            <tr>
              <th className="px-8 py-6 text-xs uppercase tracking-[0.25em] text-slate-400 font-black">
                Practitioner
              </th>
              <th className="px-6 py-6 text-center text-xs uppercase tracking-[0.25em] text-slate-400 font-black">
                Department
              </th>
              <th className="px-6 py-6 text-center text-xs uppercase tracking-[0.25em] text-slate-400 font-black">
                Next Available
              </th>
              <th className="px-8 py-6 text-xs text-right uppercase tracking-[0.25em] text-slate-400 font-black">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="block md:table-row-group divide-y divide-slate-100">
            {loading ? (
              Array.from({ length: 10 }).map((_, index) => (
                <DoctorListSkeleton key={`skeleton-${index}`} />
              ))
            ) : doctors.length > 0 ? (
              doctors.map((doctor: any) => (
                <DoctorPageRow
                  key={doctor._id}
                  doctor={doctor}
                  departments={departments || []}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr className="block md:table-row">
                <td
                  colSpan={4}
                  className="p-20 text-center text-slate-400 font-medium italic"
                >
                  No practitioners found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
