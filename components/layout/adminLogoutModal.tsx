"use client";

import {Loader2, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

interface AdminLogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isPending?: boolean;
}

export default function AdminLogoutModal({ isOpen, onClose, onConfirm, isPending }: AdminLogoutModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
        onClick={isPending ? undefined : onClose}
      />

      {/* Modal Container */}
      <div className={`
        relative w-full max-w-sm overflow-hidden
        bg-white rounded-[2rem] shadow-2xl
        border border-slate-100 transition-all duration-300 ease-out
        ${isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"}
      `}>
        
        <div className="p-8">
          {/* Admin Warning Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center border border-red-100">
              <ShieldAlert size={32} className="text-red-600" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-3 mb-8">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Exit Admin Panel?
            </h3>
            <p className="text-slate-500 text-[15px] font-medium leading-relaxed px-2">
              You are about to terminate your administrative session. Access to management tools will be restricted.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              disabled={isPending}
              onClick={onConfirm}
              className="w-full py-4 rounded-xl bg-red-600 text-white text-[12px] font-black uppercase tracking-[0.15em] hover:bg-red-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-200"
            >
              {isPending ? <Loader2 size={18} className="animate-spin" /> : "Terminate Session"}
            </button>
            <button
              disabled={isPending}
              onClick={onClose}
              className="w-full py-4 rounded-xl bg-slate-50 text-slate-500 text-[12px] font-black uppercase tracking-[0.15em] hover:bg-slate-100 transition-all cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-slate-50 py-4 flex items-center justify-center border-t border-slate-100">
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
             Secure Admin Exit
           </span>
        </div>
      </div>
    </div>
  );
}