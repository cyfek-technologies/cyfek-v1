"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Cyfek completely took charge of our digital transformation. They designed our logo, built our website, and helped us set up all our marketing channels. The entire project tells our brand story perfectly.",
    author: "Oreniwa M.",
    role: "MD - Renik Energy",
    metrics: [
      { value: "-52.7%", label: "CPL" },
      { value: "+181%", label: "Website Traffic" },
      { value: "+40%", label: "CTR" },
    ],
  },
  {
    quote:
      "Working with Cyfek was transformative for our business. Their strategic approach to digital marketing and website development exceeded all our expectations. Highly recommended!",
    author: "Sarah K.",
    role: "CEO - TechStart",
    metrics: [
      { value: "+300%", label: "Lead Generation" },
      { value: "+95%", label: "Brand Awareness" },
      { value: "2x", label: "Revenue Growth" },
    ],
  },
  {
    quote:
      "The team at Cyfek understands what businesses need in the digital space. They delivered a stunning website and marketing strategy that truly represents our brand.",
    author: "Michael T.",
    role: "Founder - GrowthHub",
    metrics: [
      { value: "+150%", label: "Organic Traffic" },
      { value: "-30%", label: "Bounce Rate" },
      { value: "+85%", label: "Conversions" },
    ],
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Clients Have To Say About Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by clients for delivering creative, results-driven digital solutions.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-lg">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-border">
              {current.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-teal mb-1">{metric.value}</div>
                  <div className="text-muted-foreground text-sm">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-10 h-10 text-teal/20" />
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 pl-8">
                {current.quote}
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-foreground text-lg">{current.author}</div>
                <div className="text-muted-foreground">{current.role}</div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-border hover:border-teal hover:text-teal bg-transparent"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-border hover:border-teal hover:text-teal bg-transparent"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-teal" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
