"use client"

import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "Digital PR for Nigerian Brands: How to Get Featured in National Media",
    excerpt: "Learn the strategies that help local brands get featured in major publications and build authority...",
    author: "Cyfek Team",
    date: "November 14, 2025",
    image: "/digital-pr-media-coverage-press-releases.jpg",
    slug: "digital-pr-nigerian-brands",
  },
  {
    title: "How to Measure Brand Health: Practical KPIs for Businesses",
    excerpt: "When was the last time you checked how your brand is really doing? Not your sales, but your brand...",
    author: "Cyfek Team",
    date: "November 14, 2025",
    image: "/brand-analytics-dashboard-metrics.jpg",
    slug: "measure-brand-health-kpis",
  },
  {
    title: "Using AI in Marketing and Advertising in 2026: Everything You Should Know",
    excerpt: "Imagine two brands selling the same product online. One spends hours guessing who to target...",
    author: "Cyfek Team",
    date: "October 30, 2025",
    image: "/ai-marketing-automation-technology.jpg",
    slug: "ai-marketing-advertising-2026",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Blog</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Explore Our Blog & Articles
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with insights, trends, and tips from industry experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-teal/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-teal transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-teal font-medium text-sm group/link"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button - Links to blog page */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-background font-semibold bg-transparent"
            >
              Explore All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
