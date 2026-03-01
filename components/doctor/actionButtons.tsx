"use client";

import Link from "next/link";

export default function ActionButtons({ id }) {
  return (
    <div className="flex gap-3 justify-center">
      <Link
        href={`/admin/doctors/update/${id}`}
        className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
      >
        Update
      </Link>

      <button className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-100 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300">
        Delete
      </button>
    </div>
  );
}