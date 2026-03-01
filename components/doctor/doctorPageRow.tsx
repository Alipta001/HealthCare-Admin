// "use client";

// import { useRouter } from "next/navigation";
// import ActionButtons from "./actionButtons";

// export default function DoctorPageRow({ doctor }) {
//   const router = useRouter();

//   return (
//     <tr
//       onClick={() => router.push(`/admin/doctors/${doctor._id}`)}
//       className="group border-b border-slate-100 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white transition-all duration-300 cursor-pointer"
//     >
//       {/* Doctor */}
//       <td className="px-8 py-6">
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-20 blur-md group-hover:opacity-40 transition"></div>
//             <img
//               src="/images/login/profile-icon.png"
//               alt={doctor.name}
//               className="relative w-14 h-14 rounded-2xl object-cover shadow-md border border-white group-hover:scale-105 transition duration-300"
//             />
//           </div>
//           <div>
//             <p className="font-bold text-slate-800 tracking-tight">
//               {doctor.name}
//             </p>
//             <p className="text-xs text-slate-400 font-medium">
//               Senior Specialist
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* Department */}
//       <td className="px-8 py-6">
//         <span className="inline-flex px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
//           {doctor.department}
//         </span>
//       </td>

//       {/* Email */}
//       <td className="px-8 py-6 text-slate-500 font-medium">
//         {doctor.email}
//       </td>

//       {/* Experience */}
//       <td className="px-8 py-6">
//         <span className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-semibold">
//           {doctor.experience}
//         </span>
//       </td>

//       {/* Actions */}
//       <td
//         className="px-8 py-6"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <ActionButtons id={doctor._id} />
//       </td>
//     </tr>
//   );
// }




"use client";

import { departmentList } from "@/redux/slice/departmentSlice";
import ActionButtons from "./actionButtons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DoctorPageRow({ doctor }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: department } = useSelector((state) => state.department);

  useEffect(() => {
    dispatch(departmentList());
  }, [dispatch]);

  const departmentName =
    (department || []).find(
      (dept) => dept._id === doctor.departmentId
    )?.name || "Unknown";

  const firstSlot = doctor?.availableSlots?.[0];

  const formattedDate = firstSlot
    ? new Date(firstSlot.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "No Date";

  const formattedTime = firstSlot ? firstSlot.time : "No Time";

  return (
    <tr
      onClick={() => router.push(`/admin/doctors/${doctor._id}`)}
      className="border-b border-slate-200 hover:bg-slate-50 transition duration-200 cursor-pointer"
    >
      {/* Doctor */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src="/images/login/profile-icon.png"
            alt={doctor.name}
            className="w-12 h-12 rounded-xl border border-slate-200"
          />
          <div>
            <p className="text-sm font-semibold text-slate-800">
              {doctor.name}
            </p>
            <span className="text-xs text-slate-400">
              Senior Specialist
            </span>
          </div>
        </div>
      </td>

      {/* Department */}
      <td className="px-6 py-4">
        <span className="inline-flex px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
          {departmentName}
        </span>
      </td>

      {/* Next Available */}
      <td className="px-6 py-4">
        {firstSlot ? (
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold">
            <span>{formattedDate}</span>
            <div className="h-4 w-px bg-slate-300"></div>
            <span>{formattedTime}</span>
          </div>
        ) : (
          <span className="inline-flex px-3 py-1.5 rounded-lg bg-slate-100 text-slate-400 text-xs font-medium">
            No Slots Available
          </span>
        )}
      </td>

      {/* Actions */}
      <td
        className="px-6 py-4 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <ActionButtons id={doctor._id} />
      </td>
    </tr>
  );
}