import { useState, useEffect, useRef } from "react"

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)

          // Opcionalmente, dejar de observar después de que el elemento esté en vista
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsInView(false)
        }
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold || 0.1,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.root, options.rootMargin, options.threshold, options.once])

  return [ref, isInView]
}

