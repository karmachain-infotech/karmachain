"use client"

import { Button } from "@/components/ui/button"
import { FloatingElement } from "@/components/floating-elements"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const texts = [
    "We Deliver exotic mobile games",
    "Bring reality into your ideas",
    "Create robust NFT",
    "Build innovative web and mobile apps",
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-gradient-x"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-2xl animate-float-fast"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-gradient-to-r from-pink-500/15 to-red-500/15 rounded-full blur-2xl animate-float-diagonal"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-balance bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient-x">
                Software Development Company
              </span>
            </h1>
          </div>

          <div
            className={`transform transition-all duration-1500 delay-300 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"}`}
          >
            <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
              <p className="text-balance transition-all duration-1000 ease-in-out transform hover:scale-105 animate-text-reveal">
                {texts[currentTextIndex]}
              </p>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1500 delay-500 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg transform hover:scale-110 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-500 hover:-translate-y-2 group animate-glow"
              >
                <Link href="/contact">
                  <span className="group-hover:animate-pulse">Let's Get Connected</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg bg-transparent hover:bg-accent hover:text-accent-foreground transform hover:scale-110 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 hover:-translate-y-2 group border-2 animate-border-glow"
              >
                <Link href="/portfolio">
                  <span className="group-hover:animate-pulse">View Our Work</span>
                </Link>
              </Button>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1500 delay-700 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"}`}
          >
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-125 transition-all duration-500 hover:-translate-y-2">
                <div className="text-3xl font-bold text-accent mb-2 animate-count-up hover:animate-bounce">500+</div>
                <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center group hover:scale-125 transition-all duration-500 hover:-translate-y-2 delay-100">
                <div
                  className="text-3xl font-bold text-accent mb-2 animate-count-up hover:animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  15+
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                  Years Experience
                </div>
              </div>
              <div className="text-center group hover:scale-125 transition-all duration-500 hover:-translate-y-2 delay-200">
                <div
                  className="text-3xl font-bold text-accent mb-2 animate-count-up hover:animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                >
                  200+
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                  Happy Clients
                </div>
              </div>
              <div className="text-center group hover:scale-125 transition-all duration-500 hover:-translate-y-2 delay-300">
                <div
                  className="text-3xl font-bold text-accent mb-2 animate-count-up hover:animate-bounce"
                  style={{ animationDelay: "0.6s" }}
                >
                  24/7
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingElement duration={4000} amplitude={20}>
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-pulse-glow"></div>
      </FloatingElement>
      <FloatingElement duration={5000} amplitude={25} delay={1000}>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-pulse-glow delay-500"></div>
      </FloatingElement>
      <FloatingElement duration={3500} amplitude={15} delay={500}>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-pulse-glow delay-1000"></div>
      </FloatingElement>
      <FloatingElement duration={6000} amplitude={30} delay={2000}>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse-glow delay-1500"></div>
      </FloatingElement>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-enhanced">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center animate-glow">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  )
}
