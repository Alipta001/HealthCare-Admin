"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";
import { Search as LucideSearch } from "lucide-react";

import useDebounce from "@/hooks/useDebounce";

import {
  departmentWiseDoctor,
  doctorList,
  setFilteredDoctors,
  clearFilter,
} from "@/redux/slice/doctorSlice/doctorSlice";
import { FilterBarProps } from "@/types/components";
import { Department } from "@/types/api";

export default function FilterBar({
  doctors = [],
  departments = [],
}: FilterBarProps) {
  const dispatch: any = useDispatch();

  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);
  const [departmentInput, setDepartmentInput] = useState("");
  const [doctorInput, setDoctorInput] = useState("");

  const debouncedDoctor = useDebounce(doctorInput, 500);
  const debouncedDepartment = useDebounce(departmentInput, 500);

  useEffect(() => {
    handleSearch();
  }, [debouncedDoctor, debouncedDepartment, selectedDepartment]);

  const handleSearch = async () => {
    const doctorName = debouncedDoctor.trim().toLowerCase();
    const deptName = debouncedDepartment.trim().toLowerCase();
    const deptId = selectedDepartment?._id;

    try {
      /* NO FILTER */

      if (!doctorName && !deptId && !deptName) {
        dispatch(clearFilter());

        dispatch(
          doctorList({
            page: 1,
            limit: 10,
            name: "",
          }),
        );

        return;
      }

      /* DEPARTMENT SELECTED */

      if (deptId) {
        const result = await dispatch(departmentWiseDoctor(deptId)).unwrap();

        let filtered = result;

        if (doctorName) {
          filtered = filtered.filter((doc: any) =>
            doc.name.toLowerCase().includes(doctorName),
          );
        }

        dispatch(setFilteredDoctors(filtered));
        return;
      }

      /* DEPARTMENT TYPED */

      if (deptName) {
        const matchedDept = departments.find((dept: any) =>
          dept.name.toLowerCase().includes(deptName),
        );

        if (matchedDept) {
          const result = await dispatch(
            departmentWiseDoctor(matchedDept._id),
          ).unwrap();

          let filtered = result;

          if (doctorName) {
            filtered = filtered.filter((doc: any) =>
              doc.name.toLowerCase().includes(doctorName),
            );
          }

          dispatch(setFilteredDoctors(filtered));
        }

        return;
      }

      /* DOCTOR NAME ONLY */

      if (doctorName) {
        dispatch(
          doctorList({
            page: 1,
            limit: 10,
            name: doctorName,
          }),
        );
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const handleReset = () => {
    setDoctorInput("");
    setDepartmentInput("");
    setSelectedDepartment(null);

    dispatch(clearFilter());

    dispatch(
      doctorList({
        page: 1,
        limit: 10,
        name: "",
      }),
    );
  };

  return (
    <div className="relative bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-6 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Doctor Search */}

        <div className="relative">
          <div className="relative bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4">
            <Autocomplete
              freeSolo
              options={doctors}
              inputValue={doctorInput}
              onInputChange={(event, newValue) =>
                setDoctorInput(newValue || "")
              }
              getOptionLabel={(option: any) =>
                typeof option === "string" ? option : option?.name || ""
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Search Doctor..."
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                  }}
                />
              )}
            />

            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <LucideSearch className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Department */}

        <Autocomplete
          options={departments}
          value={selectedDepartment}
          inputValue={departmentInput}
          onChange={(event, newValue) => setSelectedDepartment(newValue)}
          onInputChange={(event, newValue) =>
            setDepartmentInput(newValue || "")
          }
          getOptionLabel={(option: any) => option?.name || ""}
          isOptionEqualToValue={(option: any, value: any) =>
            option._id === value?._id
          }
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select Department"
              className="bg-slate-100/80 rounded-2xl"
            />
          )}
        />

        {/* Reset */}

        <button
          onClick={handleReset}
          className="bg-gradient-to-r from-indigo-600 to-indigo-700
          text-white font-bold rounded-2xl py-3.5
          hover:shadow-xl hover:shadow-indigo-300
          active:scale-95 transition-all duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
