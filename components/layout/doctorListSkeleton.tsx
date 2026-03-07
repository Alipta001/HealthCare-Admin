export default function DoctorListSkeleton() {
  return (
    <tr className="animate-pulse border-b border-slate-100">
      <td className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-200 rounded-2xl"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-slate-200 rounded-md"></div>
            <div className="h-3 w-20 bg-slate-100 rounded-md"></div>
          </div>
        </div>
      </td>
      <td className="p-6">
        <div className="h-6 w-24 bg-slate-100 rounded-full"></div>
      </td>
      <td className="p-6">
        <div className="h-4 w-28 bg-slate-200 rounded-md mx-auto"></div>
      </td>
      <td className="p-6 text-center">
        <div className="h-9 w-24 bg-slate-200 rounded-xl mx-auto"></div>
      </td>
    </tr>
  );
}