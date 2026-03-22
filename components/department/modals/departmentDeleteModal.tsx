import { AlertTriangle, X } from "lucide-react";

interface DeleteDepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name?: string;
}

export default function DepartmentDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  name,
}: DeleteDepartmentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#081028]/80 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-[2.5rem] bg-[#111c2d] border border-white/10 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all">
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-rose-500/10 blur-[80px] rounded-full" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-500/10 text-rose-500 border border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.1)]">
            <AlertTriangle size={40} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="mb-2 text-2xl font-black text-white tracking-tight">
            Delete Department?
          </h3>

          {/* Description */}
          <p className="mb-8 text-slate-400 text-sm leading-relaxed">
            You are about to permanently delete
            <span className="text-white font-bold px-1.5 py-0.5 mx-1 bg-white/5 rounded-md">
              {name || "this department"}
            </span>
            from the system. All associated data may be affected. This action
            cannot be undone.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-4 rounded-2xl bg-white/5 text-slate-300 font-bold text-sm hover:bg-white/10 hover:text-white transition-all border border-white/5 cursor-pointer"
            >
              CANCEL
            </button>

            <button
              onClick={onConfirm}
              className="flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 text-white font-black text-sm shadow-lg shadow-rose-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wider cursor-pointer"
            >
              DELETE DEPARTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
