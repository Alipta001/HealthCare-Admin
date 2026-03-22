"use client";

import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useRef, memo } from "react";
import { useDispatch } from "react-redux";
import { createBranch } from "@/redux/slice/branchSlice/branchSlice";
import { AppDispatch } from "@/typescript/redux";
import { Phone, Globe, CheckCircle2, Building2, MapPin } from "lucide-react";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    phone: yup.string().required("Phone is required"),
    address: yup.string().required("Address is required"),
    lat: yup.number().required().typeError("Invalid Lat"),
    lng: yup.number().required().typeError("Invalid Lng"),
  })
  .required();

function LocationForm({ onCoordsChange, externalCoords }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const isInternalChange = useRef(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { lat: 22.7668, lng: 88.3792 },
  });

  const watchedLat = useWatch({ control, name: "lat" });
  const watchedLng = useWatch({ control, name: "lng" });

  // Sync: Map -> Form
  useEffect(() => {
    if (externalCoords && !isInternalChange.current) {
      if (
        Number(watchedLat).toFixed(5) !== Number(externalCoords.lat).toFixed(5)
      ) {
        setValue("lat", externalCoords.lat);
        setValue("lng", externalCoords.lng);
      }
    }
    isInternalChange.current = false;
  }, [externalCoords, setValue]);

  // Sync: Form -> Map
  useEffect(() => {
    const lat = Number(watchedLat);
    const lng = Number(watchedLng);
    if (!isNaN(lat) && !isNaN(lng)) {
      isInternalChange.current = true;
      onCoordsChange(lat, lng);
    }
  }, [watchedLat, watchedLng, onCoordsChange]);

  const onSubmit = async (data: any) => {
    try {
      const payload = { ...data, lat: Number(data.lat), lng: Number(data.lng) };
      await dispatch(createBranch(payload)).unwrap();
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full overflow-hidden bg-white"
    >
      <div className="flex-1 overflow-y-auto px-6 py-4 md:px-10 md:py-8 space-y-5 scrollbar-hide">
        {/* Name Field */}
        <div className="space-y-1">
          <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Branch Name
          </label>
          <div className="relative group min-h-[56px]">
            <Building2
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
            />
            <input
              {...register("name")}
              className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none font-bold text-base text-slate-800"
              placeholder="Clinic Name"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="space-y-1">
          <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Phone
          </label>
          <div className="relative group min-h-[56px]">
            <Phone
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
            />
            <input
              {...register("phone")}
              className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none font-bold text-base text-slate-800"
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* Address Field */}
        <div className="space-y-1">
          <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Address
          </label>
          <div className="relative group">
            <MapPin
              size={20}
              className="absolute left-4 top-4 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
            />
            <textarea
              {...register("address")}
              rows={2}
              className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none font-bold text-sm resize-none text-slate-800"
              placeholder="Street address..."
            />
          </div>
        </div>

        {/* GPS Block */}
        <div className="p-5 bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-indigo-400" />
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                GPS Metadata
              </span>
            </div>
            <div className="flex items-center gap-2 bg-indigo-500/10 px-2 py-1 rounded-full">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse will-change-transform" />
              <span className="text-[9px] font-bold text-indigo-300 uppercase leading-none">
                Live Sync
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/50 p-3 rounded-2xl border border-slate-700">
              <label className="text-[9px] font-black text-indigo-300/60 uppercase block mb-1">
                Latitude
              </label>
              <input
                {...register("lat")}
                step="any"
                type="number"
                className="w-full outline-none font-mono text-base font-bold text-white bg-transparent"
              />
            </div>
            <div className="bg-slate-800/50 p-3 rounded-2xl border border-slate-700">
              <label className="text-[9px] font-black text-indigo-300/60 uppercase block mb-1">
                Longitude
              </label>
              <input
                {...register("lng")}
                step="any"
                type="number"
                className="w-full outline-none font-mono text-base font-bold text-white bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="px-6 py-4 border-t border-slate-100 bg-white shrink-0">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <CheckCircle2 size={24} />{" "}
              <span className="uppercase tracking-widest text-sm">
                Register Branch
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default memo(LocationForm);
