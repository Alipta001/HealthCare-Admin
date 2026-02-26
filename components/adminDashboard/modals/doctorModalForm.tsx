// "use client";

// import { useState } from "react";

// export default function DoctorForm({ departments = [], onSubmit, onCancel }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     specialization: "",
//     departmentId: "",
//     fees: "",
//   });

//   const [slots, setSlots] = useState([
//     { date: "", start: "", end: "" },
//   ]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       availableSlots: slots,
//     };

//     onSubmit?.(payload);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-7">

//       {/* Doctor Name */}
//       <div>
//         <label className="block text-sm font-semibold text-slate-600 mb-2">
//           Doctor Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           required
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Dr. Sarah Williams"
//           className="w-full px-5 py-3 rounded-2xl 
//           bg-slate-50 border border-slate-200
//           focus:border-indigo-500 
//           focus:ring-4 focus:ring-indigo-100
//           outline-none transition"
//         />
//       </div>

//       {/* Specialization */}
//       <div>
//         <label className="block text-sm font-semibold text-slate-600 mb-2">
//           Specialization
//         </label>
//         <input
//           type="text"
//           name="specialization"
//           required
//           value={formData.specialization}
//           onChange={handleChange}
//           placeholder="Cardiologist"
//           className="w-full px-5 py-3 rounded-2xl 
//           bg-slate-50 border border-slate-200
//           focus:border-indigo-500 
//           focus:ring-4 focus:ring-indigo-100
//           outline-none transition"
//         />
//       </div>

//       {/* Department */}
//       <div>
//         <label className="block text-sm font-semibold text-slate-600 mb-2">
//           Department
//         </label>
//         <select
//           name="departmentId"
//           required
//           value={formData.departmentId}
//           onChange={handleChange}
//           className="w-full px-5 py-3 rounded-2xl 
//           bg-slate-50 border border-slate-200
//           focus:border-indigo-500 
//           focus:ring-4 focus:ring-indigo-100
//           outline-none transition"
//         >
//           <option value="">Select Department</option>
//           {departments.map((dept) => (
//             <option key={dept._id} value={dept._id}>
//               {dept.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Fees */}
//       <div>
//         <label className="block text-sm font-semibold text-slate-600 mb-2">
//           Consultation Fees
//         </label>
//         <input
//           type="text"
//           name="fees"
//           required
//           value={formData.fees}
//           onChange={handleChange}
//           placeholder="$120"
//           className="w-full px-5 py-3 rounded-2xl 
//           bg-slate-50 border border-slate-200
//           focus:border-indigo-500 
//           focus:ring-4 focus:ring-indigo-100
//           outline-none transition"
//         />
//       </div>

//       {/* Actions */}
//       <div className="pt-8 flex gap-4">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="w-full py-3 rounded-2xl 
//           border border-slate-300 
//           text-slate-600 font-medium
//           hover:bg-slate-100 transition"
//         >
//           Cancel
//         </button>

//         <button
//           type="submit"
//           className="w-full py-3 rounded-2xl 
//           bg-gradient-to-r from-indigo-600 to-cyan-500 
//           text-white font-semibold
//           shadow-lg hover:shadow-xl 
//           hover:scale-[1.02] active:scale-[0.98]
//           transition-all"
//         >
//           Save Doctor
//         </button>
//       </div>

//     </form>
//   );
// }


"use client";

import { useState } from "react";

export default function DoctorModalForm({ departments = [], onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    departmentId: "",
    fees: "",
  });

  const [slots, setSlots] = useState([{ date: "", start: "", end: "" }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSlotChange = (index, field, value) => {
    const newSlots = [...slots];
    newSlots[index][field] = value;
    setSlots(newSlots);
  };

  const addSlot = () => setSlots([...slots, { date: "", start: "", end: "" }]);
  const removeSlot = (index) => setSlots(slots.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ ...formData, availableSlots: slots });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">

      {/* Doctor Name */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Doctor Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Dr. Sarah Williams"
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
      </div>

      {/* Specialization */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Specialization
        </label>
        <input
          type="text"
          name="specialization"
          required
          value={formData.specialization}
          onChange={handleChange}
          placeholder="Cardiologist"
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
      </div>

      {/* Department */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Department
        </label>
        <select
          name="departmentId"
          required
          value={formData.departmentId}
          onChange={handleChange}
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept._id} value={dept._id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      {/* Fees */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Consultation Fees
        </label>
        <input
          type="number"
          name="fees"
          required
          value={formData.fees}
          onChange={handleChange}
          placeholder="$120"
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
      </div>

      {/* Available Slots */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-4">
          Available Slots
        </label>

        <div className="space-y-4">
          {slots.map((slot, index) => (
            <div
              key={index}
              className="grid md:grid-cols-4 gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200"
            >
              <input
                type="date"
                value={slot.date}
                onChange={(e) => handleSlotChange(index, "date", e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
              />
              <input
                type="time"
                value={slot.start}
                onChange={(e) => handleSlotChange(index, "start", e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
              />
              <input
                type="time"
                value={slot.end}
                onChange={(e) => handleSlotChange(index, "end", e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
              />
              <button
                type="button"
                onClick={() => removeSlot(index)}
                className="text-red-500 font-medium hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addSlot}
          className="mt-4 text-indigo-600 font-semibold hover:text-indigo-800 transition"
        >
          + Add Another Slot
        </button>
      </div>

      {/* Actions */}
      <div className="pt-8 flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-full py-3 rounded-2xl border border-slate-300 text-slate-600 font-medium hover:bg-slate-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Save Doctor
        </button>
      </div>
    </form>
  );
}