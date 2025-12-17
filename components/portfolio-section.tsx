"use client"

import { useEffect, useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { portfolioItems as fallbackPortfolio } from "@/lib/portfolio-data"
import type { PortfolioItem } from "@/types/portfolio"

const baseCategories = ["All", "App Development", "Website Development"]

export function PortfolioSection() {
  const [items, setItems] = useState<PortfolioItem[]>(fallbackPortfolio)
  const [activeCategory, setActiveCategory] = useState(baseCategories[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  // useEffect(() => {
  //   const fetchPortfolio = async () => {
  //     try {
  //       const response = await fetch("/api/portfolio", { cache: "no-store" })
  //       const payload = await response.json()
  //       if (response.ok && Array.isArray(payload.data)) {
  //         setItems(payload.data)
  //       }
  //     } catch (error) {
  //       console.error("Failed to load portfolio highlights", error)
  //     }
  //   }

  //   fetchPortfolio()
  // }, [])

  const categoryOptions = useMemo(() => {
    const unique = new Set(baseCategories)
    items.forEach((item) => {
      if (item.category) unique.add(item.category)
    })
    return Array.from(unique)
  }, [items])

  useEffect(() => {
    if (!categoryOptions.includes(activeCategory) && categoryOptions.length) {
      setActiveCategory(categoryOptions[0])
    }
  }, [categoryOptions, activeCategory])

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return items
    return items.filter((item) => item.category === activeCategory)
  }, [items, activeCategory])

  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory, filteredItems.length])

  const nextSlide = () => {
    if (!filteredItems.length) return
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    if (!filteredItems.length) return
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Our Wall of Pride</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categoryOptions.map((category) => (
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
            {filteredItems.length ? (
              filteredItems.slice(currentIndex, currentIndex + 3).map((item, index) => (
                <Card key={`${item.slug}-${index}`} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || item.images?.[0] || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.shortDescription || item.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-muted-foreground">No projects available.</div>
            )}
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
