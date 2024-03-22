// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { HiMiniSun, HiMoon } from "react-icons/hi2";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <Button isIconOnly onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? 
          <HiMiniSun />
          :
          <HiMoon />
         }
      </Button>
    </div>
  )
};