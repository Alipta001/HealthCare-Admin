"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addDoctor, updateDoctor } from "@/redux/slice/doctorSlice/doctorSlice";
import { useCallback, useEffect } from "react";
import { AppDispatch } from "@/typescript/redux";

/* Yup Schema */
const schema = yup.object().shape({
  name: yup.string().required("Doctor name is required"),
  specialization: yup.string().required("Specialization is required"),
  departmentId: yup.string().required("Department is required"),
  fees: yup
    .number()
    .typeError("Fees must be a number")
    .required("Fees is required")
    .positive("Fees must be positive"),

  startTime: yup.string().required("Start time required"),
  endTime: yup.string().required("End time required"),
  slotDuration: yup
    .number()
    .typeError("Slot duration must be number")
    .required("Slot duration required"),
});

interface DoctorModalFormProps {
  doctor?: any;
  departmentId?: string;
  departmentName?: string;
  onCancel?: () => void;
  onClose: () => void;
}

export default function DoctorModalForm({
  doctor,
  departmentId,
  departmentName,
  onCancel,
  onClose,
}: DoctorModalFormProps) {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      specialization: "",
      departmentId: departmentId || "",
      fees: 0,
      startTime: "",
      endTime: "",
      slotDuration: 30,
    },
  });

  useEffect(() => {
    if (doctor) {
      reset({
        name: doctor.name || "",
        specialization: doctor.specialization || "",
        fees: doctor.fees || "",
        departmentId: doctor.departmentId || "",
        startTime: doctor.schedule?.startTime || "",
        endTime: doctor.schedule?.endTime || "",
        slotDuration: doctor.schedule?.slotDuration || 30,
      });
    } else {
      reset({
        name: "",
        specialization: "",
        fees: 0,
        departmentId: departmentId || "",
        startTime: "",
        endTime: "",
        slotDuration: 30,
      });
    }
  }, [doctor, reset, departmentId]);

  const handleAllFormSubmit = useCallback(
    async (data: any) => {
      const schedule = {
        startTime: data.startTime,
        endTime: data.endTime,
        slotDuration: Number(data.slotDuration),
      };

      if (doctor) {
        const payload = {
          id: doctor._id,
          name: data.name,
          departmentId: data.departmentId,
          fees: String(data.fees),
          schedule,
        };

        await dispatch(updateDoctor(payload) as any).unwrap();
        onClose();
      } else {
        const doctorData = {
          name: data.name,
          departmentId: data.departmentId,
          fees: String(data.fees),
          schedule,
        };

        await dispatch(addDoctor(doctorData) as any).unwrap();
        onClose();
      }
    },
    [doctor, dispatch, onClose],
  );

  return (
    <form onSubmit={handleSubmit(handleAllFormSubmit)} className="space-y-7">
      <input type="hidden" {...register("departmentId")} />

      {/* Doctor Name */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Doctor Name
        </label>
        <input
          type="text"
          placeholder="Enter Doctor's Name"
          {...register("name")}
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Specialization */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Specialization
        </label>
        <input
          type="text"
          placeholder="Enter Specialization"
          {...register("specialization")}
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
        {errors.specialization && (
          <p className="text-red-500 text-sm">
            {errors.specialization.message}
          </p>
        )}
      </div>

      {/* Department */}
      {!doctor && (
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Department
          </label>

          <input
            type="text"
            value={departmentName || ""}
            disabled
            className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200"
          />
        </div>
      )}

      {/* Fees */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Consultation Fees
        </label>
        <input
          type="number"
          placeholder="$10"
          {...register("fees")}
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
        {errors.fees && (
          <p className="text-red-500 text-sm">{errors.fees.message}</p>
        )}
      </div>

      {/* Schedule */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-4">
          Doctor Schedule
        </label>

        <div className="grid md:grid-cols-3 gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
          <input
            type="time"
            {...register("startTime")}
            className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
          />

          <input
            type="time"
            {...register("endTime")}
            className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
          />

          <input
            type="number"
            placeholder="Slot Duration (min)"
            {...register("slotDuration")}
            className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
          />
        </div>

        {errors.startTime && (
          <p className="text-red-500 text-sm">{errors.startTime.message}</p>
        )}
        {errors.endTime && (
          <p className="text-red-500 text-sm">{errors.endTime.message}</p>
        )}
        {errors.slotDuration && (
          <p className="text-red-500 text-sm">{errors.slotDuration.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className="pt-8 flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-full py-3 rounded-2xl border border-slate-300 text-slate-600 font-medium hover:bg-slate-100 transition cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          Save Doctor
        </button>
      </div>
    </form>
  );
}
