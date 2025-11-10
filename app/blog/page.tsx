import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp, Eye, Share2 } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How Much Does It Cost to Build AI Video Editor App",
    excerpt:
      "Discover the comprehensive cost breakdown for developing an AI-powered video editing application, including features, development time, and technology stack considerations.",
    author: "Karmachain Team",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Development",
    image: "/ai-video-editor-cost.jpg",
    slug: "ai-video-editor-app-cost",
    featured: true,
  },
  {
    id: 2,
    title: "Web Development Trends 2024: What's Next for Modern Applications",
    excerpt:
      "Explore the latest web development trends shaping the industry in 2024, from AI integration to progressive web apps and serverless architecture.",
    author: "Tech Team",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Web Development",
    image: "/web-development-trends-2024.jpg",
    slug: "web-development-trends-2024",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile App Security: Best Practices for 2024",
    excerpt:
      "Learn essential security practices for mobile app development, including data encryption, secure authentication, and protection against common vulnerabilities.",
    author: "Security Team",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Mobile Development",
    image: "/mobile-app-security.jpg",
    slug: "mobile-app-security-best-practices",
  },
  {
    id: 4,
    title: "The Rise of Progressive Web Apps: Benefits and Implementation",
    excerpt:
      "Understand how Progressive Web Apps are revolutionizing user experience by combining the best of web and mobile applications.",
    author: "Frontend Team",
    date: "2023-12-28",
    readTime: "5 min read",
    category: "Web Development",
    image: "/progressive-web-apps.jpg",
    slug: "progressive-web-apps-benefits",
  },
  {
    id: 5,
    title: "Python vs Node.js: Choosing the Right Backend Technology",
    excerpt:
      "A comprehensive comparison of Python and Node.js for backend development, covering performance, scalability, and use cases.",
    author: "Backend Team",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Backend Development",
    image: "/python-vs-nodejs.jpg",
    slug: "python-vs-nodejs-comparison",
  },
  {
    id: 6,
    title: "Game Development with Unity: Complete Guide for Beginners",
    excerpt:
      "Start your game development journey with Unity. Learn the basics, tools, and techniques to create engaging games.",
    author: "Game Dev Team",
    date: "2023-12-15",
    readTime: "10 min read",
    category: "Game Development",
    image: "/unity-game-development.jpg",
    slug: "unity-game-development-guide",
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI Development",
  "Backend Development",
  "Game Development",
]

export default function BlogPage() {
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
              <BookOpen className="h-4 w-4 mr-2" />
              Tech Insights
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient-x">
              <span className="text-balance">Tech Insights & Trends</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest technology trends, development insights, and industry best practices from our
              expert team at Karmachain Infotech.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-glow"
            >
              <Link href="/contact">Subscribe to Newsletter</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Stats */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Articles Published", icon: BookOpen },
              { number: "50K+", label: "Monthly Readers", icon: Eye },
              { number: "25+", label: "Expert Authors", icon: User },
              { number: "15K+", label: "Social Shares", icon: Share2 },
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 100}>
                <div className="text-center group">
                  <div className="mx-auto mb-3 p-3 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full w-fit group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 animate-glow">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 animate-slide-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground">
              Our most popular and insightful articles on technology and development.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <ScrollReveal key={post.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                  <Card className="overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg?height=300&width=600"}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground animate-slide-in-left">
                        {post.category}
                      </Badge>
                      <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 animate-slide-in-right">
                        <span className="text-sm font-medium text-foreground">{post.readTime}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:translate-x-1 transition-transform duration-300"
                      >
                        Read More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive collection of technical articles and insights.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} direction="scale" delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 group border-border hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg?height=200&width=400"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs animate-slide-in-left">
                      {post.category}
                    </Badge>
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2 animate-slide-in-right">
                      <TrendingUp className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors duration-300">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        By {post.author}
                      </span>
                      <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More */}
          <ScrollReveal direction="scale" delay={400} className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-transparent"
            >
              Load More Articles
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-accent via-accent/90 to-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated with Tech Insights</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles and industry insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground transform hover:scale-105 transition-transform duration-300"
              />
              <Button
                variant="secondary"
                size="lg"
                className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
