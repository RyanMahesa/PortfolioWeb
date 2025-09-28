export function Experience() {
  const experiences = [
    {
      period: "Aug 2023 — Oct 2023",
      title: "Education Counselor",
      company: "Binus University",
      description:
        "As an Education Counselor, I successfully marketed and sold application forms and scholarships at Binus University while providing guidance and educational support to prospective students. Through this role, I developed strong sales and communication skills, ensuring that students received the assistance they needed in pursuing their educational journey.",
      technologies: ["Public Speaking", "Communication", "Sales & Marketing", "Presentation Skills"],
    },
    {
      period: "May 2024 — July 2024",
      title: "Future Leader Program",
      company: "AIESEC",
      description:
        "I participated in a 3-month leadership development program that emphasized global mindset, self-awareness, and impact-driven leadership. Throughout the program, I collaborated with diverse teams to address real-world social issues through simulations and case discussions, while also attending workshops and mentorship sessions facilitated by global professionals. This experience strengthened my leadership, teamwork, and problem-solving skills in a multicultural environment.",
      technologies: ["Global Mindset", "Self-Awareness", "Teamwork", "Problem-Solving"],
    },
    {
      period: "Jan 2025 — Desember 2025",
      title: "President Of Binus Bekasi Volleyball ",
      company: "Binus University",
      description:
        "As the President of the Volleyball Student Club at Binus Bekasi, I led and managed over 50 active students while organizing and supervising regular training sessions, recruitment activities, and inter-campus competitions. I fostered team spirit, discipline, and leadership among members through mentoring and structured programs, while also liaising with university staff to ensure smooth communication and compliance with campus policies. Additionally, I coordinated and managed the team to execute programs effectively, ensuring activities were completed on time and aligned with organizational goals.",
      technologies: ["Team Leadership", "Event Management", "Organizational Management", "Team Coordination"],
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
