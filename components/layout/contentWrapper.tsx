"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const noSidebarRoutes = ["/auth/signin", "/auth/signup", "/"];
  const isAuthPage = noSidebarRoutes.includes(pathname);

  return (
    <main 
      className={`flex-1 min-h-screen transition-all duration-300 bg-slate-50 dark:bg-[#0b0f1a] ${
        !isAuthPage ? "lg:ml-72" : ""
      }`}
    >
      <div 
        className={`w-full mx-auto ${
          !isAuthPage 
            ? "pt-24 pb-10 px-4 sm:px-6 lg:px-8 lg:pt-10" 
            : ""
        }`}
      >
        {children}
      </div>
    </main>
  );
}