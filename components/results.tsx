import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Renik Energy Branding",
    description: "We Helped Renik Energy With Their Complete Branding, and This is What the Result Looks Like.",
    tags: ["Branding", "Social Media", "Website"],
    image: "/modern-energy-company-branding-with-green-elements.jpg",
    link: "#",
  },
  {
    title: "RockieA Farms Logo",
    description: "RockieA Farms Came to Us for a Logo That Properly Carries Their Identity, Here's How We Delivered.",
    tags: ["Branding", "Logo Design", "Identity"],
    image: "/organic-farm-branding-with-natural-colors.jpg",
    link: "#",
  },
  {
    title: "Indeego Restaurant",
    description: "How We Helped Indeego Restaurant Improve Their Digital Presence with SEO & Social Media.",
    tags: ["SEO", "Social Media", "Digital Marketing"],
    image: "/restaurant-digital-marketing-modern-food-photograp.jpg",
    link: "#",
  },
]

export function Results() {
  return (
    <section id="work" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Results Clients Have Seen
          </h2>
          <p className="text-muted-foreground text-lg">
            These results speak for themselves. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-teal/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium text-teal bg-teal/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <Link href={project.link} className="inline-flex items-center text-teal font-medium text-sm group/link">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-background font-semibold bg-transparent"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
