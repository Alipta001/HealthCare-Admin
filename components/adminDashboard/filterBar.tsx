// export default function FilterBar() {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4 items-center">

import { Autocomplete, TextField } from "@mui/material";
import { LucideSearch } from "lucide-react";

//       {/* Department Filter */}
//       <select className="border p-2 rounded-lg focus:outline-indigo-500">
//         <option>All Departments</option>
//         <option>Cardiology</option>
//         <option>Neurology</option>
//         <option>Orthopedic</option>
//       </select>

//       {/* Doctor Filter */}
//       <select className="border p-2 rounded-lg focus:outline-indigo-500">
//         <option>All Doctors</option>
//         <option>Dr. Smith</option>
//         <option>Dr. John</option>
//       </select>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search doctor..."
//         className="border p-2 rounded-lg flex-1 min-w-[200px] focus:outline-indigo-500"
//       />

//       <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
//         Search
//       </button>
//     </div>
//   );
// }

// export default function FilterBar() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white/70 backdrop-blur-xl p-5 rounded-[2rem] border border-white shadow-xl shadow-slate-200/40">
//       {/* Search Input */}
//       <div className="relative group col-span-1 md:col-span-1">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           className="w-full bg-slate-100/80 border-none rounded-2xl py-3.5 pl-12 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all font-medium placeholder:text-slate-400"
//         />
//         <span className="absolute left-4 top-4 opacity-40">🔍</span>
//       </div>

//       {/* Department Dropdown */}
//       <select className="bg-slate-100/80 border-none rounded-2xl py-3.5 px-4 font-bold text-slate-600 focus:ring-2 focus:ring-indigo-500/20 cursor-pointer">
//         <option>All Departments</option>
//         <option>Cardiology</option>
//         <option>Neurology</option>
//         <option>Orthopedic</option>
//       </select>

//       {/* Doctor Dropdown */}
//       <select className="bg-slate-100/80 border-none rounded-2xl py-3.5 px-4 font-bold text-slate-600 focus:ring-2 focus:ring-indigo-500/20 cursor-pointer">
//         <option>All Seniority</option>
//         <option>Senior Consultant</option>
//         <option>Resident Doctor</option>
//       </select>

//       {/* Search Action */}
//       <button className="bg-indigo-600 text-white font-bold rounded-2xl py-3.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95">
//         Search Database
//       </button>
//     </div>
//   );
// }

export default function FilterBar() {
  const doctors = ["Dr. Alipta Ghosh", "Dr. Ananya Chatterjee", "Dr. Sagnik", "Dr. Riya Das", "Dr. Arjun Sen"];
  return (
    <div
      className="relative bg-white/60 backdrop-blur-2xl 
      border border-white/40 
      rounded-[2rem] 
      p-6 
      shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Search */}
        <div className="relative group">
          {/* <input
            type="text"
            placeholder="Search doctor..."
            className="w-full bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4
            focus:ring-2 focus:ring-indigo-500/20
            focus:bg-white transition-all font-medium placeholder:text-slate-400"
          /> */}
          <div className="relative bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white">
        
        {/* Autocomplete fills the container */}
        <Autocomplete
           disablePortal={false}
          options={doctors}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              placeholder="Search doctor..."
              InputProps={{
                ...params.InputProps,
                disableUnderline: true, // remove MUI underline
              }}
              InputLabelProps={{ shrink: false }}
              className="text-slate-900 font-medium placeholder:text-slate-400"
            />
          )}
        />

        {/* Search icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <LucideSearch className="w-5 h-5" />
        </div>
      </div>
        </div>

        {/* Department */}
        <select className="bg-slate-100/80 rounded-2xl py-3.5 px-4 font-semibold text-slate-600 focus:ring-2 focus:ring-indigo-500/20 transition">
          <option>All Departments</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Orthopedic</option>
        </select>

        {/* Seniority */}
        <select className="bg-slate-100/80 rounded-2xl py-3.5 px-4 font-semibold text-slate-600 focus:ring-2 focus:ring-indigo-500/20 transition">
          <option>All Levels</option>
          <option>Senior Consultant</option>
          <option>Resident Doctor</option>
        </select>

        {/* Action */}
        <button
          className="bg-gradient-to-r from-indigo-600 to-indigo-700 
          text-white font-bold rounded-2xl py-3.5
          hover:shadow-xl hover:shadow-indigo-300
          active:scale-95 transition-all duration-300"
        >
          Search Database
        </button>
      </div>
    </div>
  );
}
