"use client";

import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Search as LucideSearch } from "lucide-react";

interface Department {
  _id: string;
  name: string;
  specialization?: string;
  departmentId?: string;
}

interface DepartmentFilterProps {
  departments: Department[];
  onFilter: (filteredDepartments: Department[]) => void;
}

export default function DepartmentFilter({
  departments = [],
  onFilter,
}: DepartmentFilterProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleFilter = (value: string) => {
    setInputValue(value);

    if (!value) {
      onFilter(departments);
      return;
    }

    const filtered = departments.filter((dept) =>
      dept.name.toLowerCase().includes(value.toLowerCase()),
    );

    onFilter(filtered);
  };

  return (
    <div
      className="relative bg-white/60 backdrop-blur-2xl
      border border-white/40
      rounded-[2rem]
      p-6
      shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
        <div className="relative">
          <div className="relative bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4">
            <Autocomplete<Department>
              options={departments}
              inputValue={inputValue}
              disableClearable={false}
              clearOnEscape
              onInputChange={(event, newInputValue, reason) => {
                if (reason === "input") {
                  handleFilter(newInputValue);
                }

                if (reason === "clear") {
                  setInputValue("");
                  onFilter(departments);
                }
              }}
              getOptionLabel={(option: Department) => option?.name || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Search Department..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleFilter(inputValue);
                    }
                  }}
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                    endAdornment: <>{params.InputProps.endAdornment}</>,
                  }}
                />
              )}
            />

            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <LucideSearch className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
