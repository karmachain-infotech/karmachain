export type PortfolioResultMetric = {
  label: string
  value: string
}

export type PortfolioTestimonial = {
  quote: string
  author: string
  role?: string
}

export type PortfolioAppVariant = {
  key: string
  label: string
  description?: string
  images?: string[]
  keyFeatures?: string[]
  technologies?: Record<string, string[]>
}

export type PortfolioItem = {
  id?: string
  title: string
  slug: string
  shortDescription?: string
  description?: string
  category?: string
  industry?: string
  year?: string
  duration?: string
  client?: string
  users?: string
  rating?: number
  featured?: boolean
  image?: string
  images?: string[]
  liveUrl?: string
  role?: string
  technologies?: Record<string, string[]>
  overview?: string
  keyFeatures?: string[]
  challenges?: string[]
  solutions?: string[]
  results?: PortfolioResultMetric[]
  testimonial?: PortfolioTestimonial
  apps?: PortfolioAppVariant[]
  createdAt?: string
  updatedAt?: string
}
