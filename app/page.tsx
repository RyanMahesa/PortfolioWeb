"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Home() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    if (typeof window !== "undefined" && window.gsap) {
      window.gsap.registerPlugin(window.ScrollTrigger)

      // Animate sections on scroll
      window.gsap.utils.toArray(".animate-section").forEach((section: any) => {
        window.gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
