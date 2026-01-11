"use client"

import Link from "next/link"
import { ArrowUpRight, Sparkles, GraduationCap, Rocket, Users, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "seltra",
    name: "SELTRA",
    tagline: "Peer-to-Peer Marketing Platform",
    description:
      "Revolutionary advertising platform that connects businesses with real people who share their content on social media. Stop wasting money on ads that don't convert.",
    features: [
      { icon: Users, text: "2.5M+ verified views across publishers" },
      { icon: Shield, text: "OCR-powered fraud protection" },
      { icon: TrendingUp, text: "Real-time analytics dashboard" },
      { icon: Sparkles, text: "Instant payouts for publishers" },
    ],
    link: "https://seltra.app",
    isExternal: true,
    gradient: "from-teal to-emerald-400",
    image: "/seltra-platform-dashboard-preview.jpg",
  },
  {
    id: "academy",
    name: "Cyfek Academy",
    tagline: "Free Tech Education Program",
    description:
      "A 6-month intensive program where students learn in-demand tech skills completely free while gaining real-world experience as interns at Cyfek. Graduate with a certification and job-ready portfolio.",
    features: [
      { icon: GraduationCap, text: "100% free tech courses" },
      { icon: Rocket, text: "Real internship experience" },
      { icon: Shield, text: "Industry-recognized certification" },
      { icon: Users, text: "Direct mentorship from experts" },
    ],
    link: "/academy",
    isExternal: false,
    gradient: "from-violet-500 to-purple-500",
    image: "/academy-students-learning-coding.jpg",
  },
]

const upcomingProducts = [
  {
    name: "Cyfek Analytics",
    description: "AI-powered marketing analytics for SMEs",
    status: "Coming 2026",
  },
  {
    name: "Cyfek Hire",
    description: "Connect with pre-vetted tech talent from our academy",
    status: "In Development",
  },
]

export function ProductsGrid() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Products */}
        <div className="space-y-16 mb-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-full">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
                  <span className="text-teal text-xs font-semibold uppercase tracking-wider">
                    {product.isExternal ? "Live Product" : "Our Initiative"}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{product.name}</h2>

                <p className="text-xl text-teal font-medium">{product.tagline}</p>

                <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-teal" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  {product.isExternal ? (
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-teal text-navy hover:bg-teal/90 font-semibold px-8 group">
                        Visit {product.name}
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Link href={product.link}>
                      <Button size="lg" className="bg-teal text-navy hover:bg-teal/90 font-semibold px-8 group">
                        Learn More
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 blur-3xl rounded-3xl`}
                />
                <div className="relative bg-navy/5 border border-border rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src={
                      product.image || `/placeholder.svg?height=600&width=800&query=${product.name} platform interface`
                    }
                    alt={`${product.name} preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm font-semibold`}
                    >
                      {product.tagline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Products */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Coming Soon</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">What We're Building Next</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {upcomingProducts.map((product) => (
              <div
                key={product.name}
                className="p-6 rounded-2xl border border-dashed border-border hover:border-teal/50 transition-colors bg-muted/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                  <span className="text-xs font-medium px-3 py-1 bg-teal/10 text-teal rounded-full">
                    {product.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
