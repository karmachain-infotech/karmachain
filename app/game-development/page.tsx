import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Gamepad2, Smartphone, Monitor, Zap, Palette, Users, Trophy } from "lucide-react"

const gameTypes = [
  {
    icon: Smartphone,
    title: "Mobile Games",
    description: "Engaging mobile games for iOS and Android with intuitive touch controls and addictive gameplay.",
    examples: ["Puzzle Games", "Action Games", "Strategy Games", "Casual Games"],
  },
  {
    icon: Monitor,
    title: "Web Games",
    description: "Browser-based games using HTML5, WebGL, and modern web technologies for cross-platform play.",
    examples: ["HTML5 Games", "WebGL Games", "Multiplayer Games", "Educational Games"],
  },
  {
    icon: Gamepad2,
    title: "Console Games",
    description: "High-quality console games for PlayStation, Xbox, and Nintendo Switch platforms.",
    examples: ["Action RPG", "Platformers", "Racing Games", "Sports Games"],
  },
]

const gameFeatures = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized game engines and efficient code for smooth 60fps gameplay across all devices.",
  },
  {
    icon: Palette,
    title: "Stunning Graphics",
    description: "Beautiful 2D and 3D graphics with custom art, animations, and visual effects.",
  },
  {
    icon: Users,
    title: "Multiplayer Support",
    description: "Real-time multiplayer functionality with matchmaking and social features.",
  },
  {
    icon: Trophy,
    title: "Monetization Ready",
    description: "Built-in support for in-app purchases, ads, and various monetization strategies.",
  },
]

const gameProjects = [
  {
    title: "Adventure Quest RPG",
    description: "Epic fantasy RPG with immersive storyline and stunning 3D graphics",
    image: "/adventure-game-screenshot.jpg",
    genre: "RPG",
    platform: "Mobile",
    downloads: "1M+",
  },
  {
    title: "Speed Racing Championship",
    description: "High-octane racing game with realistic physics and multiplayer modes",
    image: "/intense-street-race.png",
    genre: "Racing",
    platform: "Mobile",
    downloads: "500K+",
  },
  {
    title: "Puzzle Master",
    description: "Brain-teasing puzzle game with hundreds of challenging levels",
    image: "/puzzle-game-interface.jpg",
    genre: "Puzzle",
    platform: "Web",
    downloads: "2M+",
  },
]

export default function GameDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-balance">Game Development Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a leading game development company in India that deploys cutting edge technologies to build and
              deliver some of the most successful games in the industry. From mobile games to console titles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Start Your Game</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Game Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Game Platforms We Develop For</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We create games for all major platforms using industry-leading game engines and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameTypes.map((gameType, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                    <gameType.icon className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{gameType.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-6">{gameType.description}</CardDescription>
                  <div className="space-y-2">
                    {gameType.examples.map((example, exampleIndex) => (
                      <div
                        key={exampleIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full inline-block mr-2"
                      >
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Game Development?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameFeatures.map((feature, index) => (
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

      {/* Game Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Games</h2>
            <p className="text-lg text-muted-foreground">
              Explore some of our most successful game development projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                    {project.downloads}
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {project.platform}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.genre}</span>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Development Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Game Development Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Concept & Design",
                description: "Game concept, mechanics design, and art direction",
              },
              { step: "2", title: "Prototyping", description: "Core gameplay mechanics and proof of concept" },
              { step: "3", title: "Development", description: "Full game development with regular milestone reviews" },
              {
                step: "4",
                title: "Launch & Support",
                description: "Game launch, marketing support, and ongoing updates",
              },
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Create Your Game?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's bring your game idea to life with cutting-edge technology and creative expertise.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Game Development</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
