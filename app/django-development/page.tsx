import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Code, Shield, Zap, Database, Users, Globe } from "lucide-react"

const djangoFeatures = [
  {
    icon: Shield,
    title: "Built-in Security",
    description:
      "Django comes with robust security features including CSRF protection, SQL injection prevention, and user authentication.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Django's 'batteries included' philosophy and DRY principle enable faster development with less code.",
  },
  {
    icon: Database,
    title: "ORM & Database",
    description: "Powerful Object-Relational Mapping (ORM) that works with multiple databases seamlessly.",
  },
  {
    icon: Users,
    title: "Admin Interface",
    description: "Automatic admin interface generation for content management and data administration.",
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    description: "Built to handle high-traffic applications with excellent scalability and performance optimization.",
  },
  {
    icon: Code,
    title: "Clean Code Structure",
    description: "MTV (Model-Template-View) architecture promotes clean, maintainable, and reusable code.",
  },
]

const djangoServices = [
  {
    title: "Web Application Development",
    description: "Full-stack web applications with Django backend and modern frontend frameworks.",
    features: ["Custom Web Apps", "E-commerce Platforms", "Content Management Systems", "Social Networks"],
  },
  {
    title: "API Development",
    description: "RESTful APIs and GraphQL endpoints using Django REST Framework.",
    features: ["REST APIs", "GraphQL APIs", "API Documentation", "Authentication & Authorization"],
  },
  {
    title: "Database Design & Migration",
    description: "Database architecture, optimization, and seamless data migration services.",
    features: ["Database Design", "Data Migration", "Performance Optimization", "Backup Solutions"],
  },
]

export default function DjangoDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">Django Development Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Build powerful, secure, and scalable web applications with Django - the web framework for perfectionists
              with deadlines. Our expert Django developers create robust solutions that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Start Django Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Django Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Django Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Django?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {djangoFeatures.map((feature, index) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Django Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {djangoServices.map((service, index) => (
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

      {/* Django Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Django Success Stories</h2>
            <p className="text-lg text-muted-foreground">Explore some of our successful Django development projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-learning Platform",
                description:
                  "Comprehensive online learning management system with course creation and student tracking",
                image: "https://user-images.githubusercontent.com/59178005/113218277-dde11000-929c-11eb-80a0-e17baa1c1a0f.png",
                features: ["User Management", "Course Creation", "Progress Tracking", "Payment Integration"],
              },
              {
                title: "Healthcare Management",
                description: "Patient management system with appointment scheduling and medical records",
                image: "https://phpgurukul.com/wp-content/uploads/2024/07/Hospital-Management-System-Dashboard-1024x486.png",
                features: ["Patient Records", "Appointment System", "Billing Integration", "Report Generation"],
              },
              {
                title: "E-commerce Marketplace",
                description: "Multi-vendor marketplace with advanced search and recommendation engine",
                image: "https://s3-alpha.figma.com/hub/file/4428693666/616bf232-3656-46a0-915a-438b45334924-cover.png",
                features: ["Multi-vendor Support", "Advanced Search", "Payment Gateway", "Order Management"],
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Django Technology Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Django", logo: "/placeholder.svg?height=60&width=60" },
              { name: "Python", logo: "/placeholder.svg?height=60&width=60" },
              { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=60" },
              { name: "Redis", logo: "/placeholder.svg?height=60&width=60" },
              { name: "Celery", logo: "/placeholder.svg?height=60&width=60" },
              { name: "Docker", logo: "/placeholder.svg?height=60&width=60" },
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
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build with Django?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a powerful, secure, and scalable web application with Django.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Your Django Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
