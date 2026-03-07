// "use client"
// import { useEffect } from 'react'
// import DoctorPageHeader from './doctorPageHeader'
// import DoctorPageTable from './doctorPageTable'
// import { useDispatch, useSelector } from 'react-redux'
// import { doctorList } from '@/redux/slice/doctorSlice'
// import { departmentList } from '@/redux/slice/departmentSlice'

// export default function DoctorListLayout() {
//     const dispatch = useDispatch();
//     const {data: doctors, error:doctorError, loading:doctorLoading} = useSelector((state)=> state.doctor)
//     const {data:departments, error, loading} = useSelector((state)=> state.department)
//     useEffect(()=>{
//         dispatch(doctorList());
//         dispatch(departmentList())
//     },[])
//     return (
//     <>
//     <div className="max-w-7xl mx-auto">
//               <DoctorPageHeader />
//               <DoctorPageTable doctors={doctors} departments={departments} />
//             </div>
//     </>
//   )
// }




// "use client";

// import DoctorPageHeader from "./doctorPageHeader";
// import DoctorPageTable from "./doctorPageTable";
// import DoctorFilters from "./doctorFilter";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { doctorList } from "@/redux/slice/doctorSlice";
// import { departmentList } from "@/redux/slice/departmentSlice";

// export default function DoctorListLayout() {
//   const dispatch = useDispatch();
//   const { data: doctors, loading, error } = useSelector((state) => state.doctor);
//   const { data: departments } = useSelector((state) => state.department);

//   useEffect(() => {
//     dispatch(doctorList());
//     dispatch(departmentList());
//   }, [dispatch]);

//   return (
//     <div className="w-full">
//       <DoctorPageHeader />
//       <DoctorFilters departments={departments || []} />
//       <DoctorPageTable
//         doctors={doctors || []}
//         departments={departments || []}
//         loading={loading}
//         error={error}
//       />
//     </div>
//   );
// }


// "use client";

// import ReactPaginate from "react-paginate";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { doctorList } from "@/redux/slice/doctorSlice";
// import { departmentList } from "@/redux/slice/departmentSlice";
// import DoctorPageHeader from "./doctorPageHeader";
// import DoctorPageTable from "./doctorPageTable";
// // reuse the dashboard filter component for consistency
// import FilterBar from "../adminDashboard/filterBar";

// export default function DoctorListLayout() {
//   const dispatch = useDispatch();

//   const {
//     data: doctors,
//     filteredDoctorsPage,
//     loading,
//     error,
//     filterLoadingPage,
//     filterErrorPage,
//     page,
//     totalPages,
//   } = useSelector((state) => state.doctor);

//   const { data: departments } = useSelector((state) => state.department);

//   useEffect(() => {
//     dispatch(doctorList({ page: 1, limit: 10 }));
//     dispatch(departmentList());
//   }, [dispatch]);

//   const handlePageChange = (event) => {
//     const selectedPage = event.selected + 1;
//     dispatch(doctorList({ page: selectedPage, limit: 10 }));
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <>
//       <DoctorPageHeader />
//       <FilterBar doctors={doctors || []} />

//       <DoctorPageTable
//         doctors={(filteredDoctorsPage !== null ? filteredDoctorsPage : doctors) || []}
//         departments={departments || []}
//         loading={filteredDoctorsPage !== null ? filterLoadingPage : loading}
//         error={filteredDoctorsPage !== null ? filterErrorPage : error}
//       />

//       <div className={`flex justify-center mt-10 transition-opacity duration-300 ${loading ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
//         {totalPages > 1 && (
//           <ReactPaginate
//             breakLabel="..."
//             nextLabel="›"
//             previousLabel="‹"
//             onPageChange={handlePageChange}
//             pageRangeDisplayed={3}
//             pageCount={totalPages || 1}
//             forcePage={page - 1}
//             containerClassName="flex items-center gap-2"
//             pageClassName="list-none"
//             pageLinkClassName="px-4 py-2 text-sm font-medium text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-slate-600 transition cursor-pointer"
//             previousClassName="list-none"
//             previousLinkClassName="px-4 py-2 text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
//             nextClassName="list-none"
//             nextLinkClassName="px-4 py-2 text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
//             activeClassName="active" 
//             activeLinkClassName="!bg-indigo-600 !border-indigo-600 !text-white font-bold"
//             disabledClassName="opacity-40 cursor-not-allowed"
//             breakClassName="text-white px-2"
//           />
//         )}
//       </div>
//     </>
//   );
// }










"use client";

import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { doctorList, deleteDoctor } from "@/redux/slice/doctorSlice";
import { departmentList } from "@/redux/slice/departmentSlice";

import DoctorPageHeader from "./doctorPageHeader";
import DoctorPageTable from "./doctorPageTable";
import FilterBar from "../adminDashboard/filterBar";

import DeleteModal from "./modals/deleteModal";
import AddDoctorModalLayout from "../modals/addDoctorModalLayout";

export default function DoctorListLayout() {
  const dispatch = useDispatch();

  const {
    data: doctors,
    filteredDoctorsPage,
    loading,
    error,
    filterLoadingPage,
    filterErrorPage,
    page,
    totalPages,
    limit,
  } = useSelector((state) => state.doctor);

  const { data: departments } = useSelector((state) => state.department);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    dispatch(doctorList({ page: 1, limit: 10 }));
    dispatch(departmentList());
  }, [dispatch]);

  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    dispatch(doctorList({ page: selectedPage, limit: 10 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openEditModal = (doctor) => {
    setSelectedDoctor(doctor);
    setEditOpen(true);
  };

  const openDeleteModal = (doctor) => {
    setSelectedDoctor(doctor);
    setDeleteOpen(true);
  };

  return (
    <>
      <DoctorPageHeader />

      <FilterBar doctors={doctors || []} />

      <DoctorPageTable
        doctors={
          (filteredDoctorsPage !== null ? filteredDoctorsPage : doctors) || []
        }
        departments={departments || []}
        loading={filteredDoctorsPage !== null ? filterLoadingPage : loading}
        error={filteredDoctorsPage !== null ? filterErrorPage : error}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
      />

      {/* PAGINATION */}
      <div
        className={`flex justify-center mt-10 transition-opacity duration-300 ${
          loading ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        {totalPages > 1 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="›"
            previousLabel="‹"
            onPageChange={handlePageChange}
            pageRangeDisplayed={3}
            pageCount={totalPages || 1}
            forcePage={page - 1}
            containerClassName="flex items-center gap-2"
            pageClassName="list-none"
            pageLinkClassName="px-4 py-2 text-sm font-medium text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-slate-600 transition cursor-pointer"
            previousClassName="list-none"
            previousLinkClassName="px-4 py-2 text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
            nextClassName="list-none"
            nextLinkClassName="px-4 py-2 text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
            activeClassName="active"
            activeLinkClassName="!bg-indigo-600 !border-indigo-600 !text-white font-bold"
            disabledClassName="opacity-40 cursor-not-allowed"
            breakClassName="text-white px-2"
          />
        )}
      </div>

      {/* EDIT MODAL */}
      <AddDoctorModalLayout
        open={editOpen}
        doctor={selectedDoctor}
        departmentId={selectedDoctor?.departmentId}
        title="Edit Doctor"
        description="Update practitioner details."
        onClose={async () => {
          await dispatch(doctorList({ page, limit })).unwrap();
          setEditOpen(false);
        }}
      />

      {/* DELETE MODAL */}
      <DeleteModal
        isOpen={deleteOpen}
        name={selectedDoctor?.name}
        onClose={() => setDeleteOpen(false)}
        onConfirm={async () => {
          await dispatch(deleteDoctor(selectedDoctor._id)).unwrap();
          await dispatch(doctorList({ page, limit })).unwrap();
          setDeleteOpen(false);
        }}
      />
    </>
  );
}