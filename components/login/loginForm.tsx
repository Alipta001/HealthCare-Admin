// import React from 'react'

// export default function LoginForm() {
//   return (
//     <form action="" onSubmit={handleSubmit}>
//         <div className="email">
//             <input type="email" placeholder="Enter your email" />
//         </div>
//         <div className="password">
//             <input type="password" placeholder="Enter your password" />
//         </div>
//         <button type="submit">Login</button>
//     </form>
//   )
// }

// "use client"

// export default function LoginForm() {
//   const handleSubmit = (e) => e.preventDefault();

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="group space-y-2">
//             <label className="text-[11px] uppercase tracking-widest text-blue-400/80 ml-1 font-bold">Credential Identity</label>
//             <input
//                 type="email"
//                 placeholder="Admin Email"
//                 className="w-full px-6 py-4 bg-black/30 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-black/50 transition-all duration-300 group-hover:border-white/20"
//             />
//         </div>

//         <div className="group space-y-2">
//             <label className="text-[11px] uppercase tracking-widest text-blue-400/80 ml-1 font-bold">Access Key</label>
//             <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="w-full px-6 py-4 bg-black/30 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-black/50 transition-all duration-300 group-hover:border-white/20"
//             />
//         </div>

//         <button
//             type="submit"
//             className="group relative w-full py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white text-xs uppercase tracking-[0.2em] font-black rounded-2xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all duration-500 hover:shadow-[0_20px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95 overflow-hidden"
//         >
//             <span className="relative z-10">Authorize Access</span>
//             {/* Animated hover highlight */}
//             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
//         </button>

//         <div className="text-center">
//             <button type="button" className="text-[11px] uppercase tracking-tighter text-slate-500 hover:text-blue-400 transition-colors duration-300">
//                 System Recovery & Support
//             </button>
//         </div>
//     </form>
//   )
// }

"use client";

// import { useForm } from "react-hook-form";

// export default function LoginForm() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({
//         resolver: yupResolver(schema),
//         mode: "onBlur"
//     });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = {
//       email: data.get("email"),
//       password: data.get("password")
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="space-y-4">
//         <div className="group">
//           <label className="text-[11px] uppercase tracking-[0.15em] text-slate-500 ml-1 font-bold">
//             Admin Identifier
//           </label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             className="w-full mt-1 px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 shadow-inner group-hover:shadow-md"
//           />
//         </div>

//         <div className="group">
//           <label className="text-[11px] uppercase tracking-[0.15em] text-slate-500 ml-1 font-bold">
//             Security Key
//           </label>
//           <input
//             type="password"
//             placeholder="••••••••"
//             className="w-full mt-1 px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 shadow-inner group-hover:shadow-md"
//           />
//         </div>
//       </div>
//       <button
//         type="submit"
//         className="group relative w-full py-4 bg-slate-900 text-white text-xs uppercase tracking-[0.2em] font-bold rounded-xl shadow-xl shadow-slate-200 transition-all duration-300 hover:bg-cyan-600 hover:-translate-y-1 active:scale-95 overflow-hidden cursor-pointer"
//       >
//         <span className="relative z-10 flex items-center justify-center gap-2">
//           Access Dashboard
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 transition-transform group-hover:translate-x-1"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M13 7l5 5m0 0l-5 5m5-5H6"
//             />
//           </svg>
//         </span>
//       </button>
//     </form>
//   );
// }



"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";



interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });


  const onSubmit = (payload: LoginFormInputs) => {
  dispatch(authLogin(payload));
};

useEffect(() => {
  if (isAuthenticated) {
    toast.success("Login successful");
    router.push("/pages/dashboard");
  }
}, [isAuthenticated, router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        
        <div className="group">
         <label className="text-[lab(78%_-3.28_-36.72)] text-[12px] uppercase tracking-[0.15em] ml-1 font-bold">
  Admin Identifier
</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email")}
            className="w-full mt-1 px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 shadow-inner group-hover:shadow-md"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="group">
         <label className="text-[lab(78%_-3.28_-36.72)] text-[12px] uppercase tracking-[0.15em] ml-1 font-bold">
            Security Key
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
            className="w-full mt-1 px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 shadow-inner group-hover:shadow-md"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      {error && (
        <p className="text-red-600 text-sm text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full py-4 bg-slate-900 text-white text-xs uppercase tracking-[0.2em] font-bold rounded-xl shadow-xl shadow-slate-200 transition-all duration-300 hover:bg-cyan-600 hover:-translate-y-1 active:scale-95 overflow-hidden cursor-pointer disabled:opacity-60"
      >
        {loading ? "Processing..." : "Access Dashboard"}
      </button>
    </form>
  );
}