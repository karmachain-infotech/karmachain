import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Smartphone, Apple, HandCoins as Android, Zap, Shield, Users, Star } from "lucide-react"

const platforms = [
  {
    icon: Apple,
    title: "iOS Development",
    description: "Native iOS apps using Swift and Objective-C for optimal performance and user experience.",
    technologies: ["Swift", "Objective-C", "Xcode", "Core Data"],
  },
  {
    icon: Android,
    title: "Android Development",
    description: "Native Android apps using Kotlin and Java with Material Design principles.",
    technologies: ["Kotlin", "Java", "Android Studio", "Firebase"],
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Hybrid apps using React Native and Flutter for faster development and deployment.",
    technologies: ["React Native", "Flutter", "Dart", "Expo"],
  },
]

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized code and efficient architecture for smooth, fast mobile experiences.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and robust testing for maximum reliability.",
  },
  {
    icon: Users,
    title: "User-Friendly",
    description: "Intuitive interfaces designed for excellent mobile user experience and engagement.",
  },
  {
    icon: Star,
    title: "App Store Ready",
    description: "Apps built to meet all App Store and Google Play Store guidelines and requirements.",
  },
]

const appProjects = [
  {
    title: "E-commerce Shopping App",
    description: "Full-featured shopping app with payment integration and order tracking",
    image: "/ecommerce-mobile-app-screenshot.jpg",
    category: "E-commerce",
    downloads: "50K+",
  },
  {
    title: "Fitness Tracking App",
    description: "Health and fitness app with workout plans and progress tracking",
    image: "/fitness-tracking-app-interface.jpg",
    category: "Health & Fitness",
    downloads: "100K+",
  },
  {
    title: "Banking Mobile App",
    description: "Secure banking app with biometric authentication and real-time transactions",
    image: "/banking-mobile-app-interface.jpg",
    category: "Finance",
    downloads: "200K+",
  },
]

export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">Mobile App Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We can assist you with user-friendly, interactive and feature-rich mobile app development services to
              enable your digital growth. From iOS to Android and cross-platform solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Start Your App</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/portfolio">View App Portfolio</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Mobile Platforms We Support</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We develop apps for all major mobile platforms using the latest technologies and best practices.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit transform transition-all duration-300 hover:bg-accent/20 hover:scale-110 hover:rotate-6">
                      <platform.icon className="h-10 w-10 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{platform.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed mb-6">{platform.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {platform.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full transition-all duration-300 hover:bg-accent/10 hover:text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Mobile Development?</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 150}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit transform transition-all duration-300 hover:bg-accent/20 hover:scale-110">
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

      {/* App Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Mobile Apps</h2>
            <p className="text-lg text-muted-foreground">
              Explore some of our successful mobile app development projects.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appProjects.map((project, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 150}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm animate-pulse">
                      {project.downloads}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your idea into a successful mobile application that users will love.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="/contact">Start Development</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
