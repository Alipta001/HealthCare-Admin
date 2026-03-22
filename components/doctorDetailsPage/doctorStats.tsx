export default function DoctorStats() {
  const stats = [
    { title: "Total Bookings", value: 124 },
    { title: "Confirmed", value: 96 },
    { title: "Waiting List", value: 10 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow"
        >
          <p className="text-xs uppercase tracking-widest text-indigo-300/70">
            {stat.title}
          </p>

          <p className="text-2xl sm:text-3xl font-bold text-white mt-2">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
