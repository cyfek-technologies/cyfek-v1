"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Software Developer at Paystack",
    image: "/african-woman-professional-headshot.png",
    quote:
      "Cyfek Academy changed my life. I went from knowing nothing about coding to landing a job at Paystack in just 8 months. The hands-on internship was game-changing.",
    course: "Software Development",
  },
  {
    name: "Emeka Nwachukwu",
    role: "Digital Marketing Lead at Jumia",
    image: "/african-man-professional-headshot.png",
    quote:
      "The digital marketing program was incredibly practical. I was running real campaigns by month 2, and that experience is what got me my current role.",
    course: "Digital Marketing",
  },
  {
    name: "Fatima Ibrahim",
    role: "Mobile Developer at Andela",
    image: "/african-woman-hijab-professional.jpg",
    quote:
      "Learning mobile development for free sounded too good to be true, but Cyfek Academy delivered. I now build apps used by thousands of people.",
    course: "Mobile App Development",
  },
]

export function AcademyTestimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Success Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            From Students to Professionals
          </h2>
          <p className="text-muted-foreground text-lg">Hear from our graduates who are now thriving in tech careers.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-3xl p-8 lg:p-12 shadow-lg border border-border">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-teal/20" />

            <div className="text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-teal/20">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <blockquote className="text-xl lg:text-2xl text-foreground mb-6 leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="mb-2">
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </div>
              <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">
                {testimonials[current].course}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border hover:border-teal hover:bg-teal/10 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-teal w-6" : "bg-muted"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border hover:border-teal hover:bg-teal/10 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
