"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { MapPin, Activity } from "lucide-react";
import LocationForm from "./locationForm";

const BranchMap = dynamic(() => import("./branchMap"), {
  ssr: false,
  // PERFORMANCE: Use a static, non-animated loader to improve LCP/CLS
  loading: () => <div className="h-full w-full bg-slate-100" />,
});

export default function LocationLayout() {
  const [mapCoords, setMapCoords] = useState({ lat: 22.7668, lng: 88.3792 });
  const [clickedCoords, setClickedCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleCoordsChange = useCallback((lat: number, lng: number) => {
    setMapCoords((prev) => {
      // Simple guard to prevent state updates if coordinates haven't meaningfully changed
      if (prev.lat === lat && prev.lng === lng) return prev;
      return { lat, lng };
    });
  }, []);

  const handleMapClick = useCallback((coords: any) => {
    setClickedCoords(coords);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-white">
      {/* MAP SECTION */}
      <main className="w-full h-[35vh] md:h-full md:w-1/2 relative order-1 md:order-2 border-b md:border-b-0 md:border-l border-slate-200">
        <BranchMap
          setCoords={handleMapClick}
          lat={mapCoords.lat}
          lng={mapCoords.lng}
        />
        <div className="absolute top-4 left-4 z-[1000] md:hidden">
          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-md flex items-center gap-2">
            <Activity size={12} className="text-indigo-600" />
            <span className="text-[10px] font-bold text-slate-600 uppercase">
              Live Map
            </span>
          </div>
        </div>
      </main>

      {/* FORM SECTION */}
      <aside className="w-full h-[65vh] md:h-full md:w-1/2 flex flex-col order-2 md:order-1 bg-white">
        {/* HEADER: Explicit height helps prevent layout shifts */}
        <div className="h-[80px] md:h-[100px] px-6 md:px-10 border-b border-slate-100 flex items-center shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-100">
              <MapPin size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none">
                Branch Manager
              </h2>
              <p className="hidden sm:block text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                Network Configuration
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <LocationForm
            onCoordsChange={handleCoordsChange}
            externalCoords={clickedCoords}
          />
        </div>

        <div className="h-8 border-t border-slate-50 bg-slate-50/50 flex items-center justify-center shrink-0">
          <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.4em]">
            v1.0.5 High-Perf
          </p>
        </div>
      </aside>
    </div>
  );
}
