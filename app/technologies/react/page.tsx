import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Component, Zap, Users, Code } from "lucide-react"

export default function ReactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">React Development Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Build dynamic, interactive user interfaces with React - the most popular JavaScript library for creating
              modern web applications with exceptional performance and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Start React Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/portfolio">View React Apps</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* React Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose React?</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Component,
                title: "Component-Based",
                description: "Build encapsulated components that manage their own state for better maintainability.",
              },
              {
                icon: Zap,
                title: "Virtual DOM",
                description: "Efficient updates and rendering with React's virtual DOM for optimal performance.",
              },
              {
                icon: Users,
                title: "Large Community",
                description: "Extensive ecosystem with thousands of libraries and active community support.",
              },
              {
                icon: Code,
                title: "Developer Tools",
                description: "Excellent debugging tools and development experience with hot reloading.",
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

      {/* React Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our React Development Services</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom React Applications",
                description: "Tailored React applications built to meet your specific business requirements.",
                features: ["Custom Components", "State Management", "API Integration", "Responsive Design"],
              },
              {
                title: "React Migration Services",
                description: "Migrate your existing applications to React for better performance and maintainability.",
                features: ["Legacy Code Migration", "Performance Optimization", "Modern Architecture", "Testing Setup"],
              },
              {
                title: "React Consulting",
                description: "Expert guidance on React best practices, architecture, and performance optimization.",
                features: ["Code Review", "Architecture Planning", "Performance Audit", "Team Training"],
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build with React?</h2>
            <p className="text-xl mb-8 opacity-90">Let's create powerful, interactive web applications with React.</p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="/contact">Start React Development</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
