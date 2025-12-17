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
    image: "https://www.gurutechnolabs.com/wp-content/uploads/2024/11/How-much-does-AI-app-development-cost.png",
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
    image: "https://media.licdn.com/dms/image/v2/D5612AQF5rTJ_o63x4A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721181407294?e=2147483647&v=beta&t=UmhKa8PMblq58fNfX4Ob2DZm5dvwXFBaJ1sfxCl2Ffc",
    slug: "web-development-trends-2024",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile App Security: Best Practices for 2025",
    excerpt:
      "Learn essential security practices for mobile app development, including data encryption, secure authentication, and protection against common vulnerabilities.",
    author: "Security Team",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Mobile Development",
    image: "data:image/jpeg;base64,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",
    slug: "mobile-app-security-best-practices",
  },
  // {
  //   id: 4,
  //   title: "The Rise of Progressive Web Apps: Benefits and Implementation",
  //   excerpt:
  //     "Understand how Progressive Web Apps are revolutionizing user experience by combining the best of web and mobile applications.",
  //   author: "Frontend Team",
  //   date: "2023-12-28",
  //   readTime: "5 min read",
  //   category: "Web Development",
  //   image: "/progressive-web-apps.jpg",
  //   slug: "progressive-web-apps-benefits",
  // },
  // {
  //   id: 5,
  //   title: "Python vs Node.js: Choosing the Right Backend Technology",
  //   excerpt:
  //     "A comprehensive comparison of Python and Node.js for backend development, covering performance, scalability, and use cases.",
  //   author: "Backend Team",
  //   date: "2023-12-20",
  //   readTime: "9 min read",
  //   category: "Backend Development",
  //   image: "/python-vs-nodejs.jpg",
  //   slug: "python-vs-nodejs-comparison",
  // },
  // {
  //   id: 6,
  //   title: "Game Development with Unity: Complete Guide for Beginners",
  //   excerpt:
  //     "Start your game development journey with Unity. Learn the basics, tools, and techniques to create engaging games.",
  //   author: "Game Dev Team",
  //   date: "2023-12-15",
  //   readTime: "10 min read",
  //   category: "Game Development",
  //   image: "/unity-game-development.jpg",
  //   slug: "unity-game-development-guide",
  // },
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
                className="flex-1 px-4 py-3 rounded-lg text-black transform transition-transform duration-300"
              />
              <Button
                variant="secondary"
                size="lg"
                className="transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all text-black duration-300"
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
