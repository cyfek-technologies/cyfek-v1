import { BookOpen, Briefcase, Award, Rocket } from "lucide-react"

const phases = [
  {
    number: "01",
    icon: BookOpen,
    title: "Foundation Phase",
    duration: "Month 1-2",
    description:
      "Learn the fundamentals of your chosen track. Build a strong foundation with hands-on exercises and projects.",
    activities: ["Core skill training", "Weekly assignments", "Peer learning sessions", "Mentor check-ins"],
  },
  {
    number: "02",
    icon: Briefcase,
    title: "Internship Phase",
    duration: "Month 3-5",
    description: "Work as a paid intern at Cyfek or our partner companies. Apply your skills on real client projects.",
    activities: ["Real client projects", "Team collaboration", "Code reviews", "Professional development"],
  },
  {
    number: "03",
    icon: Award,
    title: "Capstone Phase",
    duration: "Month 6",
    description: "Complete your capstone project, finalize your portfolio, and prepare for career opportunities.",
    activities: ["Capstone project", "Portfolio completion", "Interview prep", "Certification exam"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Career Launch",
    duration: "Post-Program",
    description: "Graduate with certification, portfolio, and real experience. Get support with job placement.",
    activities: ["Job referrals", "Alumni network access", "Continued mentorship", "Career support"],
  },
]

export function AcademyProgram() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Program Structure</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Your 6-Month Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            A carefully designed program that takes you from beginner to job-ready professional.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-violet-500 to-teal" />

          <div className="space-y-12 lg:space-y-0">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                  <div
                    className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <span className="text-6xl font-bold text-muted/30">{phase.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                      <phase.icon className="w-6 h-6 text-teal" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-teal font-medium mb-4">{phase.duration}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                    {phase.activities.map((activity) => (
                      <li key={activity} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex justify-center relative">
                  <div className="w-6 h-6 rounded-full bg-teal border-4 border-background shadow-lg shadow-teal/30 absolute top-1/2 -translate-y-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
