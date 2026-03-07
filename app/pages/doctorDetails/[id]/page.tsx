
// import DoctorProfileCard from "@/components/doctorDetailsPage/doctorProfileCard";
// import DoctorStats from "@/components/doctorDetailsPage/doctorStats";
// import AppointmentSection from "@/components/doctorDetailsPage/appointmentSection";

// export default function DoctorDetailsPage() {
//   return (
//     <div className="relative space-y-8">

//       {/* Background Accent */}
//       <div className="absolute -top-16 -left-16 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

//       <div className="relative space-y-8">
//         <DoctorProfileCard />
//         <DoctorStats />
//         <AppointmentSection />
//       </div>

//     </div>
//   );
// }




// "use client";
// import DoctorProfileCard from "@/components/doctorDetailsPage/doctorProfileCard";
// import DoctorStats from "@/components/doctorDetailsPage/doctorStats";
// import AppointmentSection from "@/components/doctorDetailsPage/appointmentSection";
// import SchedulePreview from "@/components/doctorDetailsPage/shedulePreview";

// export default function DoctorDetailsPage() {
//   return (
//     <div className="relative min-h-screen bg-[#0b0e19] px-4 md:px-8 lg:px-12 py-8 lg:py-12 space-y-8 lg:space-y-12">
//       <div className="fixed top-0 right-0 w-full lg:w-[700px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto space-y-10">
//         <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
//           <div className="space-y-1">
//             <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight">Practitioner Portal</h1>
//             <p className="text-indigo-400/50 text-sm lg:text-base font-bold uppercase tracking-widest">v3.0 Administrative Suite</p>
//           </div>
//           <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-900/20">
//             Export Data
//           </button>
//         </header>

//         <DoctorProfileCard />

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
//           <div className="xl:col-span-1">
//             <DoctorStats />
//           </div>
//           <div className="xl:col-span-2">
//             <SchedulePreview />
//           </div>
//         </div>

//         <AppointmentSection />
//       </div>
//     </div>
//   );
// }






"use client";
import DoctorProfileCard from "@/components/doctorDetailsPage/doctorProfileCard";
import DoctorStats from "@/components/doctorDetailsPage/doctorStats";
import AppointmentSection from "@/components/doctorDetailsPage/appointmentSection";
import SchedulePreview from "@/components/doctorDetailsPage/shedulePreview";
import DoctorDetailsHeader from "@/components/doctorDetailsPage/doctorDetailsHeader";

export default function DoctorDetailsPage() {
  return (
    <div className="relative min-h-screen bg-[#0b0e19] overflow-hidden space-y-10">
      <div className="fixed top-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto space-y-10">

        <DoctorDetailsHeader />

        <DoctorProfileCard />

        <DoctorStats />

        <SchedulePreview />

        <AppointmentSection />

      </div>
    </div>
  );
}