"use client";
import { useEffect, useState } from "react";
import { SchedulePreviewProps } from "@/types/components";

interface WeekDay {
  day: string;
  date: string;
  fullDate: string;
  isToday: boolean;
  slots: number;
}

export default function SchedulePreview({ doctor }: SchedulePreviewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState<WeekDay[]>([]);

  useEffect(() => {
    const daysArr: WeekDay[] = [];
    const startOfWeek = new Date(currentDate);

    // Find Monday
    const dayDiff = startOfWeek.getDay() === 0 ? 6 : startOfWeek.getDay() - 1;
    startOfWeek.setDate(startOfWeek.getDate() - dayDiff);

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);

      // normalize current calendar date
      const calendarDate = new Date(date);
      calendarDate.setHours(0, 0, 0, 0);

      const slotsForDay =
        doctor?.availableSlots?.filter((slot: any) => {
          const slotDate = new Date(slot.date);

          // normalize slot date
          slotDate.setHours(0, 0, 0, 0);

          return slotDate.getTime() === calendarDate.getTime();
        }) || [];

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      daysArr.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate().toString().padStart(2, "0"),
        fullDate: date.toDateString(),
        isToday: calendarDate.getTime() === today.getTime(),
        slots: slotsForDay.length,
      });
    }

    setWeekDays(daysArr);
  }, [currentDate, doctor]);

  const changeWeek = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  const goToToday = () => setCurrentDate(new Date());

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-5 lg:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Weekly Capacity</h3>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
            {currentDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-black/20 p-1.5 rounded-xl border border-white/5">
          <button
            onClick={() => changeWeek(-1)}
            className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
          >
            ←
          </button>

          <button
            onClick={goToToday}
            className="px-3 py-1 text-[10px] font-black uppercase text-indigo-300 hover:text-white transition-colors"
          >
            Today
          </button>

          <button
            onClick={() => changeWeek(1)}
            className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
        {weekDays.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center rounded-xl py-4 transition-all duration-300 border ${
              item.isToday
                ? "bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-900/40"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
          >
            <span
              className={`text-[10px] uppercase font-bold tracking-tight ${
                item.isToday ? "text-indigo-100" : "text-indigo-300/50"
              }`}
            >
              {item.day}
            </span>

            <span
              className={`text-xl font-black mt-1 ${
                item.isToday ? "text-white" : "text-slate-200"
              }`}
            >
              {item.date}
            </span>

            <div className="mt-2 min-h-[18px]">
              {item.slots > 0 ? (
                <span
                  className={`text-[14px] font-bold px-2 py-0.5 rounded-full ${
                    item.isToday
                      ? "bg-white/20 text-white"
                      : "bg-indigo-500/10 text-indigo-300"
                  }`}
                >
                  {item.slots} Slots Available
                </span>
              ) : (
                <span className="text-[14px] font-bold text-slate-500 uppercase italic opacity-50">
                  No Slots
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
