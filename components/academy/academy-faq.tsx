"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is the program really 100% free?",
    answer:
      "Yes, absolutely. There are no tuition fees, registration fees, or hidden costs. We believe quality education should be accessible to everyone. The program is funded through our commercial services and partnerships.",
  },
  {
    question: "What are the requirements to apply?",
    answer:
      "You need to be at least 18 years old, have access to a computer and internet, and be committed to the 6-month program. No prior tech experience is required - we teach you everything from scratch.",
  },
  {
    question: "How does the paid internship work?",
    answer:
      "During months 3-5 of the program, you'll work as a paid intern at Cyfek or one of our partner companies. You'll work on real projects, typically 20-30 hours per week, and receive compensation for your work.",
  },
  {
    question: "What certification do I receive?",
    answer:
      "Upon successful completion, you'll receive a Cyfek Academy certification that verifies your skills and project experience. This certification is recognized by our hiring partners across Nigeria and beyond.",
  },
  {
    question: "What are my job prospects after graduation?",
    answer:
      "Our graduates have an 80% job placement rate within 3 months of completing the program. Many receive job offers even before graduation. We also provide career support and job referrals to our alumni.",
  },
  {
    question: "Can I take the program while working?",
    answer:
      "Yes! Our hybrid model is designed for flexibility. The learning portion can be done at your own pace, and internship hours are typically arranged around your existing schedule.",
  },
]

export function AcademyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers. If you don't find what you're looking for, reach out to us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-2xl overflow-hidden bg-muted/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
