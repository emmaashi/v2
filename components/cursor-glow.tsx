"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null
  }

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={`w-[300px] h-[300px] rounded-full ${
          resolvedTheme === "dark" ? "bg-purple-500/20" : "bg-purple-400/15"
        } blur-3xl`}
      />
    </div>
  )
}

