"use client";

import DepartmentCard from "./departmentCard";

export default function DepartmentGrid({
  departments = [],
  doctorCountByDept,
}: any) {
  if (!departments.length) {
    return (
      <div className="text-center text-slate-500 py-10">
        No Departments Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
      {departments.map((dept: any) => (
        <DepartmentCard
          key={dept._id}
          department={dept}
          totalDoctors={doctorCountByDept[dept._id] || 0}
        />
      ))}
    </div>
  );
}
