import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import "./globals.css";
import { PlayerContextProvider } from "@/context/player-context";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <PlayerContextProvider>{children}</PlayerContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
