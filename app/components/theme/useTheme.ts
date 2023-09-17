import { useEffect, useState } from "react";

export const useTheme = (defaultTheme?: string) => {
  const [theme, setTheme] = useState<string>(() => {
    let currentTheme = defaultTheme
      ? defaultTheme
      : window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";

    return currentTheme;
  });

  // Theme changer
  useEffect(() => {
    const target = document.body as HTMLBodyElement;

    target.setAttribute("data-theme", theme);
  }, [theme]);

  // Default setter
  // useEffect(() => {
  //   let currentTheme = defaultTheme
  //     ? defaultTheme
  //     : window.matchMedia("(prefers-color-scheme: dark)")
  //     ? "dark"
  //     : "light";

  //   setTheme(currentTheme);
  // }, []);

  return { theme, setTheme };
};
