import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, Truck, Gamepad2, ShoppingCart, Store } from "lucide-react"

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    image: "/education-industry-icon.jpg",
  },
  {
    icon: Truck,
    title: "Logistics",
    image: "/logistics-industry-icon.jpg",
  },
  {
    icon: Gamepad2,
    title: "Game",
    image: "/gaming-industry-icon.jpg",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    image: "/ecommerce-industry-icon.jpg",
  },
  {
    icon: Store,
    title: "Marketplace",
    image: "/marketplace-industry-icon.jpg",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Developing Software Solutions for Diverse Verticals
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                  <industry.icon className="h-8 w-8 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  {industry.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/industries">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
