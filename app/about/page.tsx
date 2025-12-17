import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Target, Globe, Shield, Heart, Lightbulb, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Target },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Team Members", icon: Award },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that drive business growth.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality",
      description:
        "Our commitment to excellence ensures every project meets the highest standards of quality and performance.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centric",
      description: "We put our clients first, building long-term partnerships based on trust and mutual success.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Creativity",
      description: "We combine technical expertise with creative thinking to solve complex business challenges.",
    },
  ]

  const team = [
    {
      name: "Rutvik Raval",
      role: "CEO & Founder",
      image: "/professional-ceo-portrait.png",
      description: "15+ years of experience in software development and business strategy.",
    },
    {
      name: "Kenil Raval",
      role: "CTO",
      image: "/professional-cto-portrait-female.png",
      description: "Expert in emerging technologies and technical architecture.",
    },
    // {
    //   name: "Amit Kumar",
    //   role: "Head of Development",
    //   image: "/professional-developer-portrait.png",
    //   description: "Leading our development teams with expertise in full-stack solutions.",
    // },
    // {
    //   name: "Sneha Gupta",
    //   role: "Design Director",
    //   image: "/professional-designer-portrait-female.jpg",
    //   description: "Creating beautiful and intuitive user experiences across all platforms.",
    // },
  ]

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
              About Karmachain Infotech
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient-x">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over 15 years, we've been at the forefront of digital innovation, helping businesses worldwide achieve
              their goals through cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
              >
                Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-transparent"
              >
                View Portfolio
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 100}>
                <div className="text-center group">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full w-fit group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
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

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Founded in 2024, Karmachain Infotech was born from a simple yet powerful vision — to empower businesses through
                  intelligent, human-centered technology. What began as a small team of innovators quickly evolved into a
                  forward-thinking technology company built on creativity, integrity, and a passion for impact.
                </p>
                <p className="leading-relaxed">
                  In a rapidly changing digital world, we’ve made it our mission to help organizations adapt, innovate,
                  and thrive. From crafting intuitive web and mobile solutions to building scalable enterprise systems and
                  AI-driven platforms, we bring ideas to life through technology that matters.
                </p>
                <p className="leading-relaxed">
                  Today, Karmachain Infotech stands as a trusted technology partner to startups, growing enterprises, and
                  global brands — helping them transform their vision into measurable success through strategy, design,
                  and innovation.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative group">
                <img
                  src="team.jpg"
                  alt="Our team at work"
                  className="rounded-lg shadow-lg w-full group-hover:shadow-2xl group-hover:shadow-accent/20 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 150}>
                <Card className="text-center hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="text-accent mb-4 flex justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-glow">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The visionary leaders driving innovation and excellence at Karmachain Infotech
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <Card className="text-center hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl group-hover:shadow-accent/20 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <Card className="p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full mr-3 group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  To empower businesses worldwide by delivering innovative, scalable, and reliable technology solutions
                  that drive growth, efficiency, and competitive advantage in the digital age.
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Card className="p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full mr-3 group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  To be the global leader in digital transformation, recognized for our innovation, quality, and
                  commitment to creating technology solutions that make a positive impact on businesses and society.
                </p>
              </Card>
            </ScrollReveal>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
