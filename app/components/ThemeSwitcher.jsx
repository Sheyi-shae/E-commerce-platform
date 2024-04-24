// app/components/ThemeSwitcher.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher({className,size}) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
     
      <button  className={className} onClick={() => setTheme(theme ==='dark' ? 'light' : 'dark')}>
        {theme === 'light' ? <Moon size={size}/> : <Sun size={size}/>}
      </button>
      
    </div>
  )
};