"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight, Sparkles, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Products() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Products We've Built
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond services, we build products that solve real problems. Here's what we've created.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* SELTRA */}
          <div className="group relative bg-gradient-to-br from-teal/10 to-emerald-400/10 rounded-3xl p-8 lg:p-10 border border-teal/20 hover:border-teal/40 transition-all overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">SELTRA</h3>
                  <p className="text-muted-foreground text-sm">Peer-to-Peer Marketing</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Revolutionary advertising platform connecting businesses with real people. Stop wasting money on ads
                that don't convert. Reach 2.5M+ verified users.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Real Views", "Verified Users", "Instant Payouts", "OCR Verification"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://seltra.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:underline group/link"
              >
                Visit SELTRA
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Cyfek Academy */}
          <div className="group relative bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-8 lg:p-10 border border-violet-500/20 hover:border-violet-500/40 transition-all overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Cyfek Academy</h3>
                  <p className="text-muted-foreground text-sm">Free Tech Education</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                6-month intensive program where students learn in-demand tech skills for FREE while gaining real-world
                experience as paid interns at Cyfek.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["100% Free", "Paid Internship", "Certification", "Job Placement"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-violet-500/10 text-violet-600 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/academy"
                className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:underline group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-background font-semibold bg-transparent"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
