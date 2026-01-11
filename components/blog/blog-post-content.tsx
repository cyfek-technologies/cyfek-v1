"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog-data"
import { blogPosts } from "@/lib/blog-data"
import { useContact } from "@/components/contact-provider"

interface Props {
  post: BlogPost
}

export function BlogPostContent({ post }: Props) {
  const { openContactPopup } = useContact()
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <article className="pt-24 lg:pt-32">
      {/* Hero */}
      <div className="bg-hero-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-hero-foreground/70 hover:text-teal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-teal/20 text-teal text-sm font-semibold rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-hero-foreground/70 mb-8">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-violet-500" />
                <div>
                  <p className="text-hero-foreground font-medium">{post.author.name}</p>
                  <p className="text-hero-foreground/60 text-sm">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-hero-foreground/60 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 lg:px-8 -mt-8 lg:-mt-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Share buttons */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-border">
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share:
            </span>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-muted hover:bg-teal/10 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-10 h-10 rounded-full bg-muted hover:bg-teal/10 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-10 h-10 rounded-full bg-muted hover:bg-teal/10 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-teal prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-navy rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-background mb-4">Need Help With Your Digital Strategy?</h3>
            <p className="text-background/70 mb-6">
              Our team of experts is ready to help you achieve your business goals.
            </p>
            <Button onClick={openContactPopup} className="bg-teal text-navy hover:bg-teal/90 font-semibold px-8">
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-muted/30 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-teal text-sm font-medium">{relatedPost.category}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-teal transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
