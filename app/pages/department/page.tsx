import DepartmentHeader from "@/components/department/departmentHeader";
import DepartmentGrid from "@/components/department/departmentGrid";
import Sidebar from "@/components/layout/sidebar";

export const metadata = {
  title: "Departments | DocAdmin",
  description:
    "Manage hospital departments, assign doctors, and control department operations from the admin dashboard.",
};

export default function DepartmentsPage() {
  const departments = [
    {
      id: 1,
      name: "Cardiology",
      description: "Heart and cardiovascular specialists",
      totalDoctors: 12,
    },
    {
      id: 2,
      name: "Neurology",
      description: "Brain and nervous system experts",
      totalDoctors: 8,
    },
    {
      id: 3,
      name: "Orthopedics",
      description: "Bone and joint specialists",
      totalDoctors: 10,
    },
  ];

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="px-6 sm:px-10 lg:px-14 py-12">
          <div className="space-y-16">
            <DepartmentHeader />
            <DepartmentGrid departments={departments} />
          </div>
        </div>
      </main>
    </div>
  );
}