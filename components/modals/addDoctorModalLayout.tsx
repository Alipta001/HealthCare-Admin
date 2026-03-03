"use client";

import DoctorModalForm from "./doctorModalForm";
import ModalPortal from "@/components/common/ModalPortal";

type AddDoctorModalLayoutProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  departmentId?: string;
  departmentName?: string;
  doctor?: any;
};

export default function AddDoctorModalLayout({
  open,
  onClose,
  title,
  doctor,
  departmentId,
  departmentName,
  description,
}: AddDoctorModalLayoutProps) {
  if (!open) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.35)] p-6 sm:p-10 overflow-y-auto max-h-[90vh]">
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-red-500 hover:text-white flex items-center justify-center text-slate-500 transition"
          >
            ✕
          </button>

          {(title || description) && (
            <div className="mb-8">
              {title && (
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-slate-500 mt-2 text-sm">{description}</p>
              )}
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
            </div>
          )}

          <DoctorModalForm doctor={doctor} departmentId={departmentId} departmentName={departmentName} onCancel={onClose}/>
        </div>
      </div>
    </ModalPortal>
  );
}
