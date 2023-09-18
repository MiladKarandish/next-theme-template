import { useEffect, useState } from "react";

export const useTheme = (defaultTheme?: string) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === "undefined") return "dark";

    const lsTheme = localStorage.getItem("theme");
    const userDefaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";
    let currentTheme = defaultTheme || lsTheme || userDefaultTheme;

    return currentTheme;
  });

  // Theme changer
  useEffect(() => {
    const target = document.querySelector("html") as HTMLHtmlElement;

    target.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Default setter
  // useEffect(() => {
  //   const lsTheme = localStorage.getItem("theme");
  //   const userDefaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
  //     ? "dark"
  //     : "light";
  //   let currentTheme = defaultTheme || lsTheme || userDefaultTheme;

  //   console.log(lsTheme);

  //   setTheme(currentTheme);
  // }, []);

  return { theme, setTheme };
};
