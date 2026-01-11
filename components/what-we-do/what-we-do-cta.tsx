"use client"

import { Button } from "@/components/ui/button"
import { useContact } from "@/components/contact-provider"

export function WhatWeDoCta() {
  const { openContactPopup } = useContact()

  return (
    <section id="contact" className="py-20 lg:py-32 bg-hero-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">
            Share your vision.
            <br />
            <span className="text-teal">Let&apos;s work together</span>
          </h2>
          <p className="text-xl text-hero-foreground/70 mb-10 max-w-2xl mx-auto">
            Whatever the project or particular challenge you have in mind, we&apos;re here with the right people,
            process and technology to help deliver the transformation you need.
          </p>
          <Button
            onClick={openContactPopup}
            size="lg"
            className="bg-teal text-navy hover:bg-teal/90 font-semibold px-10 py-6 text-lg rounded-full"
          >
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  )
}
