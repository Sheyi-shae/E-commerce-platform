"use client"

import * as React from "react"
import { ThemeProvider  } from "next-themes"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import { store } from "@/redux/store"



export function Providers({children}) {
    //wrapped inside the main layout.js
  return <ThemeProvider attribute="class" defaultTheme="dark">
  <Toaster position="top-center" reverseOrder={false}/>
<Provider store={store}>
  {children}
  </Provider>
  </ThemeProvider>
}
