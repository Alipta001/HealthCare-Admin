
// "use client";

// import { useState } from "react";
// import Sidebar from "../layout/sidebar";
// import Header from "./header";
// import StatsCards from "./statsCard";
// import FilterBar from "./filterBar";
// import DoctorTable from "./doctorTable";
// import AddDoctorModal from "./addDoctorModal";

// export default function AdminDashboard() {
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//       <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">

//         <Sidebar />

//         <div className="flex-1 flex flex-col w-full">

//           <Header
//             onOpenModal={() => setModalOpen(true)}
//           />

//           <div className="p-4 sm:p-6 lg:p-10 space-y-6">
//             <StatsCards />
//             <FilterBar />
//             <DoctorTable />
//           </div>
//         </div>

//         <AddDoctorModal open={modalOpen} onClose={() => setModalOpen(false)} />
//       </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import Sidebar from "../layout/sidebar";
// import Header from "./header";
// import StatsCards from "./statsCard";
// import FilterBar from "./filterBar";
// import DoctorTable from "./doctorTable";
// import AddDoctorModal from "./modals/addDoctorModalLayout";
// import DepartmentModal from "./modals/departmentModal";

// export default function AdminDashboard() {
//   const [doctorModalOpen, setDoctorModalOpen] = useState(false);
//   const [departmentModalOpen, setDepartmentModalOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">

//       <Sidebar />

//       <div className="flex-1 flex flex-col w-full">
//         <Header
//           onOpenDoctorModal={() => setDoctorModalOpen(true)}
//           onOpenDepartmentModal={() => setDepartmentModalOpen(true)}
//         />

//         <div className="p-6 space-y-6">
//           <StatsCards />
//           <FilterBar />
//           <DoctorTable />
//         </div>
//       </div>

//       {/* Doctor Modal */}
//       <AddDoctorModal
//         open={doctorModalOpen}
//         onClose={() => setDoctorModalOpen(false)}
//       />

//       {/* Department Modal */}
//       <DepartmentModal
//         open={departmentModalOpen}
//         onClose={() => setDepartmentModalOpen(false)}
//       />
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import Sidebar from "../layout/sidebar";
// import Header from "./header";
// import StatsCards from "./statsCard";
// import FilterBar from "./filterBar";
// import DoctorTable from "./doctorTable";
// import AddDoctorModal from "./modals/addDoctorModalLayout";
// import DepartmentModal from "./modals/departmentModal";

// export default function AdminDashboard() {
//   const [doctorModalOpen, setDoctorModalOpen] = useState(false);
//   const [departmentModalOpen, setDepartmentModalOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">

//       <Sidebar />

//       <div className="flex-1 flex flex-col w-full">
//         <Header
//           onOpenDoctorModal={() => setDoctorModalOpen(true)}
//           onOpenDepartmentModal={() => setDepartmentModalOpen(true)}
//         />

//         <div className="p-6 space-y-6">
//           <StatsCards />
//           <FilterBar />
//           <DoctorTable />
//         </div>
//       </div>

//       <AddDoctorModal
//         open={doctorModalOpen}
//         onClose={() => setDoctorModalOpen(false)}
//       />

//       <DepartmentModal
//         open={departmentModalOpen}
//         onClose={() => setDepartmentModalOpen(false)}
//       />
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Sidebar from "../layout/sidebar";
import Header from "./header";
import StatsCards from "./statsCard";
import FilterBar from "./filterBar";
import DoctorTable from "./doctorTable";

// Modal components
import AddDoctorModalLayout from "./modals/addDoctorModalLayout";
import DoctorModalForm from "./modals/doctorModalForm";
import DepartmentModal from "./modals/departmentModal";

export default function AdminDashboard() {
  const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  const [departmentModalOpen, setDepartmentModalOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-x-hidden">
        <Header
          onOpenDoctorModal={() => setDoctorModalOpen(true)}
          onOpenDepartmentModal={() => setDepartmentModalOpen(true)}
        />

        <div className="p-4 sm:p-6 lg:p-10 space-y-6">
          <StatsCards />
          <FilterBar />
          <div className="overflow-x-auto">
            <DoctorTable />
          </div>
        </div>
      </div>

      {/* Doctor Modal */}
      <AddDoctorModalLayout
        open={doctorModalOpen}
        onClose={() => setDoctorModalOpen(false)}
        title="Register New Doctor"
        description="Add doctor profile and assign department"
      >
        <DoctorModalForm
          onCancel={() => setDoctorModalOpen(false)}
        />
      </AddDoctorModalLayout>

      {/* Department Modal */}
      <DepartmentModal
        open={departmentModalOpen}
        onClose={() => setDepartmentModalOpen(false)}
      />
    </div>
  );
}