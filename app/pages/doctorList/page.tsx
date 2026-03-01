// app/admin/doctors/page.jsx

import Sidebar from "@/components/layout/sidebar";
import DoctorPageHeader from "@/components/doctor/doctorPageHeader";
import DoctorPageTable from "@/components/doctor/doctorPageTable";

export default async function DoctorPage() {
  const doctors = [
    {
      _id: "1",
      name: "Dr. Sarah Johnson",
      department: "Cardiology",
      email: "sarah@hospital.com",
      experience: "12 Years",
      image: "/images/login/profile-icon.png",
    },
    {
      _id: "2",
      name: "Dr. Michael Lee",
      department: "Neurology",
      email: "michael@hospital.com",
      experience: "8 Years",
      image: "/images/login/profile-icon.png",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8 lg:px-12 py-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <DoctorPageHeader />
          <DoctorPageTable doctors={doctors} />
        </div>
      </main>

    </div>
  );
}