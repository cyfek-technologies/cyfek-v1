import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata = {
  title: "Blog | Cyfek - Insights on Digital Marketing, Tech & Growth",
  description:
    "Expert insights on digital marketing, software development, AI, and business growth from the Cyfek team.",
}

export default function BlogPage() {
  return (
    <main>
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </main>
  )
}
