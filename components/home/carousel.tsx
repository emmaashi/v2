"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  speed?: number
  height?: number
  width?: number
}

export default function ImageCarousel({ images, speed = 20, height = 180, width = 270 }: CarouselProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const duplicatedImages = [...images, ...images]

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
    setHoveredIndex(null)
  }

  // handle image hover
  const handleImageHover = (index: number) => {
    setHoveredIndex(index)
  }

  // reset animation when it completes
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleAnimationEnd = () => {
      container.style.animation = "none"
      // force reflow
      void container.offsetWidth
      container.style.animation = `scroll ${speed}s linear infinite`
    }

    container.addEventListener("animationend", handleAnimationEnd)

    return () => {
      container.removeEventListener("animationend", handleAnimationEnd)
    }
  }, [speed])

  return (
    <div
      className="w-full overflow-hidden my-8 relative"
      style={{ height: `${height}px` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div
        ref={containerRef}
        className="flex items-center gap-4 absolute"
        style={{
          animation: `scroll ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 transition-all duration-300 transform"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              filter: hoveredIndex === index ? "brightness(1.1) contrast(1.1)" : "brightness(0.8) contrast(0.9)",
              transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
              zIndex: hoveredIndex === index ? 10 : 1,
            }}
            onMouseEnter={() => handleImageHover(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={width}
              height={height}
              className="rounded-md object-cover shadow-md w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
