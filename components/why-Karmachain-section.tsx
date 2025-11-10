import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { InteractiveCard } from "@/components/interactive-card"
import { FloatingElement } from "@/components/floating-elements"
import Link from "next/link"
import { Lightbulb, Target, DollarSign } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We believe in innovating and meeting customer needs in every project.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: Target,
    title: "Quality-Focused",
    description: "We consistently focus on quality over quantity - that also makes us credible as a software company.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    icon: DollarSign,
    title: "Value for Money",
    description: "Karmachain provides services at affordable and competitive rates with fast delivery.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function WhyKarmachainSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <FloatingElement duration={6000} amplitude={20}>
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      </FloatingElement>
      <FloatingElement duration={8000} amplitude={25} delay={2000}>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      </FloatingElement>
      <FloatingElement duration={5000} amplitude={15} delay={1000}>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
      </FloatingElement>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation direction="up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Karmachain</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 150}>
              <InteractiveCard
                hoverScale={true}
                glowEffect={true}
                className="text-center h-full border-border hover:border-accent/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </InteractiveCard>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={500} className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="transform hover:scale-105 transition-all duration-200 hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Link href="/why-Karmachain">More on Why Karmachain?</Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
