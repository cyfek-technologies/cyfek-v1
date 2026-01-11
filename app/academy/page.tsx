import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AcademyHero } from "@/components/academy/academy-hero"
import { AcademyAbout } from "@/components/academy/academy-about"
import { AcademyCourses } from "@/components/academy/academy-courses"
import { AcademyProgram } from "@/components/academy/academy-program"
import { AcademyBenefits } from "@/components/academy/academy-benefits"
import { AcademyTestimonials } from "@/components/academy/academy-testimonials"
import { AcademyFAQ } from "@/components/academy/academy-faq"
import { AcademyCTA } from "@/components/academy/academy-cta"

export const metadata = {
  title: "Cyfek Academy | Free Tech Education & Internship Program",
  description:
    "Learn in-demand tech skills for FREE with Cyfek Academy. 6-month program with real internship experience, expert mentorship, and industry certification.",
}

export default function AcademyPage() {
  return (
    <main>
      <Header />
      <AcademyHero />
      <AcademyAbout />
      <AcademyCourses />
      <AcademyProgram />
      <AcademyBenefits />
      <AcademyTestimonials />
      <AcademyFAQ />
      <AcademyCTA />
      <Footer />
    </main>
  )
}
