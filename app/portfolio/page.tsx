import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { ExternalLink, Calendar, Users, Star, Filter, TrendingUp, Award, Target } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "FinTech Mobile Banking App",
    description: "Comprehensive mobile banking solution with advanced security features and intuitive user experience.",
    category: "Mobile App",
    industry: "Finance",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    image: "/portfolio-fintech-app.jpg",
    year: "2024",
    client: "SecureBank",
    rating: 4.9,
    users: "500K+",
    featured: true,
    slug: "fintech-mobile-banking-app",
  },
  {
    id: 2,
    title: "E-commerce Platform with AI Recommendations",
    description:
      "Modern e-commerce platform featuring AI-powered product recommendations and seamless checkout experience.",
    category: "Web Development",
    industry: "E-commerce",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    image: "/portfolio-ecommerce-platform.jpg",
    year: "2024",
    client: "ShopSmart",
    rating: 4.8,
    users: "1M+",
    featured: true,
    slug: "ai-ecommerce-platform",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare management system for hospitals with patient records and appointment scheduling.",
    category: "Web Development",
    industry: "Healthcare",
    technologies: ["Django", "React", "PostgreSQL", "Docker"],
    image: "/portfolio-healthcare-system.jpg",
    year: "2023",
    client: "MediCare Plus",
    rating: 4.9,
    users: "50K+",
    featured: true,
    slug: "healthcare-management-system",
  },
  {
    id: 4,
    title: "Real Estate Mobile App",
    description: "Property search and management app with virtual tours and mortgage calculator features.",
    category: "Mobile App",
    industry: "Real Estate",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    image: "/portfolio-real-estate-app.jpg",
    year: "2023",
    client: "PropertyHub",
    rating: 4.7,
    users: "200K+",
    slug: "real-estate-mobile-app",
  },
  {
    id: 5,
    title: "Educational Learning Platform",
    description: "Interactive online learning platform with video courses, quizzes, and progress tracking.",
    category: "Web Development",
    industry: "Education",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    image: "/portfolio-education-platform.jpg",
    year: "2023",
    client: "EduTech Solutions",
    rating: 4.8,
    users: "300K+",
    slug: "educational-learning-platform",
  },
  {
    id: 6,
    title: "Food Delivery Mobile App",
    description: "On-demand food delivery app with real-time tracking and multiple payment options.",
    category: "Mobile App",
    industry: "Food & Beverage",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    image: "/portfolio-food-delivery-app.jpg",
    year: "2023",
    client: "QuickEats",
    rating: 4.6,
    users: "800K+",
    slug: "food-delivery-mobile-app",
  },
  {
    id: 7,
    title: "Adventure Racing Game",
    description: "Thrilling 3D adventure racing game with multiplayer support and stunning graphics.",
    category: "Game Development",
    industry: "Gaming",
    technologies: ["Unity", "C#", "Photon", "Firebase"],
    image: "/portfolio-racing-game.jpg",
    year: "2024",
    client: "GameStudio Pro",
    rating: 4.7,
    users: "2M+",
    slug: "adventure-racing-game",
  },
  {
    id: 8,
    title: "IoT Smart Home Dashboard",
    description: "Comprehensive IoT dashboard for smart home automation and device management.",
    category: "Web Development",
    industry: "IoT",
    technologies: ["React", "Python", "MQTT", "InfluxDB"],
    image: "/portfolio-iot-dashboard.jpg",
    year: "2024",
    client: "SmartHome Tech",
    rating: 4.8,
    users: "100K+",
    slug: "iot-smart-home-dashboard",
  },
]

const categories = ["All", "Web Development", "Mobile App", "Game Development"]
const industries = [
  "All",
  "Finance",
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Education",
  "Food & Beverage",
  "Gaming",
  "IoT",
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 animate-pulse">
              Our Success Stories
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient-x">
              <span className="text-balance">Our Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our diverse portfolio of successful projects across various industries. From mobile apps to web
              platforms and games, we've delivered innovative solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-transparent"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: Target },
              { number: "200+", label: "Happy Clients", icon: Users },
              { number: "50+", label: "Industries Served", icon: TrendingUp },
              { number: "8+", label: "Years Experience", icon: Award },
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 100}>
                <div className="text-center group">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full w-fit group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Filter Projects</h2>
              <Button
                variant="outline"
                size="sm"
                className="transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Badge
                      key={index}
                      variant={index === 0 ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 animate-slide-in-left"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Industry</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry, index) => (
                    <Badge
                      key={index}
                      variant={index === 0 ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 animate-slide-in-right"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Highlighting our most successful and innovative projects that showcase our expertise.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfolioItems
              .filter((item) => item.featured)
              .map((project, index) => (
                <ScrollReveal key={project.id} direction="up" delay={index * 150}>
                  <Card className="overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg?height=300&width=500"}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-accent text-accent-foreground animate-slide-in-left">
                          {project.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="animate-slide-in-left"
                          style={{ animationDelay: "100ms" }}
                        >
                          {project.industry}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2 animate-slide-in-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current animate-pulse" />
                          <span className="text-sm font-medium">{project.rating}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Users className="h-4 w-4" />
                          <span>{project.users} users</span>
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Client: {project.client}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs animate-slide-in-up"
                            style={{
                              animationDelay: `${techIndex * 100}ms`,
                              animationFillMode: "forwards",
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs animate-slide-in-up"
                            style={{
                              animationDelay: "300ms",
                              animationFillMode: "forwards",
                            }}
                          >
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 transform hover:scale-105 transition-all duration-300"
                        >
                          <Link href={`/portfolio/${project.slug}`}>View Details</Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="transform hover:scale-105 transition-all duration-300 bg-transparent"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">All Projects</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((project, index) => (
              <ScrollReveal key={project.id} direction="scale" delay={index * 50}>
                <Card className="overflow-hidden hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg?height=200&width=350"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs animate-slide-in-left">
                      {project.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
                      <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2 group-hover:text-foreground transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300">
                      <span>{project.industry}</span>
                      <span>{project.year}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs animate-slide-in-up"
                          style={{
                            animationDelay: `${techIndex * 100}ms`,
                            animationFillMode: "forwards",
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs animate-slide-in-up"
                          style={{
                            animationDelay: "200ms",
                            animationFillMode: "forwards",
                          }}
                        >
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More */}
          <ScrollReveal direction="scale" delay={400} className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Load More Projects</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent via-accent/90 to-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Join our list of satisfied clients.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
