"use client";

import { useEffect, useMemo } from "react";
import DoctorDetailsHeader from "./doctorDetailsHeader";
import DoctorProfileCard from "./doctorProfileCard";
import DoctorStats from "./doctorStats";
import SchedulePreview from "./shedulePreview";
import AppointmentSection from "./appointmentSection";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";

import { doctorDetails } from "@/redux/slice/doctorSlice/doctorSlice";
import { departmentList } from "@/redux/slice/departmentSlice/departmentSlice";
import { appointmentList } from "@/redux/slice/appointmentSlice/appointmentSlice";

import { RootState, AppDispatch } from "@/types/redux";
import { Doctor, Department, Appointment } from "@/types/api";
import { AppointmentDisplay } from "@/types/components";

// Type guard to check if a value is Department
function isDepartment(
  value: string | Department | undefined,
): value is Department {
  return typeof value === "object" && value !== null && "name" in value;
}

export default function DoctorDetailsLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();

  // Redux selectors
  const {
    doctorDetails: doctor,
    loading: doctorLoading,
    error: doctorError,
  } = useSelector((state: RootState) => state.doctor);

  const { data: departments } = useSelector(
    (state: RootState) => state.department,
  );

  const { data: appointments } = useSelector(
    (state: RootState) => state.appointment,
  );

  // Fetch data on mount
  useEffect(() => {
    if (id) dispatch(doctorDetails(id));
    dispatch(departmentList());
    dispatch(appointmentList());
  }, [dispatch, id]);

  // Resolve department name safely
  const departmentName: string | undefined = useMemo(() => {
    if (!doctor || !departments) return undefined;

    if (isDepartment(doctor.departmentId)) {
      return doctor.departmentId.name;
    }

    if (typeof doctor.departmentId === "string") {
      return departments.find(
        (dept: Department) => dept._id === doctor.departmentId,
      )?.name;
    }

    return undefined;
  }, [doctor, departments]);

  // Map appointments to AppointmentDisplay type safely
  const appointmentDisplay: AppointmentDisplay[] = useMemo(() => {
    if (!appointments || !doctor) return [];

    const doctorName = doctor.name ?? "Unknown";

    return appointments.map((a) => ({
      _id: a._id,
      patientId: a.userId,
      doctorId: a.doctorId,
      patient: a.userId, // TODO: Replace with actual patient name if available
      doctor: doctorName,
      date: a.date,
      time: a.time,
      status: a.status as "Pending" | "Accepted" | "Rejected",
    }));
  }, [appointments, doctor]);

  return (
    <div className="relative min-h-screen bg-[#0b0e19] overflow-hidden space-y-10">
      {/* Background Blurs */}
      <div className="fixed top-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto space-y-10">
        <DoctorDetailsHeader />

        <DoctorProfileCard
          doctor={doctor ?? null}
          departmentName={departmentName}
        />

        <DoctorStats />

        <SchedulePreview doctor={doctor ?? null} />

        <AppointmentSection appointments={appointmentDisplay} />
      </div>
    </div>
  );
}
