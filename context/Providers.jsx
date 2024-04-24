"use client"

import * as React from "react"
import { ThemeProvider  } from "next-themes"
import { Toaster } from "react-hot-toast"



export function Providers({children}) {
    //wrap inside the main layout.js
  return <ThemeProvider attribute="class" defaultTheme="dark">
  <Toaster position="top-center" reverseOrder={false}/>

  {children}
  
  </ThemeProvider>
}
