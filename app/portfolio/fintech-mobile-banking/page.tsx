import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Users, Star, Shield, Smartphone, CreditCard, BarChart3 } from "lucide-react"

export default function FinTechAppPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Project Header */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link href="/portfolio" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-accent text-accent-foreground">Mobile App</Badge>
                  <Badge variant="secondary">Finance</Badge>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                  FinTech Mobile Banking App
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A comprehensive mobile banking solution featuring advanced security, intuitive user experience, and
                  cutting-edge financial technology to revolutionize digital banking.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span className="font-medium">Year</span>
                    </div>
                    <p className="text-muted-foreground">2024</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span className="font-medium">Users</span>
                    </div>
                    <p className="text-muted-foreground">500K+ Active Users</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-5 w-5 text-accent" />
                      <span className="font-medium">Rating</span>
                    </div>
                    <p className="text-muted-foreground">4.9/5 App Store Rating</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      <span className="font-medium">Client</span>
                    </div>
                    <p className="text-muted-foreground">SecureBank</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact">Start Similar Project</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/portfolio-fintech-app.jpg"
                  alt="FinTech Mobile Banking App"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                SecureBank approached us to develop a next-generation mobile banking app that would set new standards
                for security, usability, and feature richness in the financial technology sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Advanced Security",
                  description: "Multi-layer security with biometric authentication, encryption, and fraud detection.",
                },
                {
                  icon: Smartphone,
                  title: "Intuitive Design",
                  description: "User-friendly interface designed for seamless banking experience across all devices.",
                },
                {
                  icon: CreditCard,
                  title: "Complete Banking",
                  description: "Full suite of banking services including transfers, payments, and account management.",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Insights",
                  description: "Personal finance insights and spending analytics to help users manage their money.",
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
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Key Features</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Core Banking Features</h3>
                <div className="space-y-4">
                  {[
                    "Account balance and transaction history",
                    "Money transfers and bill payments",
                    "Mobile check deposit",
                    "ATM and branch locator",
                    "Card management and controls",
                    "Loan applications and management",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Advanced Features</h3>
                <div className="space-y-4">
                  {[
                    "Biometric authentication (Face ID, Touch ID)",
                    "Real-time fraud detection and alerts",
                    "Personal finance management tools",
                    "Investment portfolio tracking",
                    "Cryptocurrency wallet integration",
                    "AI-powered spending insights",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technology Stack</h2>
              <p className="text-lg text-muted-foreground">
                Built with cutting-edge technologies to ensure performance, security, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["React Native", "TypeScript", "Redux Toolkit", "React Navigation"].map((tech, index) => (
                      <Badge key={index} variant="outline" className="w-full justify-center">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Node.js", "Express.js", "JWT Authentication", "Socket.io"].map((tech, index) => (
                      <Badge key={index} variant="outline" className="w-full justify-center">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["AWS", "MongoDB", "Redis", "Docker"].map((tech, index) => (
                      <Badge key={index} variant="outline" className="w-full justify-center">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Results & Impact</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "500K+", label: "Active Users" },
                { number: "4.9/5", label: "App Store Rating" },
                { number: "99.9%", label: "Uptime" },
                { number: "40%", label: "Increase in Digital Adoption" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 p-8 rounded-lg">
              <blockquote className="text-center">
                <p className="text-xl text-foreground mb-4 italic">
                  "Karmachain delivered an exceptional mobile banking app that exceeded our expectations. The user
                  experience is seamless, and the security features give our customers complete confidence."
                </p>
                <footer className="text-muted-foreground">
                  <strong>John Smith</strong>, CTO at SecureBank
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your FinTech App?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a secure, user-friendly financial application that drives business growth.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Your FinTech Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
