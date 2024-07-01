import { SearchContextProvider } from "@/context/search-context";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function SearchPageLayout({ children }: LayoutProps) {
  return <SearchContextProvider>{children}</SearchContextProvider>;
}
