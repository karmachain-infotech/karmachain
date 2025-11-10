"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Zap, Component, Users, Code } from "lucide-react"

export default function VuePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">Vue.js Development Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Build progressive web applications with Vue.js - the approachable, versatile, and performant JavaScript
              framework that makes development enjoyable and productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Start Vue.js Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/portfolio">View Vue.js Apps</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vue Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Vue.js?</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Progressive Framework",
                description:
                  "Incrementally adoptable ecosystem that scales between a library and a full-featured framework.",
              },
              {
                icon: Component,
                title: "Component-Based",
                description: "Build encapsulated components with reactive data binding and composable architecture.",
              },
              {
                icon: Users,
                title: "Easy Learning Curve",
                description: "Gentle learning curve with excellent documentation and developer-friendly syntax.",
              },
              {
                icon: Code,
                title: "Excellent Tooling",
                description: "Vue CLI, Vue DevTools, and Vite for an outstanding development experience.",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 150}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit transform transition-all duration-300 hover:bg-accent/20 hover:scale-110 hover:rotate-6">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vue Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Vue.js Development Services</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Vue.js Applications",
                description: "Tailored Vue.js applications with modern architecture and best practices.",
                features: [
                  "Single Page Applications",
                  "Progressive Web Apps",
                  "Component Libraries",
                  "State Management",
                ],
              },
              {
                title: "Vue.js Migration",
                description: "Migrate your existing applications to Vue.js for better performance and maintainability.",
                features: ["Legacy Migration", "Performance Optimization", "Modern Tooling", "Testing Integration"],
              },
              {
                title: "Vue.js Consulting",
                description: "Expert guidance on Vue.js architecture, performance, and development best practices.",
                features: ["Architecture Review", "Performance Audit", "Code Quality", "Team Training"],
              },
            ].map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed mb-6 text-base text-center">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build with Vue.js?</h2>
            <p className="text-xl mb-8 opacity-90">Let's create progressive web applications with Vue.js.</p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="/contact">Start Vue.js Development</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
