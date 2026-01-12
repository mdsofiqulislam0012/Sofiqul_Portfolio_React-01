import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "./lib/utility";

export default function ThemeToggle() {
  const [isDarkMood, setIsDarkMood] = useState(false);

  useEffect(() => {
    const themeStored = localStorage.getItem("theme");

    if (themeStored === "dark") {
      setIsDarkMood(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMood(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const darkMoodFunction = () => {
    if (isDarkMood) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMood(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMood(true);
    }
  };

  return (
    <button onClick={darkMoodFunction} className={cn("fixed max-sm:hidden top-3 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
      {isDarkMood ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-500" />}
    </button>
  );
}
