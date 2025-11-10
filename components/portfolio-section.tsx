"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const portfolioCategories = ["App Development", "Game Development", "Website Development", "Art & Animation"]

const portfolioItems = [
  {
    title: "E-commerce Mobile App",
    category: "App Development",
    image: "/ecommerce-mobile-app-screenshot.jpg",
    description: "Feature-rich shopping app with seamless user experience",
  },
  {
    title: "Adventure Game",
    category: "Game Development",
    image: "/adventure-game-screenshot.jpg",
    description: "Immersive 3D adventure game with stunning graphics",
  },
  {
    title: "Corporate Website",
    category: "Website Development",
    image: "/corporate-website-design.png",
    description: "Modern responsive website with clean design",
  },
  {
    title: "Character Animation",
    category: "Art & Animation",
    image: "/character-animation-artwork.jpg",
    description: "High-quality 2D character animations",
  },
  {
    title: "Banking App",
    category: "App Development",
    image: "/banking-mobile-app-interface.jpg",
    description: "Secure banking application with modern UI",
  },
  {
    title: "Racing Game",
    category: "Game Development",
    image: "/intense-street-race.png",
    description: "High-speed racing game with realistic physics",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("App Development")
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Our Wall of Pride</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setCurrentIndex(0)
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-card text-card-foreground hover:bg-accent/10 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.slice(currentIndex, currentIndex + 3).map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>  
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          {filteredItems.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card border border-border rounded-full p-2 shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card border border-border rounded-full p-2 shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View the entire portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
