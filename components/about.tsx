export function About() {
  return (
    <section id="about" className="animate-section py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div>
                <div className="w-12 h-0.5 bg-primary mb-4"></div>
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">About</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="w-12 h-0.5 bg-muted mb-4"></div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Experience</h3>
                </div>
                <div>
                  <div className="w-12 h-0.5 bg-muted mb-4"></div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Projects</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend
                thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                development, creating experiences that not only look great but are meticulously built for performance
                and usability.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm a Senior Full-Stack Developer at{" "}
                <span className="text-primary font-medium">TechCorp</span>, specializing in accessibility. I contribute
                to the creation and maintenance of UI components that power our platform's frontend, ensuring our
                products meet web accessibility standards and best practices to deliver an inclusive user experience.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
                <span className="text-accent font-medium">advertising agencies</span> and{" "}
                <span className="text-accent font-medium">large corporations</span> to{" "}
                <span className="text-accent font-medium">start-ups</span>
                and <span className="text-accent font-medium">small digital product studios</span>. Additionally, I also
                released a <span className="text-accent font-medium">comprehensive video course</span> a few years ago,
                guiding learners through building a web app with the React ecosystem.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running
                around searching for the perfect <span className="text-accent font-medium">coffee beans</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
