import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";

const ThemeButtons = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        variant="ghost"
        onClick={handleTheme}
        className="cursor-pointer transition-all duration-300 hover:bg-transparent"
      >
        {theme === "light" ? (
          <SunIcon className="size-6" />
        ) : (
          <MoonIcon className="size-6" />
        )}
      </Button>
    </div>
  );
};

export default ThemeButtons;
