import Sidebar from "@/components/layout/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <div className="flex min-h-dvh md:overflow-y-hidden">
      <div className="lg:flex-[0_250px] md:flex-[0_200px] bg-gray-900">
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
      <div className="flex-[0_150px] bg-gray-900w">
        <Sidebar />
      </div>
    </div>
  );
}
