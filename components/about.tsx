import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              At Cyfek – We Transform Brands with Digital Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cyfek is a full-service digital agency helping businesses grow with strategic digital marketing, stunning
              website development, mobile applications, and comprehensive brand development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We craft high-impact digital solutions, from SEO and branding to PPC and digital advertising, ensuring
              your brand stands out. With expert-driven strategies and a results-focused approach, we elevate businesses
              to thrive in today's competitive digital landscape.
            </p>
            <Button className="bg-navy text-background hover:bg-navy/90 font-semibold group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-soft-gray p-6 rounded-2xl">
              <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Results Driven</h3>
              <p className="text-muted-foreground text-sm">
                Every strategy is designed with measurable outcomes in mind.
              </p>
            </div>
            <div className="bg-soft-gray p-6 rounded-2xl">
              <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Creative Solutions</h3>
              <p className="text-muted-foreground text-sm">Innovative approaches that set your brand apart.</p>
            </div>
            <div className="bg-soft-gray p-6 rounded-2xl">
              <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Scalable Growth</h3>
              <p className="text-muted-foreground text-sm">Solutions that grow with your business needs.</p>
            </div>
            <div className="bg-navy p-6 rounded-2xl text-background">
              <div className="text-4xl font-bold text-teal mb-2">50+</div>
              <p className="text-background/80 text-sm">Projects delivered with excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
