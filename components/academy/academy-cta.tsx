"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function AcademyCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-violet-600 to-teal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Start Your Tech Career?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Applications for Cohort 3 are now open. Join hundreds of students who have transformed their lives through
            free tech education.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-violet-600 hover:bg-white/90 font-semibold px-8 py-6 text-base group"
            >
              Apply Now - It's Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base bg-transparent"
              asChild
            >
              <a href="mailto:academy@cyfek.com">
                <Mail className="mr-2 h-4 w-4" />
                academy@cyfek.com
              </a>
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-8">
            Application deadline: January 31, 2026 | Program starts: February 15, 2026
          </p>
        </div>
      </div>
    </section>
  )
}
