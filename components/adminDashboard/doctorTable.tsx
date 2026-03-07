// import DoctorRow from "./doctorRow";

// export default function DoctorTable() {
//   const doctors = [
//     {
//       id: 1,
//       name: "Dr. Smith",
//       department: "Cardiology",
//       appointmentStatus: "Pending",
//     },
//     {
//       id: 2,
//       name: "Dr. John",
//       department: "Neurology",
//       appointmentStatus: "Pending",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow overflow-hidden">
//       <table className="w-full text-left">
//         <thead className="bg-gray-50 border-b">
//           <tr>
//             <th className="p-4">Doctor</th>
//             <th className="p-4">Department</th>
//             <th className="p-4">Appointment</th>
//             <th className="p-4 text-center">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {doctors.map((doctor) => (
//             <DoctorRow key={doctor.id} doctor={doctor} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import DoctorRow from "./doctorRow";
// export default function DoctorTable() {
//   const doctors = [
//     { id: 1, name: "Dr. Smith", department: "Cardiology", appointmentStatus: "Pending" },
//     { id: 2, name: "Dr. John", department: "Neurology", appointmentStatus: "Pending" },
//   ];

//   return (
//     <div className="bg-white/90 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-white/50 overflow-hidden">
//       <table className="w-full text-left">
//         <thead className="bg-slate-50/80 border-b border-slate-100">
//           <tr>
//             <th className="p-6 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black">Practitioner</th>
//             <th className="p-6 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black">Dept.</th>
//             <th className="p-6 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black text-center">Status</th>
//             <th className="p-6 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-slate-100">
//           {doctors.map((doc) => <DoctorRow key={doc.id} doctor={doc} />)}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// "use client"
// import { useDispatch, useSelector } from "react-redux";
// import DoctorRow from "./doctorRow";
// import { useEffect } from "react";
// import { doctorList } from "@/redux/slice/doctorSlice";
// import { departmentList } from "@/redux/slice/departmentSlice";

// export default function DoctorTable() {
// const dispatch = useDispatch()
//   const{
//     data:doctors,
//     loading,
//     error
//   } = useSelector((state) => state.doctor);

//   const { data: department } = useSelector((state) => state.department);
// useEffect(()=>{
//   dispatch(doctorList()),
//   dispatch(departmentList());
// },[])

//   /* const doctors = [
//     { id: 1, name: "Dr. Smith", department: "Cardiology", appointmentStatus: "Pending" },
//     { id: 2, name: "Dr. John", department: "Neurology", appointmentStatus: "Accepted" },
//     { id: 3, name: "Dr. Alice", department: "Orthopedic", appointmentStatus: "Cancelled" },
//   ];
//  */
//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full text-left min-w-[600px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
//         <thead className="bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
//           <tr>
//             <th className="p-6 text-xs uppercase tracking-[0.25em] text-slate-400 font-black">Practitioner</th>
//             <th className="p-6 text-xs uppercase tracking-[0.25em] text-slate-400 font-black">Department</th>
//             <th className="p-6 text-xs text-center uppercase tracking-[0.25em] text-slate-400 font-black">Specialization</th>
//             <th className="p-6 text-xs text-center uppercase tracking-[0.25em] text-slate-400 font-black">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-slate-100">
//           {doctors.map((doc) => (
//             <DoctorRow key={doc._id} doctor={doc} department = {department}/>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import DoctorRow from "./doctorRow";
// import { useEffect } from "react";
// import { doctorList } from "@/redux/slice/doctorSlice";
// import { departmentList } from "@/redux/slice/departmentSlice";
// import ReactPaginate from "react-paginate";

// export default function DoctorTable() {
//   const dispatch = useDispatch();

//   const {
//     data: doctors,
//     loading,
//     error,
//     page,
//     totalPages,
//   } = useSelector((state) => state.doctor);

//   const { data: department } = useSelector((state) => state.department);

//   useEffect(() => {
//     dispatch(doctorList({ page: 1, limit: 5 }));
//     dispatch(departmentList());
//   }, [dispatch]);

//   const handlePageClick = (event) => {
//     const selectedPage = event.selected + 1;
//     dispatch(doctorList({ page: selectedPage, limit: 5 }));
//   };

//   if (loading && (!doctors || doctors.length === 0)) {
//     return <div className="p-10 text-center text-slate-500">Loading practitioners...</div>;
//   }

//   if (error) {
//     return <div className="p-10 text-center text-red-500 underline">{error}</div>;
//   }

//   return (
//     <div className="w-full space-y-6">
//       <div className="overflow-x-auto">
//         <table className="w-full text-left min-w-[600px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
//           <thead className="bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
//             <tr>
//               <th className="p-6 text-xs uppercase tracking-[0.25em] text-slate-400 font-black">Practitioner</th>
//               <th className="p-6 text-xs uppercase tracking-[0.25em] text-slate-400 font-black">Department</th>
//               <th className="p-6 text-xs text-center uppercase tracking-[0.25em] text-slate-400 font-black">Specialization</th>
//               <th className="p-6 text-xs text-center uppercase tracking-[0.25em] text-slate-400 font-black">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-100">
//             {doctors && doctors.length > 0 ? (
//               doctors.map((doc) => (
//                 <DoctorRow key={doc._id} doctor={doc} department={department} />
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="p-10 text-center text-slate-400 italic">
//                   No doctors found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-8 pb-10">
//           <ReactPaginate
//             breakLabel="..."
//             nextLabel="›"
//             previousLabel="‹"
//             onPageChange={handlePageClick}
//             pageRangeDisplayed={3}
//             pageCount={totalPages || 1}

//             // Syncs the UI highlight with Redux state (0-indexed)
//             forcePage={page ? page - 1 : 0}

//             containerClassName="flex items-center gap-2"

//             // Individual Page Styles
//             pageClassName="list-none"
//             pageLinkClassName="px-4 py-2 text-sm font-medium text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-slate-600 transition cursor-pointer"

//             // Previous/Next Styles
//             previousClassName="list-none"
//             previousLinkClassName="px-4 py-2 text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
//             nextClassName="list-none"
//             nextLinkClassName="px-4 py-2 text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-indigo-500 transition cursor-pointer"

//             // Highlight logic - applied directly to the link for visibility
//             activeClassName="active"
//             activeLinkClassName="!bg-indigo-600 !border-indigo-600 !text-white font-bold"

//             disabledClassName="opacity-40 cursor-not-allowed"
//             breakClassName="text-slate-400 px-2"
//           />
//         </div>
//       )}
//     </div> 
//   );
// }

/**-------------------Claude-------------------------- */

// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import DoctorRow from "./doctorRow";
// import DoctorListSkeleton from "../layout/doctorListSkeleton";
// import { useEffect, useState } from "react";
// import { doctorList } from "@/redux/slice/doctorSlice";
// import { departmentList } from "@/redux/slice/departmentSlice";
// import ReactPaginate from "react-paginate";

// export default function DoctorTable() {
//   const dispatch: any = useDispatch();

//   // 1. Get Doctor State (including filter-related fields)
//   const {
//     data: doctors,
//     filteredDoctors,
//     loading,
//     error,
//     filterLoading,
//     filterError,
//     page,
//     totalPages,
//   } = useSelector((state: any) => state.doctor);

//   const { data: departmentData } = useSelector((state: any) => state.department);

//   // Frontend pagination state for filtered results
//   const [filterPage, setFilterPage] = useState(0);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     dispatch(doctorList({ page: 1, limit: 5 }));
//     dispatch(departmentList());
//   }, [dispatch]);

//   // Reset filter page when filter changes
//   useEffect(() => {
//     setFilterPage(0);
//   }, [filteredDoctors]);

//   const handlePageClick = (event: any) => {
//     const newPage = event.selected;
//     if (isFiltering) {
//       setFilterPage(newPage);
//     } else {
//       dispatch(doctorList({ page: newPage + 1, limit: 5 }));
//     }
//   };

//   const isFiltering = filteredDoctors !== null;
//   const doctorsToShow = isFiltering ? filteredDoctors : doctors;
//   const loadingToShow = isFiltering ? filterLoading : loading;
//   const errorToShow = isFiltering ? filterError : error;

//   // Calculate paginated data for filtered results
//   let paginatedDoctors = doctorsToShow;
//   let totalPagesForDisplay = isFiltering ? Math.ceil((filteredDoctors?.length || 0) / itemsPerPage) : totalPages;

//   if (isFiltering && filteredDoctors) {
//     const offset = filterPage * itemsPerPage;
//     paginatedDoctors = filteredDoctors.slice(offset, offset + itemsPerPage);
//   }

//   return (
//     <div className="w-full space-y-6">
//       <div className="overflow-x-auto">
//         <table className="w-full text-left min-w-[800px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-lg overflow-hidden">
//           <thead className="bg-slate-50 border-b border-slate-200">
//             <tr>
//               <th className="p-6 text-xs uppercase tracking-[0.2em] text-slate-400 font-black">Practitioner</th>
//               <th className="p-6 text-xs uppercase tracking-[0.2em] text-slate-400 font-black">Department</th>
//               <th className="p-6 text-xs text-center uppercase tracking-[0.2em] text-slate-400 font-black">Available Slot</th>
//               <th className="p-6 text-xs text-center uppercase tracking-[0.2em] text-slate-400 font-black">Actions</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-slate-100">
//             {(() => {
//               if (loadingToShow) {
//                 return Array.from({ length: 5 }).map((_, index) => (
//                   <DoctorListSkeleton key={`skeleton-${index}`} />
//                 ));
//               }

//               if (errorToShow) {
//                 return (
//                   <tr>
//                     <td colSpan={4} className="p-10 text-center text-red-500 font-bold italic">
//                       {errorToShow}
//                     </td>
//                   </tr>
//                 );
//               }

//               if (doctorsToShow && doctorsToShow.length === 0) {
//                 const message = isFiltering
//                   ? "No practitioners found for selected filter."
//                   : "No practitioners found.";
//                 return (
//                   <tr>
//                     <td colSpan={4} className="p-10 text-center text-slate-400 italic">
//                       {message}
//                     </td>
//                   </tr>
//                 );
//               }

//               return paginatedDoctors.map((doc: any) => (
//                 <DoctorRow 
//                   key={doc._id} 
//                   doctor={doc} 
//                   department={departmentData}
//                 />
//               ));
//             })()}
//           </tbody>
//         </table>
//       </div>

//       {!loading && !isFiltering && totalPages > 1 && (
//         <div className="flex justify-center mt-8 pb-10">
//           <ReactPaginate
//             breakLabel="..."
//             nextLabel="›"
//             previousLabel="‹"
//             onPageChange={handlePageClick}
//             pageCount={totalPages}
//             forcePage={page - 1}
//             containerClassName="flex items-center gap-2"
//             pageLinkClassName="px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition cursor-pointer"
//             activeLinkClassName="!bg-indigo-600 font-bold"
//             disabledClassName="opacity-40 cursor-not-allowed"
//           />
//         </div>
//       )}

//       {/* Pagination for filtered results */}
//       {isFiltering && totalPagesForDisplay > 1 && (
//         <div className="flex justify-center mt-8 pb-10">
//           <ReactPaginate
//             breakLabel="..."
//             nextLabel="›"
//             previousLabel="‹"
//             onPageChange={handlePageClick}
//             pageCount={totalPagesForDisplay}
//             forcePage={filterPage}
//             containerClassName="flex items-center gap-2"
//             pageLinkClassName="px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition cursor-pointer"
//             activeLinkClassName="!bg-indigo-600 font-bold"
//             disabledClassName="opacity-40 cursor-not-allowed"
//           />
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useSelector } from "react-redux";
import DoctorRow from "./doctorRow";
import DoctorListSkeleton from "../layout/doctorListSkeleton";

export default function DoctorTable({ doctors = [], loading }: any) {
  const { data: departmentData } = useSelector((state: any) => state.department);

  return (
    <table className="w-full text-left min-w-[800px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-lg overflow-hidden">
      <thead className="bg-slate-50 border-b border-slate-200">
        <tr>
          <th className="p-6 text-xs uppercase tracking-[0.2em] text-slate-400 font-black">Practitioner</th>
          <th className="p-6 text-xs uppercase tracking-[0.2em] text-slate-400 font-black">Department</th>
          <th className="p-6 text-xs text-center uppercase tracking-[0.2em] text-slate-400 font-black">Available Slot</th>
          <th className="p-6 text-xs text-center uppercase tracking-[0.2em] text-slate-400 font-black">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => <DoctorListSkeleton key={i} />)
        ) : doctors.length === 0 ? (
          <tr>
            <td colSpan={4} className="p-10 text-center text-slate-400 italic">No practitioners found</td>
          </tr>
        ) : (
          doctors.map((doc: any) => (
            <DoctorRow
              key={doc._id}
              doctor={doc}
              department={departmentData}
            />
          ))
        )}
      </tbody>
    </table>
  );
}