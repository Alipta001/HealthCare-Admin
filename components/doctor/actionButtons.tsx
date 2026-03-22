"use client";

import { Pencil, Trash2, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { Doctor } from "../../typescript/doctor";

interface ActionButtonsProps {
  doctor: Doctor;
  onEdit: (doctor: Doctor) => void;
  onDelete: (doctor: Doctor) => void;
}

interface TooltipProps {
  text: string;
  groupName: "edit" | "delete" | "view";
}

export default function ActionButtons({
  doctor,
  onEdit,
  onDelete,
}: ActionButtonsProps) {
  const router = useRouter();

  const Tooltip = ({ text, groupName }: TooltipProps) => (
    <span
      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
      hidden md:block pointer-events-none opacity-0 transition-all duration-200 
      bg-slate-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg 
      font-bold shadow-xl z-[100] whitespace-nowrap translate-y-2
      ${
        groupName === "edit"
          ? "group-hover/edit:opacity-100 group-hover/edit:translate-y-0"
          : ""
      }
      ${
        groupName === "delete"
          ? "group-hover/delete:opacity-100 group-hover/delete:translate-y-0"
          : ""
      }
      ${
        groupName === "view"
          ? "group-hover/view:opacity-100 group-hover/view:translate-y-0"
          : ""
      }`}
    >
      {text}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
    </span>
  );

  return (
    <div className="flex items-center gap-2 md:gap-3 justify-end">
      {/* Edit */}
      <button
        onClick={() => onEdit(doctor)}
        className="group/edit relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-sm cursor-pointer"
      >
        <Pencil className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
        <Tooltip text="EDIT DOCTOR" groupName="edit" />
      </button>

      {/* Delete */}
      <button
        onClick={() => onDelete(doctor)}
        className="group/delete relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm cursor-pointer"
      >
        <Trash2 className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
        <Tooltip text="DELETE DOCTOR" groupName="delete" />
      </button>

      {/* View */}
      <button
        className="group/view relative w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm cursor-pointer"
        onClick={() => router.push(`/pages/doctorDetails/${doctor._id}`)}
      >
        <ExternalLink
          className="w-4 h-4 md:w-[18px] md:h-[18px]"
          strokeWidth={2.5}
        />
        <Tooltip text="VIEW PROFILE" groupName="view" />
      </button>
    </div>
  );
}
