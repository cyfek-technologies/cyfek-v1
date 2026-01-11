"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { blogPosts, categories } from "@/lib/blog-data"

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Featured Posts */}
        {activeCategory === "All" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group relative rounded-2xl overflow-hidden ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div className={`aspect-[16/9] ${index === 0 ? "lg:aspect-[16/12]" : ""}`}>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-teal text-navy text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3
                      className={`font-bold text-white mb-2 group-hover:text-teal transition-colors ${
                        index === 0 ? "text-2xl lg:text-3xl" : "text-lg"
                      }`}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/70 text-sm">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-teal text-navy"
                  : "bg-muted text-muted-foreground hover:bg-teal/10 hover:text-teal"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-teal/10 text-teal text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-teal transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-violet-500" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-teal hover:underline text-sm font-medium flex items-center gap-1 group/link"
                  >
                    Read
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
