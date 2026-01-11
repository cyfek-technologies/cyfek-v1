"use client"

import { useRef } from "react"
import { ArrowDown } from "lucide-react"

export function ProductsHero() {
  const nextSectionRef = useRef<HTMLDivElement>(null)

  const scrollToProducts = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="min-h-screen bg-hero-bg pt-20 relative overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300D9B5' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="text-teal text-sm font-medium">Our Ecosystem</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground mb-8 leading-tight">
              Building Products That{" "}
              <span className="relative">
                <span className="text-teal">Transform</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 7 Q 100 0, 200 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-teal"
                  />
                </svg>
              </span>{" "}
              Industries
            </h1>

            <p className="text-xl md:text-2xl text-hero-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              From revolutionary marketing platforms to free tech education, we're creating solutions that empower
              businesses and individuals across Africa.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center gap-3 px-6 py-3 bg-hero-foreground/5 rounded-full border border-hero-foreground/10">
                <span className="text-3xl font-bold text-teal">2+</span>
                <span className="text-hero-foreground/70 text-sm">Live Products</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-hero-foreground/5 rounded-full border border-hero-foreground/10">
                <span className="text-3xl font-bold text-teal">10K+</span>
                <span className="text-hero-foreground/70 text-sm">Users Served</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-hero-foreground/5 rounded-full border border-hero-foreground/10">
                <span className="text-3xl font-bold text-teal">Free</span>
                <span className="text-hero-foreground/70 text-sm">Academy Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProducts}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-foreground/50 hover:text-teal transition-colors group"
        >
          <span className="text-sm font-medium">Explore Products</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </section>
      <div ref={nextSectionRef} />
    </>
  )
}
