"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "Over ons" },
    { href: "#schedule", label: "Speeldata" },
    { href: "#weekend", label: "Schaakweekend" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* Desktop background - full width */}
      <div
        className={`hidden md:block transition-all duration-300 rounded-full px-5 py-2 w-fit mx-auto ${
          isScrolled
            ? "bg-black/40 backdrop-blur-2xl shadow-lg border border-white/20"
            : "bg-black/30 backdrop-blur-xl border border-white/15"
        }`}
      >
        <div className="flex items-center justify-center h-12 w-full">
          {/* Desktop Navigation */}
          <div className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white/90 hover:text-white transition-colors font-medium text-base cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("#contact")} size="sm" className="rounded-full cursor-pointer">
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile hamburger - only icon background */}
      <div className="md:hidden flex justify-end pr-2">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`transition-all duration-300 rounded-full p-2 ${
            isScrolled
              ? "bg-black/40 backdrop-blur-2xl shadow-lg border border-white/20"
              : "bg-black/30 backdrop-blur-xl border border-white/15"
          }`}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center gap-8 z-40">
          {/* Close button in top right */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white/90 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-white text-2xl font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="text-white text-2xl font-semibold hover:text-primary transition-colors"
          >
            Lid worden
          </button>
        </div>
      )}
    </nav>
  )
}
