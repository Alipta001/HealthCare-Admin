"use client";

import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  doctorList,
  deleteDoctor,
} from "@/redux/slice/doctorSlice/doctorSlice";

import { departmentList } from "@/redux/slice/departmentSlice/departmentSlice";

import DoctorPageTable from "./doctorPageTable";
import DoctorFilters from "./doctorFilter";

import DeleteModal from "./modals/deleteModal";
import AddDoctorModalLayout from "../modals/addDoctorModalLayout";
import Header from "../layout/header";

export default function DoctorListLayout() {
  const dispatch: any = useDispatch();

  const {
    data: doctors,
    filteredDoctors,
    loading,
    error,
    page,
    totalPages,
    limit,
  } = useSelector((state: any) => state.doctor);

  const { data: departments } = useSelector((state: any) => state.department);

  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  /* INITIAL DATA LOAD */

  useEffect(() => {
    dispatch(
      doctorList({
        page: 1,
        limit: 10,
        name: "",
      }),
    );

    dispatch(departmentList());
  }, [dispatch]);

  /* PAGINATION */

  const handlePageChange = (event: any) => {
    const selectedPage = event.selected + 1;

    dispatch(
      doctorList({
        page: selectedPage,
        limit: 10,
        name: "",
      }),
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* MODAL HANDLERS */

  const openEditModal = (doctor: any) => {
    setSelectedDoctor(doctor);
    setEditOpen(true);
  };

  const openDeleteModal = (doctor: any) => {
    setSelectedDoctor(doctor);
    setDeleteOpen(true);
  };

  /* DOCTOR SOURCE */

  const displayDoctors = filteredDoctors ?? doctors;

  const isFiltering = filteredDoctors !== null;

  return (
    <>
      <div className="space-y-8">
        <Header
          onOpenDoctorModal={() => {}}
          onOpenDepartmentModal={() => {}}
          title={"Dashboard"}
          showAddButton={false}
        />

        <DoctorFilters departments={departments || []} />

        <DoctorPageTable
          doctors={displayDoctors || []}
          departments={departments || []}
          loading={loading}
          error={error}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
        />

        {/* PAGINATION (HIDDEN DURING FILTERING) */}

        {!isFiltering && totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel="›"
              previousLabel="‹"
              onPageChange={handlePageChange}
              pageRangeDisplayed={3}
              pageCount={totalPages || 1}
              forcePage={page - 1}
              containerClassName="flex items-center gap-2"
              pageClassName="list-none"
              pageLinkClassName="px-4 py-2 text-sm font-medium text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-slate-600 transition cursor-pointer"
              previousClassName="list-none"
              previousLinkClassName="px-4 py-2 text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
              nextClassName="list-none"
              nextLinkClassName="px-4 py-2 text-white bg-slate-700 border border-slate-600 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
              activeLinkClassName="!bg-indigo-600 !border-indigo-600 !text-white font-bold"
              disabledClassName="opacity-40 cursor-not-allowed"
              breakClassName="text-white px-2"
            />
          </div>
        )}

        {/* EDIT MODAL */}

        <AddDoctorModalLayout
          open={editOpen}
          doctor={selectedDoctor}
          departmentId={selectedDoctor?.departmentId}
          title="Edit Doctor"
          description="Update practitioner details."
          onClose={async () => {
            await dispatch(
              doctorList({
                page,
                limit,
                name: "",
              }),
            ).unwrap();

            setEditOpen(false);
          }}
        />

        {/* DELETE MODAL */}

        <DeleteModal
          isOpen={deleteOpen}
          name={selectedDoctor?.name}
          onClose={() => setDeleteOpen(false)}
          onConfirm={async () => {
            await dispatch(deleteDoctor(selectedDoctor._id)).unwrap();

            await dispatch(
              doctorList({
                page,
                limit,
                name: "",
              }),
            ).unwrap();

            setDeleteOpen(false);
          }}
        />
      </div>
    </>
  );
}
