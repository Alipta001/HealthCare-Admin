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

// "use client";

// import { useState } from "react";

// export default function DoctorModalForm({title, departmentId, departmentName, departments = [], onCancel }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     specialization: "",
//     departmentId: "",
//     fees: "",
//   });

//   const [slots, setSlots] = useState([{ date: "", start: "", end: "" }]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSlotChange = (index, field, value) => {
//     const newSlots = [...slots];
//     newSlots[index][field] = value;
//     setSlots(newSlots);
//   };

//   const addSlot = () => setSlots([...slots, { date: "", start: "", end: "" }]);
//   const removeSlot = (index) => setSlots(slots.filter((_, i) => i !== index));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit?.({ ...formData, availableSlots: slots });
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
//           className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
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
//           className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
//         />
//       </div>

//       {/* Department */}
//       <div>
//         <label className="block text-sm font-semibold text-slate-600 mb-2">
//           Department
//         </label>
//         {/* <select
//           name="departmentId"
//           required
//           value={formData.departmentId}
//           onChange={handleChange}
//           className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
//         >
//           <option value="">Select Department</option>
//           {departments.map((dept) => (
//             <option key={dept._id} value={dept._id}>
//               {dept.name}
//             </option>
//           ))}
//         </select> */}
//         <input
//           type="text"
//           name="department"
//           required
//           value={formData.departmentId}
//           onChange={handleChange}
//           placeholder={`${departmentName}`}
//           disabled
//           className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
//         />
//       </div>

//       {/* Fees */}
//       <div>
//         <label className="block text-sm font-semibold text-slate-600 mb-2">
//           Consultation Fees
//         </label>
//         <input
//           type="number"
//           name="fees"
//           required
//           value={formData.fees}
//           onChange={handleChange}
//           placeholder="$120"
//           className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
//         />
//       </div>

//       {/* Available Slots */}
//       <div>
//         <label className="block text-sm font-semibold text-slate-600 mb-4">
//           Available Slots
//         </label>

//         <div className="space-y-4">
//           {slots.map((slot, index) => (
//             <div
//               key={index}
//               className="grid md:grid-cols-4 gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200"
//             >
//               <input
//                 type="date"
//                 value={slot.date}
//                 onChange={(e) => handleSlotChange(index, "date", e.target.value)}
//                 className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
//               />
//               <input
//                 type="time"
//                 value={slot.start}
//                 onChange={(e) => handleSlotChange(index, "start", e.target.value)}
//                 className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
//               />
//               <input
//                 type="time"
//                 value={slot.end}
//                 onChange={(e) => handleSlotChange(index, "end", e.target.value)}
//                 className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeSlot(index)}
//                 className="text-red-500 font-medium hover:underline"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={addSlot}
//           className="mt-4 text-indigo-600 font-semibold hover:text-indigo-800 transition"
//         >
//           + Add Another Slot
//         </button>
//       </div>

//       {/* Actions */}
//       <div className="pt-8 flex gap-4">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="w-full py-3 rounded-2xl border border-slate-300 text-slate-600 font-medium hover:bg-slate-100 transition"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
//         >
//           Save Doctor
//         </button>
//       </div>
//     </form>
//   );
// }

"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addDoctor } from "@/redux/slice/doctorSlice";
import { useEffect } from "react";

/* Yup Schema */
const schema = yup.object().shape({
  name: yup.string().required("Doctor name is required"),
  specialization: yup.string().required("Specialization is required"),
  departmentId: yup.string().required("Department is required"),
  fees: yup
    .number()
    .typeError("Fees must be a number")
    .required("Fees is required")
    .positive("Fees must be positive"),
  availableSlots: yup.array().of(
    yup.object().shape({
      date: yup.string().required("Date is required"),
      start: yup.string().required("Start time is required"),
      end: yup.string().required("End time is required"),
    }),
  ),
});

export default function DoctorModalForm({
  doctor,
  departmentId,
  departmentName,
  onCancel,
}) {
  const dispatch = useDispatch();

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      specialization: "",
      departmentId: departmentId || "",
      fees: "",
      availableSlots: [{ date: "", start: "", end: "" }],
    },
  });

  useEffect(() => {
    if (doctor) {
      const formattedSlots = doctor.availableSlots?.map((slot) => {
        const [start, end] = slot.time.split("-");

        // Convert full date string → YYYY-MM-DD
        const formattedDate = new Date(slot.date).toISOString().split("T")[0];

        return {
          date: formattedDate,
          start: start || "",
          end: end || "",
        };
      }) || [{ date: "", start: "", end: "" }];

      reset({
        name: doctor.name || "",
        specialization: doctor.specialization || "",
        fees: doctor.fees || "",
        departmentId: doctor.departmentId || "",
        availableSlots: formattedSlots,
      });
    } else {
      reset({
        name: "",
        specialization: "",
        fees: "",
        departmentId: departmentId || "",
        availableSlots: [{ date: "", start: "", end: "" }],
      });
    }
  }, [doctor, reset, departmentId]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "availableSlots",
  });

  const submitDoctorForm = (data) => {
    console.log("Form submitted:", data);

    const formattedSlots = data.availableSlots.map((slot) => ({
      date: slot.date,
      time: `${slot.start}-${slot.end}`,
    }));

    const doctorData = {
      name: data.name,
      specialization: data.specialization,
      departmentId: data.departmentId,
      fees: data.fees.toString(),
      availableSlots: formattedSlots,
    };
    console.log("FINAL PAYLOAD:", doctorData);
    dispatch(addDoctor(doctorData));
  };

  return (
    <form onSubmit={handleSubmit(submitDoctorForm)} className="space-y-7">
      <input type="hidden" {...register("departmentId")} />
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Doctor Name
        </label>
        <input
          type="text"
          placeholder="Enter Doctor's Name"
          {...register("name")}
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Specialization */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Specialization
        </label>
        <input
          type="text"
          placeholder="Enter Specialization"
          {...register("specialization")}
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
        {errors.specialization && (
          <p className="text-red-500 text-sm">
            {errors.specialization.message}
          </p>
        )}
      </div>

      {/* Department Display Only */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Department
        </label>

        <input
          type="text"
          value={departmentName || ""}
          disabled
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200"
        />

        {errors.departmentId && (
          <p className="text-red-500 text-sm">{errors.departmentId.message}</p>
        )}
      </div>

      {/* Fees */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Consultation Fees
        </label>
        <input
          type="number"
          placeholder="$10"
          {...register("fees")}
          className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition"
        />
        {errors.fees && (
          <p className="text-red-500 text-sm">{errors.fees.message}</p>
        )}
      </div>

      {/* Available Slots */}
      <div>
        <label className="block text-sm font-semibold text-slate-600 mb-4">
          Available Slots
        </label>

        <div className="space-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid md:grid-cols-4 gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200"
            >
              <input
                type="date"
                {...register(`availableSlots.${index}.date`)}
                className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
              />

              <input
                type="time"
                {...register(`availableSlots.${index}.start`)}
                className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
              />

              <input
                type="time"
                {...register(`availableSlots.${index}.end`)}
                className="px-3 py-2 rounded-xl border border-slate-200 outline-none"
              />

              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 font-medium hover:underline"
              >
                Remove
              </button>

              <div className="col-span-4">
                {errors.availableSlots?.[index]?.date && (
                  <p className="text-red-500 text-sm">
                    {errors.availableSlots[index].date.message}
                  </p>
                )}
                {errors.availableSlots?.[index]?.start && (
                  <p className="text-red-500 text-sm">
                    {errors.availableSlots[index].start.message}
                  </p>
                )}
                {errors.availableSlots?.[index]?.end && (
                  <p className="text-red-500 text-sm">
                    {errors.availableSlots[index].end.message}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => append({ date: "", start: "", end: "" })}
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
          className="w-full py-3 rounded-2xl border border-slate-300 text-slate-600 font-medium hover:bg-slate-100 transition cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          Save Doctor
        </button>
      </div>
    </form>
  );
}
