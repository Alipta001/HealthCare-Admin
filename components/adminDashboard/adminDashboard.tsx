"use client";

import { useEffect, useState } from "react";

import StatsCards from "./statsCard";
import FilterBar from "./filterBar";
import DoctorTable from "./doctorTable";
import DepartmentModal from "../modals/departmentModal";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { doctorList } from "@/redux/slice/doctorSlice/doctorSlice";
import { departmentList } from "@/redux/slice/departmentSlice/departmentSlice";
import Header from "../layout/header";
import { RootState } from "@/types/redux";

export default function AdminDashboard() {
  const dispatch: any = useDispatch();
  const [departmentModalOpen, setDepartmentModalOpen] = useState(false);

  const {
    data: doctors,
    filteredDoctors,
    loading,
    filterLoading,
    filterError,
    page,
    totalPages,
    totalItems,
  } = useSelector((state: RootState) => state.doctor);
  const { data: departmentData } = useSelector(
    (state: RootState) => state.department,
  );

  useEffect(() => {
    dispatch(doctorList({ page: 1, limit: 10, name: "" }));
    dispatch(departmentList());
  }, [dispatch]);

  const isFiltering = filteredDoctors !== null;
  const doctorsToShow = isFiltering ? filteredDoctors : doctors;

  const handlePageChange = (event: { selected: number }) => {
    const selectedPage = event.selected + 1;
    dispatch(doctorList({ page: selectedPage, limit: 10, name: "" }));
  };

  return (
    <>
      <Header
        onOpenDoctorModal={() => {}}
        onOpenDepartmentModal={() => setDepartmentModalOpen(true)}
        title={"Dashboard"}
        showAddButton={true}
      />

      <div className="mt-8 space-y-6">
        <StatsCards totalItems={totalItems} departments={departmentData} />
        <FilterBar doctors={doctors || []} departments={departmentData} />

        <div className="rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <DoctorTable
              doctors={doctorsToShow || []}
              departments={departmentData}
              loading={isFiltering ? filterLoading : loading}
              errorMessage={filterError}
            />
          </div>
        </div>

        {/* PAGINATION: Only visible when not filtering and more than 1 page exists */}
        {!isFiltering && totalPages > 1 && (
          <div className="flex justify-center mt-10 pb-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel="›"
              previousLabel="‹"
              onPageChange={handlePageChange}
              pageCount={totalPages}
              forcePage={page - 1}
              containerClassName="flex items-center gap-2"
              pageLinkClassName="px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-xl hover:bg-slate-600 cursor-pointer"
              previousLinkClassName="px-4 py-2 text-white bg-slate-700 rounded-xl hover:bg-indigo-500 cursor-pointer"
              nextLinkClassName="px-4 py-2 text-white bg-slate-700 rounded-xl hover:bg-indigo-500 cursor-pointer"
              activeLinkClassName="!bg-indigo-600 font-bold"
              disabledClassName="opacity-40 cursor-not-allowed"
            />
          </div>
        )}
      </div>

      <DepartmentModal
        open={departmentModalOpen}
        onClose={() => setDepartmentModalOpen(false)}
      />
    </>
  );
}
