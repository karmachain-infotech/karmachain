"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Frontend,
  Backend,
  Mobile,
  SEO,
  Quality,
  Customer,
} from "./assets";

const technologyCategories = ["Frontend", "Backend", "Mobile", "SEO"]

const technologies = {
  Frontend: [
    { name: "HTML", logo: Frontend.HTML },
    { name: "CSS", logo: Frontend.CSS },
    { name: "Angular", logo: Frontend.Angular },
    { name: "JavaScript", logo: Frontend.JavaScript },
    { name: "JQuery", logo: Frontend.Jquery },
    { name: "React", logo: Frontend.React },
  ],
  Backend: [
    { name: "Node.js", logo: Backend.Node_js },
    { name: "Python", logo: Backend.Python },
    { name: ".NET", logo: Backend.Dot_Net },
    { name: "C++", logo: Backend.Cplus },
    { name: "WordPress", logo: Backend.Wordpress },
    { name: "Shopify", logo: Backend.Shopify },
  ],
  Mobile: [
    { name: "Kotlin", logo: Mobile.Kotlin },
    { name: "Xamarin", logo: Mobile.Xamarin },
    { name: "React Native", logo: Mobile.React_Native },
    { name: "Flutter", logo: Mobile.Flutter },
    { name: "Swift", logo: Mobile.Swift },
  ],
  SEO: [
    { name: "Screaming Frog", logo: SEO.Screaming_frog },
    { name: "Google Search Console", logo: SEO.Google_search },
    { name: "Google Trends", logo: SEO.Google_Trends },
    { name: "Google Analytics", logo: SEO.Google_Analytics },
    { name: "SEO SpyGlass", logo: SEO.SEO_spyGlass },
  ],
}

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend")

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Technologies We Work With</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologyCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {technologies[activeCategory as keyof typeof technologies].map((tech, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  {tech.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/technologies">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
