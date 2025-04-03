import { useInView } from "../Hooks/useInView"

export function AnimatedElement({
  children,
  animation = "fade-up",
  delay = 0,
  duration = "normal",
  once = true,
  className = "",
  ...props
}) {
  const [ref, isInView] = useInView({ once })

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in"
      case "fade-up":
        return "animate-fade-up"
      case "scale-in":
        return "animate-scale-in"
      case "slide-in-right":
        return "animate-slide-in-right"
      case "slide-in-left":
        return "animate-slide-in-left"
      default:
        return "animate-fade-up"
    }
  }

  const getDelayClass = () => {
    if (delay === 0) return ""
    if (delay <= 100) return "animate-delay-100"
    if (delay <= 200) return "animate-delay-200"
    if (delay <= 300) return "animate-delay-300"
    if (delay <= 400) return "animate-delay-400"
    return "animate-delay-500"
  }

  const getDurationClass = () => {
    switch (duration) {
      case "fast":
        return "transition-custom-fast"
      case "slow":
        return "transition-custom-slow"
      default:
        return "transition-custom"
    }
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? getAnimationClass() : "opacity-0"} ${getDelayClass()} ${getDurationClass()}`}
      style={{
        animationPlayState: isInView ? "running" : "paused",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

