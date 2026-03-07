"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

export default function SidebarWrapper() {
  const pathname = usePathname();
  const noSidebarPaths = ["/auth/signin", "/auth/signup", "/"];
  const hideSidebar = noSidebarPaths.includes(pathname);

  if (hideSidebar) return null;

  return <Sidebar />;
}