"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb } from "lucide-react"
import { useContact } from "@/components/contact-provider"

export function ProductsCTA() {
  const { openContactPopup } = useContact()

  return (
    <section className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Lightbulb className="w-8 h-8 text-teal" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Have a Product Idea?
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We're always looking for innovative ideas and partnerships. Whether you want to collaborate, invest, or
            build something new together, let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={openContactPopup}
              className="bg-teal text-navy hover:bg-teal/90 font-semibold px-8 py-6 text-base group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-background font-semibold px-8 py-6 text-base bg-transparent"
              asChild
            >
              <a href="mailto:partnerships@cyfek.com">partnerships@cyfek.com</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
