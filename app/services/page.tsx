import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Code, Smartphone, Gamepad2, Users, CheckCircle, Star, ArrowRight, Zap, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Services - Karmachain Infotech",
  description:
    "Comprehensive software development services including web development, mobile apps, game development, and offshore development teams.",
}

const serviceDetails = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web development with modern technologies",
    features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development", "Cloud Deployment"],
    image: "/web-development-illustration.png",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    features: ["iOS Development", "Android Development", "React Native", "Flutter", "App Store Optimization"],
    image: "/mobile-app-development.png",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Engaging games across multiple platforms",
    features: ["Unity Development", "Unreal Engine", "2D/3D Games", "Mobile Games", "VR/AR Games"],
    image: "/game-development-illustration.jpg",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Users,
    title: "Offshore Development",
    description: "Dedicated development teams for your projects",
    features: ["Skilled Developers", "Project Management", "Quality Assurance", "24/7 Support", "Flexible Engagement"],
    image: "/offshore-developers-illustration.jpg",
    color: "from-orange-500/20 to-red-500/20",
  },
]

const processSteps = [
  {
    icon: Users,
    title: "Consultation",
    description: "We understand your requirements and goals",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our expert team builds your solution",
  },
  {
    icon: CheckCircle,
    title: "Testing",
    description: "Rigorous testing ensures quality delivery",
  },
  {
    icon: Zap,
    title: "Deployment",
    description: "Launch your project with ongoing support",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "10+ years of experience in software development",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We deliver projects on time, every time",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 support and maintenance services",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 animate-pulse">
              Professional Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient-x">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive software development solutions tailored to your business needs. From web applications to
              mobile apps, we deliver excellence at every step.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of development services designed to bring your ideas to life.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceDetails.map((service, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                <Card
                  className={`h-full border-border hover:border-accent/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-accent/10 bg-gradient-to-br ${service.color} backdrop-blur-sm`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <service.icon className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 opacity-0 animate-slide-in-left"
                          style={{
                            animationDelay: `${index * 200 + featureIndex * 100}ms`,
                            animationFillMode: "forwards",
                          }}
                        >
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach that ensures quality delivery and client satisfaction.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/40 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-glow">
                      <step.icon className="h-10 w-10 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold animate-bounce">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Karmachain?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver exceptional results.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 100}>
                <Card className="text-center h-full border-border hover:border-accent/50 transition-all duration-500 group hover:shadow-xl hover:shadow-accent/10 bg-gradient-to-br from-background to-accent/5">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full w-fit group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-glow">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale" className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Ideas into Reality?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your project requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
