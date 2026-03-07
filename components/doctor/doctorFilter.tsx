// "use client";

// import { departmentList } from "@/redux/slice/departmentSlice";
// import { clearFilter, departmentWiseDoctorPage } from "@/redux/slice/doctorSlice";
// import { Autocomplete, TextField } from "@mui/material";
// import { LucideSearch } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// export default function DoctorFilters({ departments }) {
//     const dispatch: any = useDispatch();

//   const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
//   const [selectedDepartment, setSelectedDepartment] = useState<any>(null);


//   useEffect(() => {
//     dispatch(departmentList());
//   }, [dispatch]);

//   const handleSearch = () => {
//     const deptId: string | undefined = selectedDepartment?._id;
//     const name: string | undefined = selectedDoctor?.name;

//     if (!deptId && !name) {
//       // no filters -> show full doctor list again
//       dispatch(clearFilter());
//       dispatch(doctorList({ page: 1, limit: 10 }));
//       return;
//     }

//     if (deptId) {
//       dispatch(departmentWiseDoctorPage(deptId))
//         .unwrap()
//         .then((result: any[]) => {
//           if (name) {
//             const filteredByName = result.filter((d: any) =>
//               d.name.toLowerCase().includes(name.toLowerCase())
//             );
//             dispatch(setFilteredDoctors(filteredByName));
//           }
//         })
//         .catch((e: any) => {
//           console.warn("filter failed", e);
//         });
//     } else if (name) {
//       const filteredByName = doctors.filter((d: any) =>
//         d.name.toLowerCase().includes(name.toLowerCase())
//       );
//       dispatch(setFilteredDoctors(filteredByName));
//     }
//   };

//   return (
//     <div
//       className="relative bg-white/60 backdrop-blur-2xl 
//       border border-white/40 
//       rounded-[2rem] 
//       p-6 
//       shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)]
//       mb-8"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         <div className="relative group">
//           <div className="relative bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white">
//             <Autocomplete
//               disablePortal={false}
//               options={doctors}
//               sx={{ 
//                 width: "100%",
//                 "& .MuiInputBase-root": { padding: 0 } 
//               }}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="standard"
//                   placeholder="Search doctor by name..."
//                   InputProps={{
//                     ...params.InputProps,
//                     disableUnderline: true,
//                   }}
//                   InputLabelProps={{ shrink: false }}
//                   className="text-slate-900 font-medium"
//                 />
//               )}
//             />

//             {/* Search icon */}
//             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//               <LucideSearch className="w-5 h-5" />
//             </div>
//           </div>
//         </div>

//         {/* Department Autocomplete */}
//         <Autocomplete
//           options={departments}
//           value={selectedDepartment}
//           onChange={(event, newValue) => setSelectedDepartment(newValue)}
//           getOptionLabel={(option) => option?.name || ""}
//           isOptionEqualToValue={(option, value) => option._id === value._id}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               placeholder="Select Department"
//               className="bg-slate-100/80 rounded-2xl"
//             />
//           )}
//         />

//         {/* 3. Search Button */}
//         <button
//          onClick={handleSearch}
//           className="bg-gradient-to-r from-indigo-600 to-indigo-700 
//           text-white font-black uppercase tracking-wider rounded-2xl py-3.5
//           hover:shadow-2xl hover:shadow-indigo-400/40 
//           hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
//         >
//           Search Database
//         </button>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { Autocomplete, TextField } from "@mui/material";
// import { LucideSearch } from "lucide-react";

// import {
//   clearFilter,
//   departmentWiseDoctorPage,
//   doctorList,
//   setFilteredDoctors,
// } from "@/redux/slice/doctorSlice";

// import { departmentList } from "@/redux/slice/departmentSlice";

// export default function DoctorFilters({ departments }: any) {
//   const dispatch: any = useDispatch();

//   const { data: doctors } = useSelector((state: any) => state.doctor);

//   const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
//   const [selectedDepartment, setSelectedDepartment] = useState<any>(null);

//   useEffect(() => {
//     dispatch(departmentList());
//   }, [dispatch]);

//   const handleSearch = () => {
//   const deptId = selectedDepartment?._id;
//   const name = selectedDoctor?.name;

//   if (!deptId && !name) {
//     dispatch(clearFilter());
//     dispatch(doctorList({ page: 1, limit: 10 }));
//     return;
//   }

//   if (deptId) {
//     dispatch(departmentWiseDoctorPage(deptId))
//       .unwrap()
//       .then((result: any[]) => {
//         if (name) {
//           const filteredByName = result.filter((d: any) =>
//             d.name.toLowerCase().includes(name.toLowerCase())
//           );
//           dispatch(setFilteredDoctors(filteredByName));
//         } else {
//           dispatch(setFilteredDoctors(result));
//         }
//       });
//   } else if (name) {
//     const filteredByName = doctors.filter((d: any) =>
//       d.name.toLowerCase().includes(name.toLowerCase())
//     );

//     dispatch(setFilteredDoctors(filteredByName));
//   }
// };

//   return (
//     <div
//       className="relative bg-white/60 backdrop-blur-2xl 
//       border border-white/40 
//       rounded-[2rem] 
//       p-6 
//       shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)]
//       mb-8"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* Doctor Name Autocomplete */}
//         <div className="relative group">
//           <div className="relative bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white">
            
//             <Autocomplete
//               disablePortal
//               options={doctors || []}
//               value={selectedDoctor}
//               onChange={(event, newValue) => setSelectedDoctor(newValue)}
//               getOptionLabel={(option) => option?.name || ""}
//               isOptionEqualToValue={(option, value) => option._id === value._id}
//               sx={{
//                 width: "100%",
//                 "& .MuiInputBase-root": { padding: 0 },
//               }}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="standard"
//                   placeholder="Search doctor by name..."
//                   InputProps={{
//                     ...params.InputProps,
//                     disableUnderline: true,
//                   }}
//                   InputLabelProps={{ shrink: false }}
//                   className="text-slate-900 font-medium"
//                 />
//               )}
//             />

//             {/* Search Icon */}
//             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//               <LucideSearch className="w-5 h-5" />
//             </div>
//           </div>
//         </div>

//         {/* Department Autocomplete */}
//         <Autocomplete
//           options={departments || []}
//           value={selectedDepartment}
//           onChange={(event, newValue) => setSelectedDepartment(newValue)}
//           getOptionLabel={(option) => option?.name || ""}
//           isOptionEqualToValue={(option, value) => option._id === value._id}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               placeholder="Select Department"
//               className="bg-slate-100/80 rounded-2xl"
//             />
//           )}
//         />

//         {/* Search Button */}
//         <button
//           onClick={handleSearch}
//           className="bg-gradient-to-r from-indigo-600 to-indigo-700 
//           text-white font-black uppercase tracking-wider rounded-2xl py-3.5
//           hover:shadow-2xl hover:shadow-indigo-400/40 
//           hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
//         >
//           Search Database
//         </button>

//       </div>
//     </div>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Autocomplete, TextField } from "@mui/material";
import { LucideSearch } from "lucide-react";

import {
  clearPageFilter,
  departmentWiseDoctorPage,
  doctorList,
  setFilteredDoctorsPage
} from "@/redux/slice/doctorSlice";

import { departmentList } from "@/redux/slice/departmentSlice";

export default function DoctorFilters({ departments }: any) {

  const dispatch: any = useDispatch();

  const { data: doctors } = useSelector((state: any) => state.doctor);

  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<any>(null);

  useEffect(() => {
    dispatch(departmentList());
  }, [dispatch]);



  const handleSearch = async () => {

    const deptId = selectedDepartment?._id;
    const name = selectedDoctor?.name?.toLowerCase();



    /* RESET FILTER */

    if (!deptId && !name) {
      dispatch(clearPageFilter());
      dispatch(doctorList({ page: 1, limit: 10 }));
      return;
    }



    /* DEPARTMENT FILTER */

    if (deptId) {

      try {

        const result = await dispatch(
          departmentWiseDoctorPage(deptId)
        ).unwrap();

        let filtered = result;

        if (name) {
          filtered = result.filter((d: any) =>
            d.name.toLowerCase().includes(name)
          );
        }

        dispatch(setFilteredDoctorsPage(filtered));

      } catch (error) {
        console.error(error);
      }

      return;
    }



    /* NAME FILTER */

    if (name) {

      const filteredByName = doctors.filter((d: any) =>
        d.name.toLowerCase().includes(name)
      );

      dispatch(setFilteredDoctorsPage(filteredByName));
    }

  };



  return (
    <div
      className="relative bg-white/60 backdrop-blur-2xl
      border border-white/40
      rounded-[2rem]
      p-6
      shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)]
      mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Doctor Name */}
        <div className="relative group">

          <div className="relative bg-slate-100/80 rounded-2xl py-3.5 pl-12 pr-4">

            <Autocomplete
              disablePortal
              options={doctors || []}
              value={selectedDoctor}
              onChange={(event, newValue) => setSelectedDoctor(newValue)}
              getOptionLabel={(option) => option?.name || ""}
              isOptionEqualToValue={(option, value) =>
                option._id === value._id
              }
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
                    disableUnderline: true
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
          options={departments || []}
          value={selectedDepartment}
          onChange={(event, newValue) => setSelectedDepartment(newValue)}
          getOptionLabel={(option) => option?.name || ""}
          isOptionEqualToValue={(option, value) =>
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



        {/* Search */}

        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-indigo-600 to-indigo-700
          text-white font-black uppercase tracking-wider rounded-2xl py-3.5
          hover:shadow-2xl hover:shadow-indigo-400/40
          hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          Search Database
        </button>

      </div>
    </div>
  );
}