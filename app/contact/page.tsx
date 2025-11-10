import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Headphones, Globe, Building } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Office",
      details: ["G-15, nilkhanth business hub, Causeway Rd, Singanpor, Surat, Gujarat 395004"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: [
        "📞 +91 7878571228",
        "📞 +91 8866942449",
        "Mon-Fri: 9:00 AM - 6:00 PM IST",
      ],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["✉️ karmachaininfotech@gmail.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "Game Development",
    "AI/ML Solutions",
    "Cloud Services",
    "Digital Marketing",
    "UI/UX Design",
    "Consulting",
  ]

  const offices = [
    {
      city: "Surat",
      country: "India",
      address: "123 Tech Park, Innovation District, Ahmedabad, Gujarat 380015",
      phone: "+91 79 4040 7777",
      isHeadquarters: true,
    },
 
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
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient-x">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology? We're here to help you every step of the
              way. Get in touch with our team of experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
              <a
                href="https://calendly.com/karmachaininfotech/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <Card className="p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-2 flex items-center">
                    <Send className="h-6 w-6 mr-3 text-accent" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div
                        className="animate-slide-in-left"
                        style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
                      >
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input
                          placeholder="John"
                          required
                          className="transform hover:scale-105 transition-transform duration-300 focus:scale-105"
                        />
                      </div>
                      <div
                        className="animate-slide-in-right"
                        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
                      >
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input
                          placeholder="Doe"
                          required
                          className="transform hover:scale-105 transition-transform duration-300 focus:scale-105"
                        />
                      </div>
                    </div>
                    <div
                      className="animate-slide-in-up"
                      style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
                    >
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="transform hover:scale-105 transition-transform duration-300 focus:scale-105"
                      />
                    </div>
                    <div
                      className="animate-slide-in-up"
                      style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
                    >
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="transform hover:scale-105 transition-transform duration-300 focus:scale-105"
                      />
                    </div>
                    <div
                      className="animate-slide-in-up"
                      style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
                    >
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        placeholder="Your Company Name"
                        className="transform hover:scale-105 transition-transform duration-300 focus:scale-105"
                      />
                    </div>
                    <div
                      className="animate-slide-in-up"
                      style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
                    >
                      <label className="block text-sm font-medium mb-2">Service Interested In</label>
                      <select className="w-full p-3 border border-input rounded-md bg-background transform hover:scale-105 transition-transform duration-300 focus:scale-105">
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      className="animate-slide-in-up"
                      style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
                    >
                      <label className="block text-sm font-medium mb-2">Project Budget</label>
                      <select className="w-full p-3 border border-input rounded-md bg-background transform hover:scale-105 transition-transform duration-300 focus:scale-105">
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                    <div
                      className="animate-slide-in-up"
                      style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
                    >
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        rows={5}
                        required
                        className="transform hover:scale-105 transition-transform duration-300 focus:scale-105"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
                      style={{ animationDelay: "900ms" }}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We're here to help you succeed. Whether you have a question about our services, need a quote, or
                    want to discuss your project, our team is ready to assist you.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="animate-slide-in-right"
                      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
                    >
                      <Card className="p-6 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="text-accent mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-glow">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p
                                  key={idx}
                                  className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>

                <div
                  className="animate-slide-in-right"
                  style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
                >
                  <Card className="p-6 bg-gradient-to-r from-accent via-accent/90 to-accent text-accent-foreground hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <Headphones className="h-6 w-6 mr-3 animate-pulse" />
                      <h3 className="font-semibold">24/7 Support</h3>
                    </div>
                    <p className="text-sm opacity-90">
                      Need immediate assistance? Our support team is available around the clock to help with any urgent
                      issues or questions.
                    </p>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With offices across three continents, we're always close to our clients
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-1 gap-8">
            {offices.map((office, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 150}>
                <Card className="text-center hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full w-fit group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                      {office.isHeadquarters ? (
                        <Building className="h-8 w-8 text-accent" />
                      ) : (
                        <Globe className="h-8 w-8 text-accent" />
                      )}
                    </div>
                    {office.isHeadquarters && (
                      <Badge variant="secondary" className="mb-4 animate-pulse">
                        Headquarters
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                      {office.city}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-4 group-hover:text-foreground transition-colors duration-300">
                      {office.country}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <p>{office.address}</p>
                      <p className="font-medium text-accent">{office.phone}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer:
                  "Yes, we offer comprehensive support and maintenance packages to ensure your application continues to perform optimally. Our support includes bug fixes, updates, and feature enhancements.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in modern web technologies including React, Node.js, Python, Django, iOS/Android development, and emerging technologies like AI/ML and blockchain.",
              },
              {
                question: "How do you ensure project quality?",
                answer:
                  "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback sessions throughout the development process.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="p-6 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105">
                  <h3 className="font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {faq.answer}
                  </p>
                </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Take the first step towards transforming your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/karmachaininfotech/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with Expert
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
