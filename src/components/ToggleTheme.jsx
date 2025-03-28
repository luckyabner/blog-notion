"use client";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  return (
    <button
      title="切换主题"
      className="rounded-full p-2 transition-transform duration-200 hover:rotate-12 hover:text-sky-700"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "切换至深色模式" : "切换至浅色模式"}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
