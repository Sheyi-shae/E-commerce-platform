'use client'
import * as React from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

export default function Providers({ children }) {
  // Wrapped inside the main layout.js
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Toaster position="top-center" reverseOrder={false} />
      <SessionProvider>
        <Provider store={store}>{children}</Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}
// dynamic (() => Promise.resolve(Providers), {ssr: false})

