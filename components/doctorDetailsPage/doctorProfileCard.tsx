// "use client";

// export default function DoctorProfileCard() {

//   const doctor = {
//     name: "Dr. John Doe",
//     specialization: "Cardiology",
//     department: "Cardiology",
//     email: "john@example.com",
//     phone: "+91 9876543210",
//     experience: "10 Years",
//     status: "Active"
//   };

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

//       <div className="flex flex-col md:flex-row gap-8">

//         <div className="flex flex-col items-center">
//           <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
//             JD
//           </div>

//           <span className="mt-4 px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
//             {doctor.status}
//           </span>
//         </div>

//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">

//           <div>
//             <p className="text-sm text-slate-500">Doctor Name</p>
//             <p className="font-semibold text-slate-800">{doctor.name}</p>
//           </div>

//           <div>
//             <p className="text-sm text-slate-500">Specialization</p>
//             <p className="font-semibold text-slate-800">{doctor.specialization}</p>
//           </div>

//           <div>
//             <p className="text-sm text-slate-500">Department</p>
//             <p className="font-semibold text-slate-800">{doctor.department}</p>
//           </div>

//           <div>
//             <p className="text-sm text-slate-500">Experience</p>
//             <p className="font-semibold text-slate-800">{doctor.experience}</p>
//           </div>

//           <div>
//             <p className="text-sm text-slate-500">Email</p>
//             <p className="font-semibold text-slate-800">{doctor.email}</p>
//           </div>

//           <div>
//             <p className="text-sm text-slate-500">Phone</p>
//             <p className="font-semibold text-slate-800">{doctor.phone}</p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }




export default function DoctorProfileCard() {
  const doctor = {
    name: "Dr. John Doe",
    specialization: "Cardiology",
    department: "Cardiology",
    email: "john@example.com",
    phone: "+91 9876543210",
    experience: "10 Years",
    status: "Active"
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-8 sm:p-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Profile Image Section */}
        <div className="relative group mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[3rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-[3rem] bg-slate-100 flex items-center justify-center text-5xl font-black text-white bg-gradient-to-br from-indigo-500 to-purple-600 shadow-inner border-4 border-white">
            JD
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-slate-50">
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {doctor.status}
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            {[
              { label: "Full Name", value: doctor.name, icon: "👤" },
              { label: "Specialization", value: doctor.specialization, icon: "🩺" },
              { label: "Department", value: doctor.department, icon: "🏢" },
              { label: "Experience", value: doctor.experience, icon: "⏳" },
              { label: "Email Address", value: doctor.email, icon: "✉️" },
              { label: "Phone Number", value: doctor.phone, icon: "📞" },
            ].map((item, i) => (
              <div key={i} className="space-y-1 group">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">{item.label}</p>
                <p className="text-slate-800 font-bold text-lg group-hover:text-indigo-600 transition-colors">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}