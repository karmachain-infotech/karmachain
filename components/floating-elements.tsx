"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface FloatingElementProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  amplitude?: number
}

export function FloatingElement({ children, duration = 3000, delay = 0, amplitude = 10 }: FloatingElementProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const startTime = Date.now() + delay

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = (elapsed % duration) / duration
      const newOffset = Math.sin(progress * Math.PI * 2) * amplitude
      setOffset(newOffset)
      requestAnimationFrame(animate)
    }

    const timeoutId = setTimeout(() => {
      animate()
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [duration, delay, amplitude])

  return (
    <div
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}
