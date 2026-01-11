"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useContact } from "./contact-provider"

export function CTA() {
  const { openContactPopup } = useContact()

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-navy rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 217, 181, 0.5) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance">
              We Create Marketing and Branding Strategies to Fuel Your Growth
            </h2>
            <p className="text-background/70 text-lg mb-10 max-w-2xl mx-auto">
              Every partnership starts with a deep dive into your goals, industry, and market, allowing us to transform
              your digital presence into a powerful growth channel.
            </p>
            <Button
              size="lg"
              onClick={openContactPopup}
              className="bg-teal text-navy hover:bg-teal/90 font-semibold px-8 py-6 text-base group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
