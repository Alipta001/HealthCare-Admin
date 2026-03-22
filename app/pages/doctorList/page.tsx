import DoctorListLayout from "@/components/doctor/doctorListLayout";
// Sidebar import removed - now handled globally in layout.js

export default async function DoctorPage() {
  return (
    /* The outer flex container and Sidebar are removed.
       The global layout now provides the background color and 
       the correct spacing (lg:ml-64) for the fixed sidebar.
    */
<>
      <DoctorListLayout />
</>

  );
}
