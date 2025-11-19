"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []); // also add [] to prevent re-initializing AOS every render

  return (
    <>
      <main className="relative flex grow flex-col min-h-screen" style={{ backgroundColor: "#f5f5f5", color: "#111" }}>
        {children}
      </main>

      <Footer />
    </>
  );
}
