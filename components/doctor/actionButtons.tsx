// "use client";

// import Link from "next/link";

// export default function ActionButtons({ id }) {
//   return (
//     <div className="flex gap-3 justify-end">
//       <Link
//         href={`/admin/doctors/update/${id}`}
//         className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-700/40 text-blue-200 hover:bg-blue-500 hover:text-white transition-all duration-300"
//       >
//         Update
//       </Link>

//       <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-red-600/30 text-red-300 hover:bg-red-600 hover:text-white transition-all duration-300">
//         Delete
//       </button>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Pencil, Trash2, ExternalLink } from "lucide-react";
// import DeleteModal from "./modals/deleteModal";

// export default function ActionButtons({ doctorId, doctorName }) {
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-end gap-3">
//       {/* Edit Button */}
//       <Link
//         href={`/admin/doctors/update/${doctorId}`}
//         className="group w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
//       >
//         <Pencil size={18} strokeWidth={2.5} />
//       </Link>

//       {/* Delete Button */}
//       <button 
//         onClick={() => setIsDeleteModalOpen(true)}
//         className="group w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 transition-all duration-300 hover:bg-rose-500 hover:text-white hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] cursor-pointer"
//       >
//         <Trash2 size={18} strokeWidth={2.5} />
//       </button>

//       {/* View Button */}
//       <Link
//         href={`/admin/doctors/${doctorId}`}
//         className="group w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] cursor-pointer"
//       >
//         <ExternalLink size={18} strokeWidth={2.5} />
//       </Link>

//       {/* The Premium Modal */}
//       {isDeleteModalOpen && (
//         <DeleteModal 
//           isOpen={isDeleteModalOpen} 
//           onClose={() => setIsDeleteModalOpen(false)} 
//           onConfirm={() => {
//             console.log("Deleted:", doctorId);
//             setIsDeleteModalOpen(false);
//           }}
//           name={doctorName}
//         />
//       )}
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Pencil, Trash2, ExternalLink } from "lucide-react";
// import DeleteModal from "./modals/deleteModal";
// import { useDispatch } from "react-redux";
// import { deleteDoctor } from "@/redux/slice/doctorSlice";

// export default function ActionButtons({ doctorId, doctorName }) {
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const dispatch = useDispatch();
// /*   useEffect(()=>{
//     dispatch(deleteDoctor(doctorId))
//   },[]) */

//   return (
//     <div className="flex items-center justify-end gap-3">
      
//       {/* Edit Button */}
//       <Link
//         href={`/admin/doctors/update/${doctorId}`}
//         className="group relative w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
//       >
//         <Pencil size={18} strokeWidth={2.5} />
//         {/* Tooltip */}
//         <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg font-bold shadow-xl z-50 pointer-events-none">
//           EDIT
//         </span>
//       </Link>

//       {/* Delete Button */}
//       <button 
//         onClick={() => setIsDeleteModalOpen(true)}
//         className="group relative w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 transition-all duration-300 hover:bg-rose-500 hover:text-white hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] cursor-pointer"
//       >
//         <Trash2 size={18} strokeWidth={2.5} />
//         {/* Tooltip */}
//         <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg font-bold shadow-xl z-50 pointer-events-none">
//           DELETE
//         </span>
//       </button>

//       {/* View Button */}
//       <Link
//         href={`/admin/doctors/${doctorId}`}
//         className="group relative w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] cursor-pointer"
//       >
//         <ExternalLink size={18} strokeWidth={2.5} />
//         {/* Tooltip */}
//         <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg font-bold shadow-xl z-50 pointer-events-none">
//           VIEW
//         </span>
//       </Link>

//       {/* Premium Modal */}
//       {isDeleteModalOpen && (
//         <DeleteModal 
//           isOpen={isDeleteModalOpen} 
//           onClose={() => setIsDeleteModalOpen(false)} 
//           onConfirm={() => {
//             console.log("Deleted:", doctorId);
//             dispatch(deleteDoctor(doctorId))
//             setIsDeleteModalOpen(false);
//           }}
//           name={doctorName}
//         />
//       )}
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Pencil, Trash2, ExternalLink } from "lucide-react";
// import DeleteModal from "./modals/deleteModal";
// import AddDoctorModalLayout from "../adminDashboard/modals/addDoctorModalLayout";
// import { useDispatch } from "react-redux";
// import { deleteDoctor } from "@/redux/slice/doctorSlice";

// export default function ActionButtons({ doctor }) {
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const dispatch = useDispatch();

//   // Scoped Tooltip Component
//   const Tooltip = ({ text, groupName }) => (
//     <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
//                    pointer-events-none opacity-0 transition-all duration-200 
//                    bg-slate-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg 
//                    font-bold shadow-xl z-[100] whitespace-nowrap translate-y-2
//                    ${groupName === 'edit' ? 'group-hover/edit:opacity-100 group-hover/edit:translate-y-0' : ''}
//                    ${groupName === 'delete' ? 'group-hover/delete:opacity-100 group-hover/delete:translate-y-0' : ''}
//                    ${groupName === 'view' ? 'group-hover/view:opacity-100 group-hover/view:translate-y-0' : ''}
//                    `}>
//       {text}
//       <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
//     </span>
//   );

//   return (
//     <div className="flex items-center justify-end gap-3 overflow-visible">
      
//       {/* Edit Button - Group Scoped to /edit */}
//       <button
//         onClick={() => setIsEditModalOpen(true)}
//         className="group/edit relative w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
//       >
//         <Pencil size={18} strokeWidth={2.5} />
//         <Tooltip text="EDIT DOCTOR" groupName="edit" />
//       </button>

//       {/* Delete Button - Group Scoped to /delete */}
//       <button
//         onClick={() => setIsDeleteModalOpen(true)}
//         className="group/delete relative w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 transition-all duration-300 hover:bg-rose-500 hover:text-white hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] cursor-pointer"
//       >
//         <Trash2 size={18} strokeWidth={2.5} />
//         <Tooltip text="DELETE DOCTOR" groupName="delete" />
//       </button>

//       {/* View Button - Group Scoped to /view */}
//       <a
//         className="group/view relative w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] cursor-pointer"
//       >
//         <ExternalLink size={18} strokeWidth={2.5} />
//         <Tooltip text="VIEW PROFILE" groupName="view" />
//       </a>

//       {/* Modals with Portal support */}
//       <AddDoctorModalLayout
//         open={isEditModalOpen}
//         onClose={() => setIsEditModalOpen(false)}
//         title="Edit Doctor"
//         description="Update practitioner details and schedules."
//         departmentId={doctor.departmentId}
//         doctorData={doctor}
//       />

//       {isDeleteModalOpen && (
//         <DeleteModal
//           isOpen={isDeleteModalOpen}
//           onClose={() => setIsDeleteModalOpen(false)}
//           onConfirm={() => {
//             dispatch(deleteDoctor(doctor._id));
//             setIsDeleteModalOpen(false);
//           }}
//           name={doctor.name}
//         />
//       )}
//     </div>
//   );
// }






// "use client";

// import { useState } from "react";
// import { Pencil, Trash2, ExternalLink } from "lucide-react";
// import { useDispatch } from "react-redux";
// import DeleteModal from "./modals/deleteModal";
// import AddDoctorModalLayout from "../modals/addDoctorModalLayout";
// import { deleteDoctor, doctorList } from "@/redux/slice/doctorSlice";
// import { store } from "@/redux/store/store";

// export default function ActionButtons({ doctor }) {
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const dispatch = useDispatch();

//   const Tooltip = ({ text, groupName }) => (
//     <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
//                    hidden md:block pointer-events-none opacity-0 transition-all duration-200 
//                    bg-slate-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg 
//                    font-bold shadow-xl z-[100] whitespace-nowrap translate-y-2
//                    ${groupName === 'edit' ? 'group-hover/edit:opacity-100 group-hover/edit:translate-y-0' : ''}
//                    ${groupName === 'delete' ? 'group-hover/delete:opacity-100 group-hover/delete:translate-y-0' : ''}
//                    ${groupName === 'view' ? 'group-hover/view:opacity-100 group-hover/view:translate-y-0' : ''}
//                    `}>
//       {text}
//       <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
//     </span>
//   );

//   return (
//     <div className="flex items-center gap-2 md:gap-3 justify-end">
//       {/* Edit Button */}
//       <button
//         onClick={() => setIsEditModalOpen(true)}
//         className="group/edit relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-sm cursor-pointer"
//       >
//         <Pencil className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
//         <Tooltip text="EDIT DOCTOR" groupName="edit" />
//       </button>

//       {/* Delete Button */}
//       <button
//         onClick={() => setIsDeleteModalOpen(true)}
//         className="group/delete relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm cursor-pointer"
//       >
//         <Trash2 className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
//         <Tooltip text="DELETE DOCTOR" groupName="delete" />
//       </button>

//       {/* View Button */}
//       <a
//         href={`/admin/doctors/${doctor._id}`}
//         className="group/view relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm cursor-pointer"
//       >
//         <ExternalLink className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
//         <Tooltip text="VIEW PROFILE" groupName="view" />
//       </a>

//       {/*Modals */}
//       {/*Modals */}
// <AddDoctorModalLayout
//   open={isEditModalOpen}
//   onClose={async () => {
//     try {
//       const { page, limit } = store.getState().doctor; // get current page from Redux
//       await dispatch(doctorList({ page, limit })).unwrap();
//       setIsEditModalOpen(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }}
//   title="Edit Doctor"
//   description="Update practitioner details."
//   departmentId={doctor.departmentId}
//   doctor={doctor}
// />

//       <DeleteModal
//   isOpen={isDeleteModalOpen}
//   onClose={() => setIsDeleteModalOpen(false)}
//   onConfirm={async () => {
//     try {
//       await dispatch(deleteDoctor(doctor._id)).unwrap();
//       const { page, limit } = store.getState().doctor;
//       await dispatch(doctorList({ page, limit })).unwrap();
//       setIsDeleteModalOpen(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }}
//   name={doctor.name}
// />
//     </div>
//   );
// }



















"use client";

import { Pencil, Trash2, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ActionButtons({ doctor, onEdit, onDelete }) {
    const router =  useRouter()

  const Tooltip = ({ text, groupName }) => (
    <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
                   hidden md:block pointer-events-none opacity-0 transition-all duration-200 
                   bg-slate-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg 
                   font-bold shadow-xl z-[100] whitespace-nowrap translate-y-2
                   ${groupName === 'edit' ? 'group-hover/edit:opacity-100 group-hover/edit:translate-y-0' : ''}
                   ${groupName === 'delete' ? 'group-hover/delete:opacity-100 group-hover/delete:translate-y-0' : ''}
                   ${groupName === 'view' ? 'group-hover/view:opacity-100 group-hover/view:translate-y-0' : ''}
                   `}>
      {text}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
    </span>
  );

  return (
    <div className="flex items-center gap-2 md:gap-3 justify-end">

      {/* Edit Button */}
      <button
        onClick={() => onEdit(doctor)}
        className="group/edit relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-sm cursor-pointer"
      >
        <Pencil className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
        <Tooltip text="EDIT DOCTOR" groupName="edit" />
      </button>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(doctor)}
        className="group/delete relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm cursor-pointer"
      >
        <Trash2 className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
        <Tooltip text="DELETE DOCTOR" groupName="delete" />
      </button>

      {/* View Button */}
      <button
        className="group/view relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm cursor-pointer" onClick={()=> router.push(`/pages/doctorDetails/${doctor._id}`)}
      >
        <ExternalLink className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
        <Tooltip text="VIEW PROFILE" groupName="view" />
      </button>

    </div>
  );
}