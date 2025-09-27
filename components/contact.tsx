import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="animate-section py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <div className="w-12 h-0.5 bg-primary mb-4 mx-auto"></div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
              question or just want to say hi, feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:alex@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Alex Johnson. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </div>
    </section>
  )
}
