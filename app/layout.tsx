// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Providers from "@/redux/store/provider";
// import { Toaster } from "sonner";
// import SidebarWrapper from "@/components/layout/sidebarWrapper";
// import ContentWrapper from "@/components/layout/contentWrapper";// See step 3

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "DocAdmin | Hospital Management",
//   description: "Advanced dashboard for hospital and doctor management",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Providers>
//           <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
//             {/* Logic-controlled Sidebar */}
//             <SidebarWrapper />

//             {/* Content area that adjusts for sidebar width */}
//             <ContentWrapper>
//               {children}
//             </ContentWrapper>
//           </div>

//           <Toaster position="top-center" richColors={true} />
//         </Providers>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/store/provider";
import { Toaster } from "sonner";
import SidebarWrapper from "@/components/layout/sidebarWrapper";
import ContentWrapper from "@/components/layout/contentWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocAdmin | Hospital Management",
  description: "Advanced dashboard for hospital and doctor management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex bg-slate-100 dark:bg-slate-950">
            <SidebarWrapper />

            <ContentWrapper>{children}</ContentWrapper>
          </div>

          <Toaster position="top-center" richColors={true} />
        </Providers>
      </body>
    </html>
  );
}
