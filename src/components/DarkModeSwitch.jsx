"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <SunIcon
            className="dark:inline hidden hover:cursor-pointer dark:text-white w-5 h-5"
            onClick={() => setTheme("ligth")}
          />
        ) : (
          <MoonIcon
            className="dark:hidden inline hover:cursor-pointer h-5 w-5"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
