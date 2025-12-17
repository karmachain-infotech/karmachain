"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "scale"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (direction) {
      case "up":
        return "animate-slide-in-up"
      case "left":
        return "animate-slide-in-left"
      case "right":
        return "animate-slide-in-right"
      case "scale":
        return "animate-scale-in"
      default:
        return "animate-slide-in-up"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
