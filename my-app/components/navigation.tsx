"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Over ons" },
    { href: "#schedule", label: "Speeldata" },
    { href: "#weekend", label: "Schaakweekend" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={`transition-all duration-300 rounded-full px-6 md:px-8 py-2 ${
          isScrolled
            ? "bg-black/40 backdrop-blur-2xl shadow-lg border border-white/20"
            : "bg-black/30 backdrop-blur-xl border border-white/15"
        }`}
      >
        <div className="flex items-center justify-between h-10 md:h-12">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              className="rounded-full cursor-pointer"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white/90 hover:text-white transition-colors font-medium text-xs cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              className="rounded-full text-xs px-3 cursor-pointer"
            >
              Lid worden
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
