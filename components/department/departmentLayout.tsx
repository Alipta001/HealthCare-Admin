// "use client";

// import { useState } from "react";
// import DepartmentHeader from "@/components/department/departmentHeader";
// import DepartmentGrid from "@/components/department/departmentGrid";
// import DepartmentModal from "@/components/modals/departmentModal";
// import Sidebar from "@/components/layout/sidebar";

// export default function DepartmentsLayout() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex bg-slate-100 dark:bg-slate-950">
//       <Sidebar />

//       <main className="flex-1 px-6 lg:px-12 py-10 overflow-x-hidden">
//         <div className="space-y-10">
//           <DepartmentHeader onOpen={() => setIsOpen(true)} />
//           <DepartmentGrid />
//         </div>
//       </main>

//       <DepartmentModal
//         open={isOpen}
//         onClose={() => setIsOpen(false)}
//       />
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import DepartmentHeader from "@/components/department/departmentHeader";
import DepartmentGrid from "@/components/department/departmentGrid";
import DepartmentModal from "@/components/modals/departmentModal";

export default function DepartmentsLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-10">
        <DepartmentHeader onOpen={() => setIsOpen(true)} />

        <DepartmentGrid />
      </div>
      <DepartmentModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
