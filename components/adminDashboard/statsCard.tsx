export default function StatsCards() {
  const stats = [
    { title: "Total Doctors", value: "128" },
    { title: "Pending Appointments", value: "42" },
    { title: "Accepted Today", value: "19" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((card) => (
        <div key={card.title} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <p className="text-slate-500 text-sm font-semibold">{card.title}</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-900 dark:text-white">{card.value}</h2>
        </div>
      ))}
    </div>
  );
}