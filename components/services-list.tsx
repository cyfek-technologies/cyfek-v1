import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const servicesList = [
  "Digital Marketing",
  "Website Development",
  "Mobile App Development",
  "Branding & Design",
  "Search Engine Optimization",
  "Brand Development",
  "Corporate Communications",
  "Online Presence Optimization",
  "Digital PR",
  "Pay Per Click",
]

export function ServicesList() {
  return (
    <section className="py-20 lg:py-32 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance">
            We Provide Services That Yield Results
          </h2>
          <p className="text-background/70 text-lg">
            Access a full team of specialists dedicated to creating impactful, customized strategies that drive results.
          </p>
        </div>

        {/* Services List */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {servicesList.map((service, index) => (
              <Link
                key={index}
                href="#"
                className="group flex items-center justify-between p-5 bg-background/5 hover:bg-teal/20 rounded-xl border border-background/10 hover:border-teal/50 transition-all duration-300"
              >
                <span className="text-background font-medium group-hover:text-teal transition-colors">{service}</span>
                <ArrowUpRight className="w-5 h-5 text-background/50 group-hover:text-teal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
