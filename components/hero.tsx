"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const services = [
  { name: "Web Dev", color: "bg-teal" },
  { name: "Mobile Apps", color: "bg-teal/70" },
  { name: "Marketing", color: "bg-teal/50" },
  { name: "Branding", color: "bg-teal/80" },
]

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeService, setActiveService] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen bg-hero-bg overflow-hidden pt-20">
      {/* Interactive gradient blob that follows mouse */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)",
          left: `${mousePosition.x * 100 - 40}%`,
          top: `${mousePosition.y * 100 - 40}%`,
        }}
      />

      {/* Geometric decorative elements */}
      <div className="absolute top-32 right-[15%] w-32 h-32 border border-teal/30 rotate-45 animate-float" />
      <div className="absolute bottom-40 left-[10%] w-20 h-20 border border-teal/20 rounded-full animate-float-delayed" />
      <div className="absolute top-[45%] right-[8%] w-4 h-4 bg-teal rounded-full animate-pulse" />
      <div className="absolute bottom-[30%] right-[25%] w-2 h-2 bg-teal/60 rounded-full" />

      {/* Vertical line accents */}
      <div className="absolute left-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal/20 to-transparent" />
      <div className="absolute right-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal/10 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full">
        <div className="grid lg:grid-cols-12 gap-8 min-h-[calc(100vh-5rem)] items-center">
          {/* Left side - Main headline with creative typography */}
          <div className="lg:col-span-7 pt-12 lg:pt-0">
            {/* Eyebrow text with animated line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-teal" />
              <span className="text-teal text-sm uppercase tracking-[0.3em] font-medium">Digital Agency</span>
            </div>

            {/* Main headline - large, bold, creative */}
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight mb-8">
              <span className="text-hero-foreground block">We build</span>
              <span className="text-hero-foreground block relative">
                <span className="relative z-10">digital</span>
                {/* Artistic underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-[80%] h-4 text-teal"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,0 100,10 T200,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="animate-draw-line"
                  />
                </svg>
              </span>
              <span className="block mt-2">
                <span className="text-teal italic font-light">experiences</span>
                <span className="text-hero-foreground">.</span>
              </span>
            </h1>

            {/* Subtext with creative layout */}
            <div className="max-w-lg mb-12">
              <p className="text-hero-foreground/60 text-lg lg:text-xl leading-relaxed">
                We're a creative studio that transforms brands through
                <span className="text-teal font-medium"> strategic design</span>,
                <span className="text-hero-foreground font-medium"> innovative tech</span>, and
                <span className="text-teal font-medium"> bold ideas</span>.
              </p>
            </div>

            {/* CTA with unique style */}
            <div className="flex flex-wrap items-center gap-6">
              <Button
                size="lg"
                className="bg-teal text-navy hover:bg-teal/90 font-semibold px-10 py-7 text-base group rounded-full"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a
                href="#work"
                className="group flex items-center gap-3 text-hero-foreground/80 hover:text-teal transition-colors"
              >
                <span className="w-12 h-12 rounded-full border border-hero-foreground/30 group-hover:border-teal flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="font-medium">View Work</span>
              </a>
            </div>
          </div>

          {/* Right side - Creative visual element */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Main visual container with creative shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-teal/20 rounded-[3rem] overflow-hidden border border-teal/20">
                {/* Animated mesh gradient background */}
                <div className="absolute inset-0 opacity-40">
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-teal/40 via-transparent to-teal/20"
                    style={{
                      transform: `translate(${mousePosition.x * 20 - 10}px, ${mousePosition.y * 20 - 10}px)`,
                      transition: "transform 0.5s ease-out",
                    }}
                  />
                </div>

                {/* Large stylized text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[12rem] lg:text-[16rem] font-black text-teal/10 select-none leading-none"
                    style={{
                      transform: `translate(${mousePosition.x * 15 - 7.5}px, ${mousePosition.y * 15 - 7.5}px)`,
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    C
                  </span>
                </div>

                {/* Service tags floating */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-3">
                    {services.map((service, index) => (
                      <span
                        key={service.name}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                          index === activeService
                            ? "bg-teal text-navy scale-110"
                            : "bg-hero-foreground/10 text-hero-foreground/70"
                        }`}
                      >
                        {service.name}
                      </span>
                    ))}
                  </div>

                  {/* Stats at bottom */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <span className="text-4xl lg:text-5xl font-bold text-teal">150+</span>
                      <p className="text-hero-foreground/50 text-sm">Projects Delivered</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-4xl lg:text-5xl font-bold text-hero-foreground">98%</span>
                      <p className="text-hero-foreground/50 text-sm">Client Satisfaction</p>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -top-1 -right-1 w-24 h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-teal">
                    <path d="M100,0 L100,100 L0,100" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Floating card element */}
              <div
                className="absolute -left-8 bottom-24 bg-navy border border-teal/30 rounded-2xl p-5 shadow-2xl shadow-teal/10"
                style={{
                  transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
                  transition: "transform 0.4s ease-out",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-hero-foreground font-semibold text-sm">Award Winning</p>
                    <p className="text-hero-foreground/50 text-xs">Digital Agency 2024</p>
                  </div>
                </div>
              </div>

              {/* Another floating element */}
              <div
                className="absolute -right-4 top-16 w-20 h-20 rounded-2xl bg-teal/20 backdrop-blur-sm border border-teal/30 flex items-center justify-center"
                style={{
                  transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
                  transition: "transform 0.5s ease-out",
                }}
              >
                <span className="text-3xl font-bold text-teal">*</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-teal/10 bg-navy/80 backdrop-blur-sm py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing", "Branding", "E-Commerce"].map(
                (item) => (
                  <span
                    key={item}
                    className="text-hero-foreground/40 text-sm uppercase tracking-wider flex items-center gap-4"
                  >
                    {item}
                    <span className="w-2 h-2 rounded-full bg-teal/40" />
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
