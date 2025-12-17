"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-xl text-foreground">Karmachain</span>
          </Link> */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-14 h-12 relative ">
              <Image
                src="/logowithbg.png" // put your logo file in the public folder
                alt="Karmachain Logo"
                fill // makes it cover the parent div
                className="object-contain rounded-2xl"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-bold text-lg text-balance bg-gradient-to-r from-foreground via-cyan-500 to-foreground bg-clip-text text-transparent animate-gradient-x">Karmachain Infotech</span>
              <span className="font-bold text-sm text-balance bg-gradient-to-r from-foreground via-cyan-500 to-foreground bg-clip-text text-transparent animate-gradient-x">Your vision, our code</span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-accent transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Development</h4>
                      <Link
                        href="/web-development"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Web Development
                      </Link>
                      <Link
                        href="/mobile-app-development"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Mobile App Development
                      </Link>
                      {/* <Link
                        href="/game-development"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Game Development
                      </Link> */}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Specializations</h4>
                      <Link
                        href="/python-development"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Python Development
                      </Link>
                      <Link
                        href="/django-development"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Django Development
                      </Link>
                      {/* <Link
                        href="/ios-development"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        iOS Development
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-accent transition-colors">
                Technologies <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Frontend</h4>
                      <Link
                        href="/technologies/react"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        React
                      </Link>
                      <Link
                        href="/technologies/vue"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Vue.js
                      </Link>
                      {/* <Link
                        href="/technologies/angular"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Angular
                      </Link> */}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Backend</h4>
                      <Link
                        href="/technologies/nodejs"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Node.js
                      </Link>
                      <Link
                        href="/python-development"
                        className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md"
                      >
                        Python
                      </Link>
                      <Link
                        href="/technologies"
                        className="block px-3 py-2 text-sm text-accent hover:bg-muted rounded-md font-medium"
                      >
                        View All Technologies →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="text-foreground hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-foreground hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Let's Get Connected</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
   <div
    className="
      lg:hidden 
      fixed 
      inset-0 
      top-16 
      z-40 
      bg-white  /* ✅ ensures white background */
      border-t 
      border-border 
      overflow-y-auto /* ✅ allows scrolling */
      h-[calc(100vh-4rem)] /* ✅ prevents overflow beyond viewport */
      pb-10
      transition-all
      duration-300
    "
  >
    <div className="px-4 pt-4 pb-6 space-y-2">
      <Link href="/" className="block px-3 py-2 text-card-foreground hover:bg-muted rounded-md">
        Home
      </Link>

      {/* SERVICES DROPDOWN */}
      <details className="group">
        <summary className="flex items-center justify-between px-3 py-2 text-card-foreground hover:bg-muted rounded-md cursor-pointer">
          <span>Services</span>
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
        </summary>
        <div className="ml-4 mt-1 space-y-1">
          <Link href="/web-development" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
            Web Development
          </Link>
          <Link href="/mobile-app-development" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
            Mobile App Development
          </Link>
          <Link href="/python-development" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
            Python Development
          </Link>
          <Link href="/django-development" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
            Django Development
          </Link>
        </div>
      </details>

      {/* TECHNOLOGIES DROPDOWN */}
      <details className="group">
        <summary className="flex items-center justify-between px-3 py-2 text-card-foreground hover:bg-muted rounded-md cursor-pointer">
          <span>Technologies</span>
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
        </summary>
        <div className="ml-4 mt-1 space-y-1">
          <Link href="/technologies/react" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
            React
          </Link>
          <Link href="/technologies/vue" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
            Vue.js
          </Link>
          <Link href="/technologies/nodejs" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
            Node.js
          </Link>
          <Link href="/technologies" className="block px-3 py-2 text-sm text-accent hover:bg-muted rounded-md font-medium">
            View All →
          </Link>
        </div>
      </details>

      <Link href="/portfolio" className="block px-3 py-2 text-card-foreground hover:bg-muted rounded-md">
        Portfolio
      </Link>
      <Link href="/blog" className="block px-3 py-2 text-card-foreground hover:bg-muted rounded-md">
        Blog
      </Link>
      <Link href="/about" className="block px-3 py-2 text-card-foreground hover:bg-muted rounded-md">
        About
      </Link>
      <Link href="/contact" className="block px-3 py-2 text-card-foreground hover:bg-muted rounded-md">
        Contact
      </Link>

      <div className="mt-4">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">Let's Get Connected</Link>
        </Button>
      </div>
    </div>
  </div>
)}

      </div>
    </header>
  )
}

export default Header
