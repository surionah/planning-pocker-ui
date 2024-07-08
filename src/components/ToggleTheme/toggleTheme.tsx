"use client";

import { useLayoutEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ToggleTheme() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  useLayoutEffect(() => {
    const darkModeLocalStorage = localStorage.getItem("darkMode");
    if (darkModeLocalStorage) {
      setIsDarkModeEnabled(darkModeLocalStorage === "on");
    } else {
      setIsDarkModeEnabled(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  }, []);

  useLayoutEffect(() => {
    if (isDarkModeEnabled) {
      localStorage.setItem("darkMode", "on");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", "off");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeEnabled]);

  return (
    <div className="w-12 flex justify-around text-black dark:text-white">
      <Icon
        icon={`${isDarkModeEnabled ? "carbon:sun" : "carbon:moon"}`}
        width={35}
        height={35}
        className="text-black dark:text-white hover:cursor-pointer"
        onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
      />
    </div>
  );
}
