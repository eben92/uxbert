import ActivityBar from "@/components/layout/activity-bar";
import PlayBar from "@/components/layout/bottom-play-bar";
import Sidebar from "@/components/layout/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <div className="flex flex-col h-dvh overflow-y-hidden">
      <div className="flex flex-1 h-[90vh]">
        <div className="hidden md:block lg:flex-[0_250px] md:flex-[0_200px] ">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
        <div className="hidden md:block lg:flex-[0_300px] md:flex-[0_200px]">
          <ActivityBar />
        </div>
      </div>
      <div className="w-full flex-shrink-0 ">
        <PlayBar />
      </div>
    </div>
  );
}
