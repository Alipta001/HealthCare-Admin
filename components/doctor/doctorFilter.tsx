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

export default function FilterBar({ doctors = [], departments = [] }) {
  const dispatch: any = useDispatch();

  const [selectedDepartment, setSelectedDepartment] = useState<any>(null);
  const [doctorInput, setDoctorInput] = useState("");

  const debouncedSearch = useDebounce(doctorInput, 500);

  useEffect(() => {
    handleSearch();
  }, [debouncedSearch, selectedDepartment]);

  const handleSearch = async () => {
    const deptId = selectedDepartment?._id;
    const name = debouncedSearch.trim().toLowerCase();

    try {
      /* CASE 1 : NO FILTER */

      if (!deptId && !name) {
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

      /* CASE 2 : NAME SEARCH */

      if (!deptId && name) {
        dispatch(
          doctorList({
            page: 1,
            limit: 10,
            name: name,
          }),
        );

        return;
      }

      /* CASE 3 : DEPARTMENT FILTER */

      if (deptId && !name) {
        const result = await dispatch(departmentWiseDoctor(deptId)).unwrap();

        dispatch(setFilteredDoctors(result));

        return;
      }

      /* CASE 4 : DEPARTMENT + NAME */

      if (deptId && name) {
        const result = await dispatch(departmentWiseDoctor(deptId)).unwrap();

        const filteredDoctors = result.filter((doc: any) =>
          doc.name.toLowerCase().includes(name),
        );

        dispatch(setFilteredDoctors(filteredDoctors));

        return;
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const handleReset = () => {
    setDoctorInput("");
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
    <div
      className="relative bg-white/60 backdrop-blur-2xl
      border border-white/40
      rounded-[2rem]
      p-6
      shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Doctor Search */}

        <div className="relative">
          <div className="relative bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4">
            <Autocomplete
              freeSolo
              options={doctors.map((doc: any) => doc.name)}
              inputValue={doctorInput}
              onInputChange={(event, newValue) =>
                setDoctorInput(newValue || "")
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
          onChange={(event, newValue) => setSelectedDepartment(newValue)}
          getOptionLabel={(option: any) => option?.name || ""}
          isOptionEqualToValue={(option: any, value: any) =>
            option._id === value._id
          }
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select Department"
              className="bg-slate-100/80 rounded-2xl"
            />
          )}
        />

        {/* Reset Button */}

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
