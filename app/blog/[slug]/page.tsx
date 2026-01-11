import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { blogPosts } from "@/lib/blog-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: "Post Not Found | Cyfek Blog" }
  }

  return {
    title: `${post.title} | Cyfek Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main>
      <Header />
      <BlogPostContent post={post} />
      <Footer />
    </main>
  )
}
