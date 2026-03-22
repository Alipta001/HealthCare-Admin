"use client";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import departmentSlice, {
  addDepartment,
  departmentList,
} from "@/redux/slice/departmentSlice/departmentSlice";
import { AppDispatch } from "@/typescript/redux";

interface DepartmentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DepartmentModal({
  open,
  onClose,
}: DepartmentModalProps) {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (!open) return null;

  const handleFormSubmit = async (formData: any) => {
    const payload = {
      name: formData.name,
      description: formData.description,
    };

    await dispatch(addDepartment(payload)).unwrap();
    dispatch(departmentList() as any);
    reset();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose} // 👈 closes when clicking outside
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // 👈 prevents closing when clicking inside
      >
        <div className="h-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600" />

        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition"
          >
            ✕
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Create Department
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Add a new department to your hospital system.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Department Name
              </label>
              <input
                type="text"
                placeholder="e.g. Cardiology"
                {...register("name", { required: true })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 
                           focus:ring-2 focus:ring-indigo-500 
                           focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Brief description of the department..."
                {...register("description", { required: true })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 
                           focus:ring-2 focus:ring-indigo-500 
                           focus:outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl 
                         bg-gradient-to-r from-indigo-600 to-purple-600 
                         text-white font-medium 
                         hover:shadow-lg hover:scale-[1.02] 
                         active:scale-[0.98] 
                         transition-all duration-300 cursor-pointer"
            >
              Save Department
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
