import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Apple, Shield, Zap, Users, Star } from "lucide-react"

const iosFeatures = [
  {
    icon: Apple,
    title: "Native iOS Development",
    description: "Built specifically for iOS using Swift and Objective-C for optimal performance and user experience.",
  },
  {
    icon: Shield,
    title: "App Store Compliance",
    description: "Apps developed following Apple's strict guidelines ensuring smooth App Store approval process.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized code and efficient memory management for smooth, responsive iOS applications.",
  },
  {
    icon: Users,
    title: "Intuitive UI/UX",
    description: "Following Apple's Human Interface Guidelines for consistent and intuitive user experiences.",
  },
]

const iosServices = [
  {
    title: "iPhone App Development",
    description: "Custom iPhone applications tailored to your business needs and user requirements.",
    features: ["Custom UI/UX Design", "Core Data Integration", "Push Notifications", "In-App Purchases"],
  },
  {
    title: "iPad App Development",
    description: "Tablet-optimized applications that take advantage of iPad's larger screen and capabilities.",
    features: ["Split View Support", "Apple Pencil Integration", "Multitasking Features", "Responsive Design"],
  },
  {
    title: "Apple Watch Apps",
    description: "Companion apps for Apple Watch with health and fitness integrations.",
    features: ["HealthKit Integration", "WatchOS Complications", "Haptic Feedback", "Voice Commands"],
  },
]

export default function IOSDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">iOS App Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Create stunning, high-performance iOS applications that delight users and drive business growth. Our
              expert iOS developers build native apps using the latest Apple technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Start iOS Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View iOS Apps</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* iOS Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose iOS Development?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              iOS apps offer premium user experiences and access to a high-value user base with strong purchasing power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iosFeatures.map((feature, index) => (
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

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our iOS Development Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {iosServices.map((service, index) => (
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

      {/* iOS Apps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured iOS Apps</h2>
            <p className="text-lg text-muted-foreground">
              Explore some of our successful iOS app development projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fitness Tracker Pro",
                description: "Comprehensive fitness app with workout tracking and health monitoring",
                image: "/ios-fitness-app.jpg",
                rating: 4.8,
                downloads: "100K+",
                category: "Health & Fitness",
              },
              {
                title: "Food Delivery Express",
                description: "On-demand food delivery app with real-time tracking and payments",
                image: "/ios-food-delivery-app.jpg",
                rating: 4.6,
                downloads: "250K+",
                category: "Food & Drink",
              },
              {
                title: "Smart Home Controller",
                description: "IoT home automation app with voice control and scheduling",
                image: "/ios-smart-home-app.jpg",
                rating: 4.9,
                downloads: "75K+",
                category: "Utilities",
              },
            ].map((app, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img src={app.image || "/placeholder.svg"} alt={app.title} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                    {app.downloads}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{app.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-muted-foreground">{app.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">{app.description}</p>
                  <span className="text-sm text-accent">{app.category}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">iOS Development Technologies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Swift", logo: "/placeholder.svg?height=60&width=60" },
              { name: "Objective-C", logo: "/placeholder.svg?height=60&width=60" },
              { name: "Xcode", logo: "/placeholder.svg?height=60&width=60" },
              { name: "Core Data", logo: "/placeholder.svg?height=60&width=60" },
              { name: "CloudKit", logo: "/placeholder.svg?height=60&width=60" },
              { name: "TestFlight", logo: "/placeholder.svg?height=60&width=60" },
            ].map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-semibold">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your iOS App?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create an exceptional iOS application that stands out in the App Store.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start iOS Development</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
