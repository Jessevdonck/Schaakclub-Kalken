"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollTo = (selector: string) => {
    const section = document.querySelector(selector);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url(/Bredene/IMG-20250314-WA0004.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-1" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-white">
            Schaakclub Kalken
          </h1>

          <p className="text-xl md:text-2xl text-white/90 text-balance max-w-2xl mx-auto leading-relaxed">
            Gezellig schaken in een warme sfeer. Iedereen welkom, van beginner
            tot gevorderde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 cursor-pointer"
              onClick={() => scrollTo("#contact")}
            >
              Contact
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 cursor-pointer"
              onClick={() => scrollTo("#about")}
            >
              Meer info
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:text-primary transition-colors cursor-pointer z-10"
        aria-label="Scroll naar beneden"
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </button>
    </section>
  );
}
