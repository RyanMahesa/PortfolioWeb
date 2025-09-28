"use client"
import Image from "next/image"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"

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
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="hero-title text-5xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
                Ryan Mahesa
              </h1>
              <h2 className="hero-subtitle text-xl lg:text-2xl text-primary font-medium mb-6">Product Manager</h2>
              <p className="hero-description text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I specialize in defining product vision and strategy, aligning business objectives with user needs to deliver impactful solutions. 
                Experienced in leading cross-functional teams, managing product lifecycles, and driving innovation that enhances both customer 
                satisfaction and organizational growth.
              </p>
            </div>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToAbout} size="lg" className="group">
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={encodeURI("/RyanMahesa(CV).pdf")} download className="group">
                  Download CV
                  <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/RyanMahesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ryan-mahesa-2210032a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mahesaryan350@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full p-2">
              <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-primary/20">
                <Image
                  src="/FotoProfileRyan.png"
                  alt="Ryan Mahesa"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 80%' }}
                  priority
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
