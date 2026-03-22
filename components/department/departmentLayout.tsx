"use client";

import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import DepartmentGrid from "@/components/department/departmentGrid";
import DepartmentModal from "@/components/modals/departmentModal";
import DepartmentFilter from "@/components/department/departmentFilter";

import { departmentList } from "@/redux/slice/departmentSlice/departmentSlice";
import { doctorList } from "@/redux/slice/doctorSlice/doctorSlice";
import Header from "../layout/header";

export default function DepartmentsLayout() {
  const dispatch: any = useDispatch();

  const [departmentModalOpen, setDepartmentModalOpen] = useState(false);
  const [filteredDepartments, setFilteredDepartments] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const [isFiltering, setIsFiltering] = useState(false);

  const { data, loading } = useSelector((state: any) => state.department);
  const doctors = useSelector((state: any) => state.doctor.data || []);

  /* fetch data */
  useEffect(() => {
    dispatch(departmentList());
    dispatch(
      doctorList({
        page: 1,
        limit: 10000,
        name: "",
      }),
    );
  }, [dispatch]);

  /* update filtered departments */
  useEffect(() => {
    setFilteredDepartments(data);
    setCurrentPage(0); // reset to first page when filter changes
  }, [data]);

  /* doctor count per department */
  const doctorCountByDept = useMemo(() => {
    if (!Array.isArray(doctors)) return {};
    return doctors.reduce((acc: any, doctor: any) => {
      const deptId = doctor.departmentId;
      if (!acc[deptId]) acc[deptId] = 0;
      acc[deptId]++;
      return acc;
    }, {});
  }, [doctors]);

  /* Pagination logic */
  const totalPages = Math.ceil(filteredDepartments.length / itemsPerPage);
  const paginatedDepartments = filteredDepartments.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <>
      <div className="space-y-8">
        <Header
          onOpenDoctorModal={() => {}}
          onOpenDepartmentModal={() => setDepartmentModalOpen(true)}
          title={"Departments"}
          showAddButton={true}
        />

        <DepartmentFilter
          departments={data}
          onFilter={(filtered) => {
            setFilteredDepartments(filtered);
            setCurrentPage(0);
            setIsFiltering(filtered.length !== data.length);
          }}
        />

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <DepartmentGrid
              departments={paginatedDepartments}
              doctorCountByDept={doctorCountByDept}
            />

            {/* PAGINATION: Only visible when not filtering and more than 1 page exists */}
            {!isFiltering && totalPages > 1 && (
              <div className="flex justify-center mt-10 pb-10">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="›"
                  previousLabel="‹"
                  onPageChange={handlePageChange}
                  pageCount={totalPages}
                  forcePage={currentPage}
                  containerClassName="flex items-center gap-2"
                  pageLinkClassName="px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-xl hover:bg-slate-600 cursor-pointer"
                  previousLinkClassName="px-4 py-2 text-white bg-slate-700 rounded-xl hover:bg-indigo-500 cursor-pointer"
                  nextLinkClassName="px-4 py-2 text-white bg-slate-700 rounded-xl hover:bg-indigo-500 cursor-pointer"
                  activeLinkClassName="!bg-indigo-600 font-bold"
                  disabledClassName="opacity-40 cursor-not-allowed"
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Correct modal state */}
      <DepartmentModal
        open={departmentModalOpen}
        onClose={() => setDepartmentModalOpen(false)}
      />
    </>
  );
}
