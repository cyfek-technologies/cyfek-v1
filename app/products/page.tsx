import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductsCTA } from "@/components/products/products-cta"

export const metadata = {
  title: "Our Products | Cyfek - Software Solutions & Tech Education",
  description:
    "Explore Cyfek's ecosystem of products including SELTRA for peer-to-peer marketing and Cyfek Academy for free tech education.",
}

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <ProductsHero />
      <ProductsGrid />
      <ProductsCTA />
      <Footer />
    </main>
  )
}
