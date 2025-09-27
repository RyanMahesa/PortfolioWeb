"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      const tl = window.gsap.timeline()

      tl.fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        )
        .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
    }
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="hero-title text-5xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
                Ryan Mahesa
              </h1>
              <h2 className="hero-subtitle text-xl lg:text-2xl text-primary font-medium mb-6">Full Stack Developer</h2>
              <p className="hero-description text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I build accessible, pixel-perfect digital experiences for the web. Passionate about crafting thoughtful
                interfaces that blend robust engineering with exceptional user experience.
              </p>
            </div>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToAbout} size="lg" className="group">
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-card rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                AJ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
