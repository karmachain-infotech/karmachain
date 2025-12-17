import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Server, Zap, Globe, Database } from "lucide-react"

export default function NodeJSPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">Node.js Development Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Build scalable, high-performance server-side applications with Node.js - the JavaScript runtime that
              enables full-stack development with a single programming language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Start Node.js Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Node.js Apps</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Node.js Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Node.js?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "High Performance",
                description:
                  "Non-blocking I/O and event-driven architecture for exceptional performance and scalability.",
              },
              {
                icon: Server,
                title: "Full-Stack JavaScript",
                description: "Use JavaScript for both frontend and backend development for consistency and efficiency.",
              },
              {
                icon: Globe,
                title: "Rich Ecosystem",
                description: "Access to npm's vast library of packages and modules for rapid development.",
              },
              {
                icon: Database,
                title: "Real-time Applications",
                description: "Perfect for building real-time applications like chat apps, gaming, and live updates.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Node.js Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Node.js Development Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "API Development",
                description: "Build robust RESTful APIs and GraphQL services with Node.js and Express.js.",
                features: [
                  "REST API Development",
                  "GraphQL Implementation",
                  "Authentication & Authorization",
                  "API Documentation",
                ],
              },
              {
                title: "Real-time Applications",
                description: "Create real-time applications with WebSocket connections and live data updates.",
                features: ["Chat Applications", "Live Notifications", "Real-time Analytics", "Collaborative Tools"],
              },
              {
                title: "Microservices Architecture",
                description: "Design and implement scalable microservices architecture with Node.js.",
                features: [
                  "Service Decomposition",
                  "Inter-service Communication",
                  "Load Balancing",
                  "Container Deployment",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
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
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build with Node.js?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create scalable, high-performance backend solutions with Node.js.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Node.js Development</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
