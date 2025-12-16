import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Code, Database, Brain, Cloud, Shield, Zap } from "lucide-react"

const pythonServices = [
  {
    icon: Code,
    title: "Web Development",
    description: "Build robust web applications using Django, Flask, and FastAPI frameworks.",
    technologies: ["Django", "Flask", "FastAPI", "Tornado"],
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description: "Advanced data analysis, visualization, and machine learning solutions.",
    technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "Intelligent applications with ML models and AI-powered features.",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    icon: Cloud,
    title: "API Development",
    description: "RESTful APIs and microservices for scalable backend solutions.",
    technologies: ["REST API", "GraphQL", "Microservices", "Docker"],
  },
]

const pythonFeatures = [
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Python's simplicity and extensive libraries enable faster development cycles.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built-in security features and robust error handling for production-ready applications.",
  },
  {
    icon: Database,
    title: "Data Processing",
    description: "Excellent for data manipulation, analysis, and big data processing tasks.",
  },
  {
    icon: Cloud,
    title: "Scalable Solutions",
    description: "Easily scalable applications that grow with your business needs.",
  },
]

export default function PythonDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">Python Development Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Leverage the power of Python for web development, data science, machine learning, and automation. Our
              expert Python developers create scalable, efficient, and maintainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Start Python Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Python Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Python Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive Python development services across various domains and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pythonServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-6 text-base">{service.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Python?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pythonFeatures.map((feature, index) => (
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

      {/* Use Cases Section */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Python Use Cases</h2>
            <p className="text-lg text-muted-foreground">
              Python is versatile and can be used across various industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platforms",
                description: "Scalable online stores with inventory management and payment processing",
                image: "/python-ecommerce-platform.jpg",
              },
              {
                title: "Data Analytics Dashboard",
                description: "Interactive dashboards for business intelligence and data visualization",
                image: "/python-analytics-dashboard.jpg",
              },
              {
                title: "AI-Powered Chatbot",
                description: "Intelligent chatbots with natural language processing capabilities",
                image: "/python-ai-chatbot.jpg",
              },
              {
                title: "Financial Trading System",
                description: "Automated trading algorithms and risk management systems",
                image: "/python-trading-system.jpg",
              },
              {
                title: "Healthcare Management",
                description: "Patient management systems with data analysis and reporting",
                image: "/python-healthcare-system.jpg",
              },
              {
                title: "IoT Data Processing",
                description: "Real-time data processing and analysis for IoT devices",
                image: "/python-iot-processing.jpg",
              },
            ].map((useCase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build with Python?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your Python development needs and create powerful, scalable solutions.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
