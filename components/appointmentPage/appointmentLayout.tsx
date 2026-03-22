"use client";

import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import Header from "../layout/header";
import AppointmentStats from "./appointmentStats";
import AppointmentFilters from "./appointmentFilter";
import AppointmentTable from "./appointmentTable";

import { doctorDetails } from "@/redux/slice/doctorSlice/doctorSlice";
import {
  appointmentList,
  acceptedAppointments,
} from "@/redux/slice/appointmentSlice/appointmentSlice";
import { RootState } from "@/types/redux";

export default function AppointmentLayout() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Pending");
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch: any = useDispatch();

  const {
    data: appointments,
    loading: appointmentloading,
    error: appointmentError,
  } = useSelector((state: RootState) => state.appointment);

  const itemsPerPage = 5;

  /* store doctorId -> doctorName */
  const [doctorMap, setDoctorMap] = useState<Record<string, string>>({});

  //appointment list - load pending appointments on mount
  useEffect(() => {
    dispatch(appointmentList());
  }, [dispatch]);

  // Handle Pending button click
  const handlePendingClick = () => {
    setStatusFilter("Pending");
    setCurrentPage(0);
  };

  // Handle Accepted button click
  const handleAcceptedClick = () => {
    setStatusFilter("Accepted");
    setCurrentPage(0);
    dispatch(acceptedAppointments());
  };

  //search by name
  useEffect(() => {
    const fetchDoctors = async () => {
      if (!appointments?.length) return;

      try {
        const uniqueDoctorIds = [
          ...new Set(appointments.map((a: any) => a.doctorId)),
        ];

        const doctors = await Promise.all(
          uniqueDoctorIds.map((id) => dispatch(doctorDetails(id)).unwrap()),
        );

        const map: Record<string, string> = {};

        doctors.forEach((doc: any) => {
          map[doc._id] = doc.name;
        });

        setDoctorMap(map);
      } catch (err) {
        console.error("Doctor fetch error", err);
      }
    };

    fetchDoctors();
  }, [appointments, dispatch]);

  //filter appointment
  const filteredAppointments = useMemo(() => {
    if (!appointments) return [];

    return appointments
      .map((item: any) => {
        const isAcceptedData = item.name && !item.patient;

        return {
          _id: item._id,
          patientId: item.userId || item.patientId,
          doctorId: item.doctorId,
          patient: isAcceptedData
            ? item.name
            : item.patient || item.patientId || "Patient",
          doctor: doctorMap[item.doctorId] || "Loading...",
          date: item.date,
          time: item.time,
          // Map "Confirmed" status to "Accepted" for display consistency
          status:
            item.status === "Confirmed"
              ? "Accepted"
              : item.status || "Accepted",
        };
      })
      .filter((item: any) => {
        const searchMatch =
          item.patient?.toLowerCase().includes(search.toLowerCase()) ||
          item.doctor?.toLowerCase().includes(search.toLowerCase());

        const statusMatch = item.status === statusFilter;

        return searchMatch && statusMatch;
      });
  }, [appointments, doctorMap, search, statusFilter]);

  //pagination
  const offset = currentPage * itemsPerPage;

  const currentItems = filteredAppointments.slice(
    offset,
    offset + itemsPerPage,
  );

  const pageCount = Math.ceil(filteredAppointments.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0e19]">
      <div className="space-y-8">
        {/* Header */}
        <Header title={"Appointments"} />

        {/* Appointment Stats */}
        <AppointmentStats appointments={filteredAppointments} />

        {/* Filters */}
        <AppointmentFilters
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          onPendingClick={handlePendingClick}
          onAcceptedClick={handleAcceptedClick}
        />

        {/* Table */}
        <div className="w-full p-1 md:p-4">
          <AppointmentTable
            appointments={currentItems}
            statusFilter={statusFilter}
          />
        </div>

        {/* Pagination */}
        <ReactPaginate
          breakLabel="..."
          nextLabel="›"
          previousLabel="‹"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          containerClassName="flex justify-center items-center gap-2 mt-8 flex-wrap"
          pageLinkClassName="
            px-4 py-2 text-sm font-medium
            text-white bg-slate-700
            rounded-xl
            hover:bg-slate-600
            transition-all duration-200
            cursor-pointer
          "
          previousLinkClassName="
            px-4 py-2 text-white
            bg-slate-700
            rounded-xl
            hover:bg-indigo-500
            transition-all duration-200
            cursor-pointer
          "
          nextLinkClassName="
            px-4 py-2 text-white
            bg-slate-700
            rounded-xl
            hover:bg-indigo-500
            transition-all duration-200
            cursor-pointer
          "
          activeLinkClassName="
            !bg-indigo-600
            font-bold
            shadow-lg shadow-indigo-500/40
          "
          disabledClassName="opacity-40 cursor-not-allowed"
        />
      </div>
    </div>
  );
}
