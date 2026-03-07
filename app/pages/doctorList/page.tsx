// import Sidebar from "@/components/layout/sidebar";
// import DoctorPageHeader from "@/components/doctor/doctorPageHeader";
// import DoctorPageTable from "@/components/doctor/doctorPageTable";
// import DoctorListLayout from "@/components/doctor/doctorListLayout";

// export default async function DoctorPage() {
//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-[#0b1e3d] via-[#0f2b59] to-[#081426] text-white">
//       <Sidebar />

//       <main className="flex-1 px-6 lg:px-12 py-10">
//         <DoctorListLayout />
//       </main>
//     </div>
//   );
// }


// import Sidebar from "@/components/layout/sidebar";
// import DoctorListLayout from "@/components/doctor/doctorListLayout";

// export default async function DoctorPage() {
//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-slate-100 dark:bg-slate-950">
//       <Sidebar />

//       <main className="flex-1 px-6 lg:px-12 py-10 overflow-x-hidden">
//           <DoctorListLayout />
//       </main>
//     </div>
//   );
// }

import DoctorListLayout from "@/components/doctor/doctorListLayout";
// Sidebar import removed - now handled globally in layout.js

export default async function DoctorPage() {
  return (
    /* The outer flex container and Sidebar are removed.
       The global layout now provides the background color and 
       the correct spacing (lg:ml-64) for the fixed sidebar.
    */
    <div className="">
      <DoctorListLayout />
    </div>
  );
}