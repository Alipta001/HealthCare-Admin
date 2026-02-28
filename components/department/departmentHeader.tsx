export default function DepartmentHeader() {
  return (
    <div className="relative">
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-white">
          Departments
        </h1>

        <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Manage hospital departments, assign doctors, and oversee medical
          operations efficiently.
        </p>

        <div className="mt-6 h-1 w-32 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full" />
      </div>
    </div>
  );
}