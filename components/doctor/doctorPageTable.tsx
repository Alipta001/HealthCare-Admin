import DoctorPageRow from "./doctorPageRow";
import DoctorPageCard from "./doctorPageCard";

export default function DoctorPageTable({ doctors }) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Next Available</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doctor) => (
              <DoctorPageRow key={doctor._id} doctor={doctor} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-5 md:hidden">
        {doctors.map((doctor) => (
          <DoctorPageCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </>
  );
}