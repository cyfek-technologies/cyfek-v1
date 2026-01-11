import { ArrowRight, Globe, Smartphone, Megaphone, Search, Palette, LineChart } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing Solutions",
    description:
      "We'll take your online presence to the next level and turn it into a powerful channel for engagement and growth.",
    link: "#",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional websites that convert visitors into customers with stunning design and seamless user experience.",
    link: "#",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business results.",
    link: "#",
  },
  {
    icon: Palette,
    title: "Brand Development",
    description:
      "We create unique brand identities that resonate with your audience and reflect your business personality.",
    link: "#",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies that improve your visibility and drive organic traffic to your business.",
    link: "#",
  },
  {
    icon: LineChart,
    title: "Online Presence Optimization",
    description:
      "Beyond basic adjustments to create a powerful, cohesive brand experience that stands out with results.",
    link: "#",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ways We Can Help You Grow
          </h2>
          <p className="text-muted-foreground text-lg">
            Access a full team of specialists dedicated to creating impactful, customized strategies that drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group bg-background p-8 rounded-2xl border border-border hover:border-teal/50 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                <service.icon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-teal transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <span className="inline-flex items-center text-teal font-medium text-sm">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
