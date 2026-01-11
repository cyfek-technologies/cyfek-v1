import { Target, Lightbulb, Users, Award } from "lucide-react"

export function AcademyAbout() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">About The Academy</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            More Than Just Education. It's a Career Launchpad.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cyfek Academy was born from a simple belief: talent is everywhere, but opportunity isn't. We're changing
            that by offering world-class tech education completely free, combined with real work experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Learn by Doing",
              description:
                "No boring lectures. Work on real projects from day one, building a portfolio that impresses employers.",
            },
            {
              icon: Users,
              title: "Paid Internship",
              description:
                "Part of your learning is working as a paid intern at Cyfek, gaining real industry experience.",
            },
            {
              icon: Award,
              title: "Get Certified",
              description:
                "Graduate with an industry-recognized certification that proves your skills to potential employers.",
            },
            {
              icon: Lightbulb,
              title: "Job Ready",
              description:
                "Our graduates are job-ready from day one. Many get hired before even completing the program.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-muted/30 rounded-2xl border border-border hover:border-teal/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                <item.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "100%", label: "Free Education" },
            { value: "6", label: "Month Program" },
            { value: "80%", label: "Job Placement Rate" },
            { value: "50+", label: "Active Students" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
