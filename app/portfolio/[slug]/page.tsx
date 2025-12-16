"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioItems } from "@/lib/portfolio-data"
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Star,
  BarChart3,
  Layers,
  Shield,
  Sparkles,
} from "lucide-react"

type AppVariant = {
  key: string
  label: string
  description?: string
  images?: string[]
  keyFeatures?: string[]
  technologies?: Record<string, string[]>
}

type ProjectAny = any

function ProjectCarousel({
  title,
  coverImage,
  images,
  autoPlay = true,
  intervalMs = 3500,
}: {
  title: string
  coverImage?: string
  images?: string[]
  autoPlay?: boolean
  intervalMs?: number
}) {
  const slides = useMemo(() => {
    const list = (images?.length ? images : coverImage ? [coverImage] : []).filter(Boolean) as string[]
    return list.length ? list : ["/placeholder.svg?height=500&width=900"]
  }, [images, coverImage])

  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  useEffect(() => {
    setIndex(0)
  }, [slides.length])

  useEffect(() => {
    if (!autoPlay) return
    if (slides.length <= 1) return
    if (isHovering) return

    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, intervalMs)

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [autoPlay, intervalMs, slides.length, isHovering])

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={slides[index]}
        alt={`${title} screenshot ${index + 1}`}
        className="w-full h-96 object-cover"
      />

      {slides.length > 1 && (
        <>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioItems.find((p: any) => p.slug === params.slug) as ProjectAny
  if (!project) return notFound()

  const apps: AppVariant[] = Array.isArray(project.apps) ? project.apps : []

  // Default selection: first app if exists, else Overview
  const [activeAppKey, setActiveAppKey] = useState<string>(apps[0]?.key ?? "main")

  const activeApp: AppVariant | null =
    activeAppKey === "main" ? null : apps.find((a) => a.key === activeAppKey) ?? null

  // Page data (fallback to project-level)
  const pageTitle = activeApp?.label ? `${project.title} - ${activeApp.label}` : project.title
  const pageDescription = activeApp?.description ?? project.description

  const projectImages: string[] =
    (Array.isArray((project as any).images) ? (project as any).images : []) ||
    (project.image ? [project.image] : [])

  const pageImages: string[] =
    (activeApp?.images?.length ? activeApp.images : projectImages?.length ? projectImages : []) ||
    (project.image ? [project.image] : [])

  const pageKeyFeatures: string[] =
    (activeApp?.keyFeatures?.length ? activeApp.keyFeatures : project.keyFeatures) ?? []

  const pageTechnologies: Record<string, string[]> | undefined =
    activeApp?.technologies ?? project.technologies

  // Icon mapping
  const categoryIcon =
    project.category === "Mobile App" ? Shield : project.category === "Game Development" ? Sparkles : Layers
  const CategoryIcon = categoryIcon

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
                <div className="flex gap-2 mb-4 flex-wrap">
                  <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
                  <Badge variant="secondary">{project.industry}</Badge>
                  {activeApp?.label ? <Badge variant="outline">{activeApp.label}</Badge> : null}
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">{pageTitle}</h1>

                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{pageDescription}</p>

                {/* Sub-app buttons (same page switch) */}
                {apps.length ? (
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Button
                      type="button"
                      variant={activeAppKey === "main" ? "default" : "outline"}
                      onClick={() => setActiveAppKey("main")}
                      className="transition-all"
                    >
                      Overview
                    </Button>

                    {apps.map((app) => (
                      <Button
                        key={app.key}
                        type="button"
                        variant={activeAppKey === app.key ? "default" : "outline"}
                        onClick={() => setActiveAppKey(app.key)}
                        className="transition-all"
                      >
                        {app.label}
                      </Button>
                    ))}
                  </div>
                ) : null}

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span className="font-medium">Year</span>
                    </div>
                    <p className="text-muted-foreground">{project.year}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span className="font-medium">Users</span>
                    </div>
                    <p className="text-muted-foreground">{project.users} Active Users</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-5 w-5 text-accent" />
                      <span className="font-medium">Rating</span>
                    </div>
                    <p className="text-muted-foreground">{project.rating}/5</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      <span className="font-medium">Client</span>
                    </div>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact">Start Similar Project</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                    </Link>
                    </Button>
                </div>
              </div>

              <div className="relative">
                <ProjectCarousel
                  title={pageTitle}
                  coverImage={project.image}
                  images={pageImages}
                  autoPlay={true}
                  intervalMs={3000}
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
                {project.client} partnered with us to deliver a high-impact{" "}
                {String(project.category || "").toLowerCase()} solution in the{" "}
                {String(project.industry || "").toLowerCase()} space—focused on performance, scalability, and a polished
                user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: CategoryIcon,
                  title: "Built for Impact",
                  description: "Designed to solve real business problems with measurable outcomes.",
                },
                {
                  icon: Sparkles,
                  title: "Modern UX",
                  description: "Clean UI, smooth flows, and thoughtful micro-interactions.",
                },
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  description: "Best practices for stability, reliability, and data protection.",
                },
                {
                  icon: Layers,
                  title: "Scalable Architecture",
                  description: "Built to support growth, traffic, and feature expansion.",
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

      {/* Key Features (changes based on selected app) */}
      {pageKeyFeatures.length ? (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Key Features</h2>
                <p className="text-lg text-muted-foreground">Highlights of what we delivered for {project.client}.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pageKeyFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="mt-1 h-3 w-3 rounded-full bg-accent shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Technology Stack (changes based on selected app) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technology Stack</h2>
              <p className="text-lg text-muted-foreground">
                Built with modern technologies to ensure performance, maintainability, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pageTechnologies ? (
                Object.entries(pageTechnologies).map(([group, techs]) => (
                  <Card key={group}>
                    <CardHeader>
                      <CardTitle className="text-center capitalize">{group.replaceAll("_", " ")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {(techs as string[]).map((tech, index) => (
                          <Badge key={index} variant="outline" className="w-full justify-center">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground">No tech stack available.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want a Project Like This?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let’s build a {String(project.category || "").toLowerCase()} that drives growth for your business.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
