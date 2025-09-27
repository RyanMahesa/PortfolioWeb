import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js and Stripe integration. Features include real-time inventory management, advanced search, and mobile-optimized checkout flow.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Data visualization dashboard for weather analytics with interactive charts, real-time data updates, and responsive design. Integrates with multiple weather APIs.",
      image: "/weather-analytics-dashboard-charts.jpg",
      technologies: ["Vue.js", "D3.js", "Node.js", "Redis"],
      github: "https://github.com",
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
            A collection of projects that showcase my skills in full-stack development, from concept to deployment.
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
