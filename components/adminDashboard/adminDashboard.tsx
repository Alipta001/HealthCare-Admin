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

// "use client";

// import { useEffect, useState } from "react";
// import Sidebar from "../layout/sidebar";
// import Header from "./header";
// import StatsCards from "./statsCard";
// import FilterBar from "./filterBar";
// import DoctorTable from "./doctorTable";
// import DepartmentModal from "../modals/departmentModal";
// import { useDispatch, useSelector } from "react-redux";
// import { doctorList } from "@/redux/slice/doctorSlice";

// export default function AdminDashboard() {
//   const [doctorModalOpen, setDoctorModalOpen] = useState(false);
//   const [departmentModalOpen, setDepartmentModalOpen] = useState(false);
//   const dispatch = useDispatch();
//   const {data:doctors, error, loading} = useSelector((state)=> state.doctor);
//   useEffect(()=>{
//     dispatch(doctorList())
//   },[dispatch])

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-slate-100 dark:bg-slate-950">
//       <Sidebar />
//       <main className="flex-1 px-6 lg:px-12 py-10 overflow-x-hidden">

//         <Header
//           onOpenDoctorModal={() => setDoctorModalOpen(true)}
//           onOpenDepartmentModal={() => setDepartmentModalOpen(true)}
//         />

//         <div className="mt-8 space-y-6">
//           <StatsCards doctors= {doctors}/>
//           <FilterBar />
//           <div className="overflow-x-auto">
//             <DoctorTable />
//           </div>
//         </div>

//       </main>
//       <DepartmentModal
//         open={departmentModalOpen}
//         onClose={() => setDepartmentModalOpen(false)}
//       />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// // Sidebar import removed - it's now global in layout.js
// import Header from "./header";
// import StatsCards from "./statsCard";
// import FilterBar from "./filterBar";
// import DoctorTable from "./doctorTable";
// import DepartmentModal from "../modals/departmentModal";
// import { useDispatch, useSelector } from "react-redux";
// import { doctorList } from "@/redux/slice/doctorSlice";

// export default function AdminDashboard() {
//   const [doctorModalOpen, setDoctorModalOpen] = useState(false);
//   const [departmentModalOpen, setDepartmentModalOpen] = useState(false);
//   const dispatch: any = useDispatch();

//   const { data: doctors, totalItems, error, loading } = useSelector((state: any) => state.doctor);

//   useEffect(() => {
//     dispatch(doctorList({ page: 1, limit: 5 }));
//   }, [dispatch]);

//   return (
//     <>

//       <Header
//         onOpenDoctorModal={() => setDoctorModalOpen(true)}
//         onOpenDepartmentModal={() => setDepartmentModalOpen(true)}
//       />

//       <div className="mt-8 space-y-6">
//         <StatsCards totalItems={totalItems}/>
//         <FilterBar doctors={doctors || []}/>
//         <div className="rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <DoctorTable />
//           </div>
//         </div>
//       </div>

//       <DepartmentModal
//         open={departmentModalOpen}
//         onClose={() => setDepartmentModalOpen(false)}
//       />
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Header from "./header";
import StatsCards from "./statsCard";
import FilterBar from "./filterBar";
import DoctorTable from "./doctorTable";
import DepartmentModal from "../modals/departmentModal";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { doctorList } from "@/redux/slice/doctorSlice";
import { departmentList } from "@/redux/slice/departmentSlice";

export default function AdminDashboard() {
  const dispatch: any = useDispatch();
  const [departmentModalOpen, setDepartmentModalOpen] = useState(false);

  const {
    data: doctors,
    filteredDoctors,
    loading,
    filterLoading,
    page,
    totalPages,
    totalItems,
  } = useSelector((state: any) => state.doctor);

  useEffect(() => {
    dispatch(doctorList({ page: 1, limit: 10 }));
    dispatch(departmentList());
  }, [dispatch]);

  // Logic: Show filtered list only if it's not null.
  // Pagination is only shown for the main list.
  const isFiltering = filteredDoctors !== null;
  const doctorsToShow = isFiltering ? filteredDoctors : doctors;

  const handlePageChange = (event: any) => {
    const selectedPage = event.selected + 1;
    dispatch(doctorList({ page: selectedPage, limit: 10 }));
  };

  return (
    <>
      <Header
        onOpenDoctorModal={() => {}}
        onOpenDepartmentModal={() => setDepartmentModalOpen(true)}
      />

      <div className="mt-8 space-y-6">
        <StatsCards totalItems={totalItems} />
        <FilterBar doctors={doctors || []} />

        <div className="rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <DoctorTable
              doctors={doctorsToShow || []}
              loading={isFiltering ? filterLoading : loading}
            />
          </div>
        </div>

        {/* PAGINATION: Only visible when not filtering and more than 1 page exists */}
        {!isFiltering && totalPages > 1 && (
          <div className="flex justify-center mt-10 pb-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel="›"
              previousLabel="‹"
              onPageChange={handlePageChange}
              pageCount={totalPages}
              forcePage={page - 1} // Syncs UI with Redux state
              containerClassName="flex items-center gap-2"
              pageLinkClassName="px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-xl hover:bg-slate-600 cursor-pointer"
              previousLinkClassName="px-4 py-2 text-white bg-slate-700 rounded-xl hover:bg-indigo-500 cursor-pointer"
              nextLinkClassName="px-4 py-2 text-white bg-slate-700 rounded-xl hover:bg-indigo-500 cursor-pointer"
              activeLinkClassName="!bg-indigo-600 font-bold"
              disabledClassName="opacity-40 cursor-not-allowed"
            />
          </div>
        )}
      </div>

      <DepartmentModal
        open={departmentModalOpen}
        onClose={() => setDepartmentModalOpen(false)}
      />
    </>
  );
}
