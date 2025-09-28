import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "NABUNG.AI - AI Powered Business Intelligence",
      description:
        "Many small business owners in the F&B and retail sectors still rely on manual record-keeping or random spreadsheets that are extremely difficult to track. They struggle to monitor business performance in real time, manage inventory, and make data-driven decisions. That's where NABUNG.AI comes in — an all-in-one platform that helps them manage their businesses more intelligently using AI and real-time data.",
      image: "/TampilanAwal.jpg",
      technologies: ["React.js", "GO", "Next.js", "PostgreSQL"],
      github: "https://github.com/RyanMahesa/garudahacks.git",
      live: "https://youtu.be/gATboBoVpg0?feature=shared",
    },
    {
      title: "Picverse – A Digital Art Community Platform ",
      description:
        "A community-driven platform designed for digital artists to share, showcase, and collaborate on creative works. Built with a responsive design and interactive features, Picverse enables users to explore artworks, connect with fellow creators, and participate in a vibrant digital art community.",
      image: "/TampilanAwalHCI.jpg",
      technologies: ["HTML", "CSS", "Java Script"],
      github: "https://github.com/RyanMahesa/Project_Lab_Hci.git",
      live: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio website built to highlight my professional experiences, achievements, and selected projects. Designed with responsive layouts, interactive UI components, and optimized performance to provide a smooth user experience across devices. This project reflects my ability to combine design, functionality, and scalability in presenting a professional digital presence.",
      image: "/WebsitePorto.jpg",
      technologies: ["Next.js", "TypeScript", "CSS", "Vercel"],
      github: "https://github.com/RyanMahesa/PortfolioWeb.git",
      live: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="animate-section py-20 px-6">
      <div className="container mx-auto">
        <div className="mb-16">
          <div className="w-12 h-0.5 bg-primary mb-4"></div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Selected Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects that highlight my expertise in technology, product development, and leadership.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
