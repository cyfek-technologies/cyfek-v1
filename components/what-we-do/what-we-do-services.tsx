import { Code2, Megaphone, Smartphone, GraduationCap, Cloud, Palette } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web applications, enterprise software, and scalable solutions built with modern technologies.",
    features: ["Full-stack Development", "API Integration", "Cloud Architecture"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that amplify your brand and drive measurable growth.",
    features: ["SEO & SEM", "Social Media", "Content Strategy"],
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "User-centered design that transforms complex problems into intuitive digital experiences.",
    features: ["UI/UX Design", "Prototyping", "Design Systems"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps practices for modern businesses.",
    features: ["AWS & Azure", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  {
    icon: GraduationCap,
    title: "Tech Education",
    description:
      "Free comprehensive training programs through Cyfek Academy to build the next generation of tech talent.",
    features: ["Software Development", "Digital Marketing", "AI & Cloud"],
  },
]

export function WhatWeDoServices() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-hero-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">Our Expertise</h2>
          <p className="text-lg text-hero-foreground/70">
            We combine technical excellence with creative thinking to deliver solutions that transform businesses and
            empower communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/10 hover:border-teal/50 hover:bg-teal/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                  <Icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-hero-foreground mb-3">{service.title}</h3>
                <p className="text-hero-foreground/60 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-teal bg-teal/10 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
