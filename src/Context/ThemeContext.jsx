import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Intentar obtener el tema del localStorage
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")

      // Si hay un tema guardado, usarlo
      if (savedTheme) {
        return savedTheme
      }

      // Si no hay tema guardado, verificar preferencia del sistema
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark"
      }
    }

    // Valor por defecto
    return "light"
  })

  useEffect(() => {
    // Actualizar el localStorage cuando cambie el tema
    localStorage.setItem("theme", theme)

    // Actualizar el atributo data-theme en el elemento html
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider")
  }

  return context
}

