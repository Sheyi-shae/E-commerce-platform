import { Inter } from "next/font/google";

import { Providers } from "@/context/Providers";
import Navbar from "../components/(fronte)/Navbar";
import Headersection from "../components/(fronte)/Headersection";


export default function Layout({ children }) {
  return (
    <html lang="en" className="dark">
      <body >
     
      <Providers>
      <Headersection/>
    <Navbar/>
      {children}
      </Providers>
      </body>
    </html>
  );
}
