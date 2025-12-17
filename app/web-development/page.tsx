import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Globe, Zap, Shield, Users } from "lucide-react"
import Image from "next/image";
import {
  ui_ux,
  Mobile,
  Customer,
  Frontend,
  Backend,
  SEO,
  Quality,
} from "../../components/assets";

const technologies = [
  { name: "React", logo: Frontend.React },
  // { name: "Next.js", logo: Frontend.React }, // You can replace this if you have a specific Next.js icon
  { name: "Vue.js", logo: Frontend.JavaScript }, // Replace this with Vue logo if available
  { name: "Angular", logo: Frontend.Angular },
  { name: "Node.js", logo: Backend.Node_js },
  { name: "Python", logo: Backend.Python },
]

const features = [
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized code and modern technologies for lightning-fast loading times and smooth user experience.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Built with security best practices and robust architecture for maximum reliability and data protection.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Intuitive interfaces designed with your users in mind, ensuring excellent user experience and engagement.",
  },
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with payment integration and inventory management",
    image: "/ecommerce-platform-showcase.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Corporate Website",
    description: "Professional business website with CMS and analytics integration",
    image: "/corporate-website-showcase.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "SaaS Dashboard",
    description: "Complex data visualization dashboard with real-time updates",
    image: "/saas-dashboard-showcase.jpg",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
  },
]

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">Web Development Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We help companies with unique and comprehensive web development services that empower you and your
              clients. From responsive websites to complex web applications, we deliver solutions that drive business
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Web Development?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional web solutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
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

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground">
              We work with the latest and most reliable web development technologies.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <Image
                      src={tech.logo }
                      alt={tech.name}
                      className="w-12 h-12 mx-auto mb-4 transition-transform duration-300 hover:scale-125"
                    />
                    <h3 className="font-semibold">{tech.name}</h3>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Explore some of our successful web development projects.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 150}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full transition-all duration-300 hover:bg-accent/20"
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

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Web Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your requirements and create something amazing together.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
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
