import { useTheme } from "../Context/ThemeContext"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full-custom bg-background-alt hover:bg-background-alt/80 transition-custom ${className}`}
      aria-label={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
    >
      {theme === "light" ? <Moon className="h-5 w-5 text-gray-800" /> : <Sun className="h-5 w-5 text-gray-200" />}
    </button>
  )
}
