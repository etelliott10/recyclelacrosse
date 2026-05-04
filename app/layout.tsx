import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RecycleLacrosse | Give Gear a Second Life",
  description:
    "Utah-based lacrosse gear recycling program. We melt broken gear into new equipment, repurpose shafts into workout handles, and donate usable gear to kids and schools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="layout">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
