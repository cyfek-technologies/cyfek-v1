import { DollarSign, Clock, Users, Globe, Briefcase, Heart } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Completely Free",
    description: "No tuition fees, no hidden costs. Quality tech education accessible to everyone.",
  },
  {
    icon: Briefcase,
    title: "Paid Internship",
    description: "Earn while you learn. Work as a paid intern at Cyfek during your program.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Hybrid learning model that fits around your life. Learn at your own pace.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Skills that are in demand worldwide. Work remotely for international companies.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Join a community of learners. Lifetime access to our alumni network.",
  },
]

export function AcademyBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-navy text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Why Cyfek Academy</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance">
            Benefits That Make a Difference
          </h2>
          <p className="text-background/70 text-lg">
            We've designed every aspect of this program to maximize your success and minimize barriers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 bg-background/5 rounded-2xl border border-background/10 hover:border-teal/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4 group-hover:bg-teal/30 transition-colors">
                <benefit.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-background mb-2">{benefit.title}</h3>
              <p className="text-background/70 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
