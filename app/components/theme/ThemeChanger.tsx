"use client";
import { useTheme } from "./useTheme";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Change Theme
    </button>
  );
};

export default Theme;
