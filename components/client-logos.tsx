"use client"

import { useEffect, useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedCounter } from "@/components/animated-counter"

const clientLogos = [
  { name: "Upwork", logo: "/upwork-logo.png" },
  { name: "Clutch", logo: "/clutch-logo.png" },
  { name: "GoodFirms", logo: "/goodfirms-logo.jpg" },
  { name: "AppFutura", logo: "/appfutura-logo.jpg" },
  { name: "DesignRush", logo: "/designrush-logo.jpg" },
  { name: "TopDevelopers", logo: "/topdevelopers-logo.jpg" },
]

export function ClientLogos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Over 140+ Satisfied Clients Have Chosen Us as Their Trusted Partner
          </h2>
        </ScrollAnimation>

        {/* Desktop View - All logos visible */}
        <ScrollAnimation direction="fade" delay={300}>
          <div className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12 opacity-80">
            {/* {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 transform hover:scale-110 transition-all duration-300 hover:opacity-100"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-8 lg:h-10 w-auto filter brightness-0 invert"
                />
              </div>
            ))} */}
          </div>
        </ScrollAnimation>

        {/* Mobile View - Carousel */}
        {/* <div className="md:hidden flex justify-center">
          <div className="relative w-48 h-12 flex items-center justify-center">
            <img
              src={clientLogos[currentIndex].logo || "/placeholder.svg"}
              alt={clientLogos[currentIndex].name}
              className="h-8 w-auto filter brightness-0 invert transition-all duration-500 transform hover:scale-110"
            />
          </div>
        </div> */}

        <ScrollAnimation direction="up" delay={500}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <div className="text-sm opacity-80">Years in Industry</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter end={2} suffix="x" />
              </div>
              <div className="text-sm opacity-80">Growth Rate</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm opacity-80">Expert Professionals</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-sm opacity-80">Projects Delivered</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
