"use client";

import { Autocomplete, TextField } from "@mui/material";
import { LucideSearch } from "lucide-react";
import { useState } from "react";

export default function DoctorFilters({ departments }) {
  const [doctors] = useState([
    "Dr. Alipta Ghosh",
    "Dr. Ananya Chatterjee",
    "Dr. Sagnik",
    "Dr. Riya Das",
    "Dr. Arjun Sen",
  ]);

  return (
    <div
      className="relative bg-white/60 backdrop-blur-2xl 
      border border-white/40 
      rounded-[2rem] 
      p-6 
      shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)]
      mb-8"
    >
      {/* Changed to grid-cols-3 for a cleaner look with 2 inputs + 1 button */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Search Doctor - Autocomplete */}
        <div className="relative group">
          <div className="relative bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white">
            <Autocomplete
              disablePortal={false}
              options={doctors}
              sx={{ 
                width: "100%",
                "& .MuiInputBase-root": { padding: 0 } 
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Search doctor by name..."
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ shrink: false }}
                  className="text-slate-900 font-medium"
                />
              )}
            />

            {/* Search icon */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <LucideSearch className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 2. Department Filter */}
        <div className="relative">
          <select 
            className="w-full bg-slate-100/80 rounded-2xl py-4 px-5 font-bold text-slate-600 focus:ring-2 focus:ring-indigo-500/20 transition cursor-pointer appearance-none bg-no-repeat bg-right pr-10 outline-none hover:bg-slate-200/50"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%23475569%27 d=%27M6 9L1 4h10z%27/%3E%3C/svg%3E")',
              backgroundPosition: 'right 1.25rem center',
              backgroundSize: '1.2em 1.2em',
            }}
          >
            <option>All Departments</option>
            {departments.map((dept) => (
              <option key={dept._id} value={dept._id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Search Button */}
        <button
          className="bg-gradient-to-r from-indigo-600 to-indigo-700 
          text-white font-black uppercase tracking-wider rounded-2xl py-3.5
          hover:shadow-2xl hover:shadow-indigo-400/40 
          hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          Search Database
        </button>
      </div>
    </div>
  );
}