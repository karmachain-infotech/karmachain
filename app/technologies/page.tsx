import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Code, Database, Smartphone, Globe, Server, Zap, ArrowRight, TrendingUp } from "lucide-react"

const technologyCategories = [
  {
    icon: Globe,
    title: "Frontend Technologies",
    description: "Modern frontend frameworks and libraries for exceptional user experiences",
    technologies: [
      { name: "React", link: "/technologies/react", description: "Component-based UI library" },
      { name: "Vue.js", link: "/technologies/vue", description: "Progressive JavaScript framework" },
      { name: "Angular", link: "/technologies/angular", description: "Full-featured web framework" },
      { name: "Next.js", link: "/technologies/nextjs", description: "React production framework" },
    ],
  },
  {
    icon: Server,
    title: "Backend Technologies",
    description: "Robust server-side technologies for scalable applications",
    technologies: [
      { name: "Python", link: "/python-development", description: "Versatile programming language" },
      { name: "Django", link: "/django-development", description: "High-level Python web framework" },
      { name: "Node.js", link: "/technologies/nodejs", description: "JavaScript runtime environment" },
      { name: "PHP", link: "/technologies/php", description: "Server-side scripting language" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Technologies",
    description: "Cross-platform and native mobile development solutions",
    technologies: [
      { name: "iOS", link: "/ios-development", description: "Native iOS app development" },
      { name: "Android", link: "/technologies/android", description: "Native Android development" },
      { name: "React Native", link: "/technologies/react-native", description: "Cross-platform mobile apps" },
      { name: "Flutter", link: "/technologies/flutter", description: "Google's UI toolkit" },
    ],
  },
  {
    icon: Database,
    title: "Database Technologies",
    description: "Modern database solutions for data management and storage",
    technologies: [
      { name: "MongoDB", link: "/technologies/mongodb", description: "NoSQL document database" },
      { name: "PostgreSQL", link: "/technologies/postgresql", description: "Advanced relational database" },
      { name: "MySQL", link: "/technologies/mysql", description: "Popular relational database" },
      { name: "Redis", link: "/technologies/redis", description: "In-memory data structure store" },
    ],
  },
  {
    icon: Zap,
    title: "Cloud & DevOps",
    description: "Cloud platforms and DevOps tools for modern deployment",
    technologies: [
      { name: "AWS", link: "/technologies/aws", description: "Amazon Web Services" },
      { name: "Docker", link: "/technologies/docker", description: "Containerization platform" },
      { name: "Kubernetes", link: "/technologies/kubernetes", description: "Container orchestration" },
      { name: "CI/CD", link: "/technologies/cicd", description: "Continuous integration/deployment" },
    ],
  },
  {
    icon: Code,
    title: "Emerging Technologies",
    description: "Cutting-edge technologies for future-ready applications",
    technologies: [
      { name: "AI/ML", link: "/technologies/ai-ml", description: "Artificial Intelligence & Machine Learning" },
      { name: "Blockchain", link: "/technologies/blockchain", description: "Distributed ledger technology" },
      { name: "IoT", link: "/technologies/iot", description: "Internet of Things solutions" },
      { name: "AR/VR", link: "/technologies/ar-vr", description: "Augmented & Virtual Reality" },
    ],
  },
]

export default function TechnologiesPage() {
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
              Cutting-Edge Technologies
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient-x">
              <span className="text-balance">Our Technology Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We leverage cutting-edge technologies and proven frameworks to build scalable, secure, and
              high-performance applications that drive business success.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
            >
              <Link href="/contact">Discuss Your Tech Stack</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technology Categories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of technologies across different domains and platforms.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {technologyCategories.map((category, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 150}>
                <Card className="hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-glow">
                        <category.icon className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-2 group-hover:text-foreground transition-colors duration-300">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.technologies.map((tech, techIndex) => (
                        <Link key={techIndex} href={tech.link} className="group/tech">
                          <div
                            className="p-4 border rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 opacity-0 animate-slide-in-up"
                            style={{
                              animationDelay: `${index * 150 + techIndex * 100}ms`,
                              animationFillMode: "forwards",
                            }}
                          >
                            <h4 className="font-semibold text-foreground group-hover/tech:text-accent transition-colors duration-300 flex items-center justify-between">
                              {tech.name}
                              <ArrowRight className="h-4 w-4 opacity-0 group-hover/tech:opacity-100 group-hover/tech:translate-x-1 transition-all duration-300" />
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1 group-hover/tech:text-foreground transition-colors duration-300">
                              {tech.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Technology Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Years of experience across diverse technology stacks and platforms
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Technologies Mastered", icon: Code },
              { number: "500+", label: "Projects Delivered", icon: TrendingUp },
              { number: "8+", label: "Years Experience", icon: Globe },
              { number: "100%", label: "Client Satisfaction", icon: Zap },
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 100}>
                <div className="text-center group">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full w-fit group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build with Modern Technologies?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss the perfect technology stack for your next project.</p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
