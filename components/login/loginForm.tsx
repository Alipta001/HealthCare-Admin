"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "@/redux/slice/authSlice/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";
import { LoginFormInputs } from "@/types/forms";
import { RootState, AppDispatch } from "@/typescript/redux";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 8 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { data, loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
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
            <p className="text-red-500 text-[14px] font-bold mt-1">
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
            <p className="text-red-500 text-[14px] font-bold mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

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
