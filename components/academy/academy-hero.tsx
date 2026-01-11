"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function AcademyHero() {
  return (
    <section className="min-h-screen bg-hero-bg pt-10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-teal/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full animate-spin-slow"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-teal"
              strokeDasharray="10 5"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-teal/20 rounded-full border border-violet-500/30">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
              </span>
              <span className="text-hero-foreground text-sm font-medium">
                Applications Now Open
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-hero-foreground leading-tight">
              Learn Tech Skills{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-400 to-teal bg-clip-text text-transparent">
                  For Free
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 10 Q 50 0, 100 10 Q 150 20, 200 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#00D9B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl text-hero-foreground/70 leading-relaxed max-w-xl">
              A 6-month intensive program where you learn in-demand tech skills,
              work as an intern at Cyfek, and graduate with real-world
              experience and certification.
            </p>

            <div className="flex flex-wrap gap-6">
              {[
                "100% Free",
                "Real Projects",
                "Paid Internship",
                "Job-Ready",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-hero-foreground/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-teal text-white hover:opacity-90 font-semibold px-8 py-6 text-base group"
              >
                Apply Now - It's Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/10 font-semibold px-8 py-6 text-base bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Video
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-teal/30 rounded-3xl blur-3xl" />
            <div className="relative bg-hero-bg/50 backdrop-blur border border-hero-foreground/10 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-hero-foreground/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-teal flex items-center justify-center">
                  <span className="text-xl font-bold text-white">C</span>
                </div>
                <div>
                  <h3 className="text-hero-foreground font-semibold">
                    Cyfek Academy
                  </h3>
                  <p className="text-hero-foreground/60 text-sm">
                    Cohort 3 Starting Soon
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-hero-foreground/5 rounded-xl">
                  <span className="text-hero-foreground/70 text-sm">
                    Program Duration
                  </span>
                  <span className="text-hero-foreground font-semibold">
                    6 Months
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-hero-foreground/5 rounded-xl">
                  <span className="text-hero-foreground/70 text-sm">Cost</span>
                  <span className="text-teal font-bold text-xl">FREE</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-hero-foreground/5 rounded-xl">
                  <span className="text-hero-foreground/70 text-sm">
                    Format
                  </span>
                  <span className="text-hero-foreground font-semibold">
                    Hybrid Learning
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-hero-foreground/5 rounded-xl">
                  <span className="text-hero-foreground/70 text-sm">
                    Internship Included
                  </span>
                  <span className="text-teal font-semibold">Yes - Paid</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-teal border-2 border-hero-bg"
                      />
                    ))}
                  </div>
                  <span className="text-hero-foreground/70 text-sm">
                    +50 students enrolled
                  </span>
                </div>
                <div className="w-full h-2 bg-hero-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-violet-500 to-teal rounded-full" />
                </div>
                <p className="text-hero-foreground/50 text-xs mt-2">
                  Limited spots remaining
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
