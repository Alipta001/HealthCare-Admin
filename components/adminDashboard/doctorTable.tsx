import DoctorRow from "./doctorRow";
import DoctorListSkeleton from "../layout/doctorListSkeleton";
import { DoctorTableProps } from "@/types/components";

export default function DoctorTable({
  doctors = [],
  departments,
  loading,
  errorMessage,
}: DoctorTableProps) {
  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl bg-white">
      <table className="w-full text-left min-w-[900px] border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {/* Left aligned */}
            <th className="px-8 py-6 text-xs uppercase tracking-[0.2em] text-slate-400 font-black">
              Doctor Name
            </th>
            {/* Centered to match image */}
            <th className="px-6 py-6 text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-black">
              Department
            </th>
            {/* Right aligned to match image */}
            <th className="px-8 py-6 text-right text-xs uppercase tracking-[0.2em] text-slate-400 font-black">
              Time Available
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <DoctorListSkeleton key={i} />
            ))
          ) : doctors.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="p-12 text-center text-slate-400 font-medium italic"
              >
                {errorMessage || "No doctors found"}
              </td>
            </tr>
          ) : (
            doctors.map((doc: any) => (
              <DoctorRow key={doc._id} doctor={doc} departments={departments} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
