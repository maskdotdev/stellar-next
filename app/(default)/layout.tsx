"use client";

import BgShapes from "@/components/bg-shapes";
import VerticalLines from "@/components/vertical-lines";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VerticalLines />
      <BgShapes />
      <Header />

      <main className="grow">{children}</main>

      <Footer />
      {/* Alpha tag floating on bottom left */}
      <div className="fixed bottom-2 right-4 z-50">
        <div className="max-w-28 flex-wrap bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium shadow-lg">
          Stellar is in alpha release, expect bugs and crashes.
        </div>
      </div>
    </>
  );
}
