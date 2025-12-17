import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo1.png" // <-- place your logo in public/logo.png
                  alt="Karmachain Logo"
                  fill // makes it cover the parent div
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="font-bold text-xl">Karmachain Infotech</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Leading software development company delivering innovative web and mobile solutions, games, and digital
              experiences that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com/karmachaintech" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/karmachain-tech" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/karmachaininfotech/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/web-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/mobile-app-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/game-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Game Development
                </Link>
              </li>
              <li>
                <Link
                  href="/python-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Python Development
                </Link>
              </li>
              <li>
                <Link
                  href="/django-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Django Development
                </Link>
              </li>
              <li>
                <Link
                  href="/ios-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  iOS Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/technologies"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  All Technologies
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/react"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  React
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/nodejs"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Node.js
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/vue"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Vue.js
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/angular"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Angular
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 mb-4 md:mb-0">
              Copyright @2024 Karmachain Infotech All Right Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
