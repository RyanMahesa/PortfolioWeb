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
               I'm a Product Manager with a computer science background and hands-on experience in both product innovation and software development. I’ve worked on projects such as a supermarket cashier system, a data management program in C, Picverse — a digital art community website, and AI-driven solutions like a mood-based music recommendation system.

              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
               I was a Product Manager at Garuda Hacks, where my team achieved 3rd place for developing an innovative digital product. This experience sharpened my skills in defining product vision, aligning cross-functional teams, and delivering results under tight deadlines.

              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond product development, I also serve as the Head of Volleyball Student Club at Binus Bekasi, where I strengthen my leadership and organizational management skills.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
               In my spare time, I enjoy exploring new technologies, reading books, and listening to self-development podcasts to continuously grow both personally and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
