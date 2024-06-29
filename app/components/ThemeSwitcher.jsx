// app/components/ThemeSwitcher.tsx
"use client";

import { ToggleSwitch } from "flowbite-react";
import { Moon, Sun } from "lucide-react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher({className,size}) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [switch2, setSwitch2] = useState(true);

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
     
      {/* <button  className={className} onClick={() => setTheme(theme ==='dark' ? 'light' : 'dark')}>
        {theme === 'light' ? <Moon size={size}/> : <Sun size={size}/>}
      </button> */}

      <ToggleSwitch color="slate" checked={theme === 'dark'} onClick={() => setTheme(theme ==='dark' ? 'light' : 'dark')}
       label={`${theme} mode`} onChange={setSwitch2} />
      
    </div>
  )
};