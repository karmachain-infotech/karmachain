"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: boolean
  glowEffect?: boolean
}

export function InteractiveCard({
  children,
  className = "",
  hoverScale = true,
  glowEffect = false,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = "transition-all duration-300 ease-out cursor-pointer"
  const hoverClasses = hoverScale ? "hover:scale-105" : ""
  const glowClasses = glowEffect && isHovered ? "shadow-2xl shadow-accent/20" : ""

  return (
    <Card
      className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Card>
  )
}
