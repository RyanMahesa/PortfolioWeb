export function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      title: "Senior Full-Stack Developer, Accessibility",
      company: "TechCorp",
      description:
        "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["JavaScript", "TypeScript", "React", "Node.js"],
    },
    {
      period: "2022 — 2024",
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      description:
        "Developed and maintained multiple client-facing applications using modern web technologies. Led the migration from legacy systems to React-based architecture, improving performance by 40%.",
      technologies: ["React", "Next.js", "PostgreSQL", "AWS"],
    },
    {
      period: "2020 — 2022",
      title: "Frontend Developer",
      company: "Digital Agency Co",
      description:
        "Created responsive web applications for various clients in e-commerce and fintech sectors. Collaborated with design teams to implement pixel-perfect interfaces and ensure cross-browser compatibility.",
      technologies: ["Vue.js", "Sass", "Webpack", "Docker"],
    },
  ]

  return (
    <section id="experience" className="animate-section py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="grid lg:grid-cols-4 gap-8 group">
              <div className="lg:col-span-1">
                <p className="text-sm text-muted-foreground font-medium sticky top-32">{exp.period}</p>
              </div>

              <div className="lg:col-span-3 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.title} · {exp.company}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
