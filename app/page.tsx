import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Products } from "@/components/products-showcase";
import { Results } from "@/components/results";
import { ServicesList } from "@/components/services-list";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";
import { CTA } from "@/components/cta";
import { Blog } from "@/components/blog";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Products />
      <Results />
      <ServicesList />
      <Partners />
      <Testimonials />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}
