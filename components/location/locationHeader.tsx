import { MapPin } from "lucide-react";

export default function LocationHeader({ onAdd }: any) {
  return (
    <div className="flex justify-between items-end pb-2">
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-2xl bg-white shadow-sm border border-indigo-100 text-indigo-600 ring-4 ring-indigo-50">
          <MapPin size={24} strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Branch Locations
          </h2>
          <p className="text-slate-500 font-medium">
            Monitor and configure your hospital network
          </p>
        </div>
      </div>

      <button
        onClick={onAdd}
        className="group relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3.5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95"
      >
        <span className="text-xl">+</span>
        Add New Branch
      </button>
    </div>
  );
}
