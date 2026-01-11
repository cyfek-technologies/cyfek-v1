"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, ArrowRight, ArrowLeft, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Service {
  id: string
  name: string
  description: string
  price: number
  icon: string
}

const services: Service[] = [
  {
    id: "website",
    name: "Website Development",
    description: "Custom responsive websites built with modern technologies",
    price: 500000,
    icon: "🌐",
  },
  {
    id: "mobile",
    name: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    price: 800000,
    icon: "📱",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description: "SEO, social media, and paid advertising campaigns",
    price: 150000,
    icon: "📈",
  },
  {
    id: "growth",
    name: "Growth Strategies",
    description: "Data-driven strategies to scale your business",
    price: 200000,
    icon: "🚀",
  },
  {
    id: "branding",
    name: "Brand Development",
    description: "Logo design, brand identity, and style guides",
    price: 300000,
    icon: "✨",
  },
  {
    id: "engagement",
    name: "Customer Engagement",
    description: "CRM setup, email marketing, and retention strategies",
    price: 120000,
    icon: "💬",
  },
]

type Step = "services" | "pricing" | "contact"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
  trigger?: "auto" | "manual"
}

export function ContactPopup({ isOpen, onClose, trigger = "manual" }: ContactPopupProps) {
  const [step, setStep] = useState<Step>("services")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      // Reset state when closed
      setTimeout(() => {
        setStep("services")
        setSelectedServices([])
        setFormData({ name: "", email: "", phone: "", message: "" })
        setIsSubmitted(false)
      }, 300)
    }
  }, [isOpen])

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const getTotalPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const openWhatsApp = () => {
    const selectedServiceNames = selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(", ")

    const message = encodeURIComponent(
      `Hello Cyfek! I'm interested in the following services:\n\n${selectedServiceNames}\n\nEstimated Total: ${formatPrice(getTotalPrice())}\n\nI'd like to discuss this further.`,
    )

    window.open(`https://wa.me/2341234567890?text=${message}`, "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-background rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-teal hover:text-navy transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress indicator */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {["services", "pricing", "contact"].map((s, i) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full transition-colors ${
                step === s
                  ? "bg-teal w-6"
                  : i < ["services", "pricing", "contact"].indexOf(step)
                    ? "bg-teal"
                    : "bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="p-8 pt-16">
          {/* Step 1: Services Selection */}
          {step === "services" && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {trigger === "auto" ? "Hey there! 👋" : "What can we help you with?"}
                </h2>
                <p className="text-muted-foreground">
                  {trigger === "auto"
                    ? "We noticed you're exploring. What services are you interested in?"
                    : "Select the services you need (you can choose multiple)"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedServices.includes(service.id)
                        ? "border-teal bg-teal/10"
                        : "border-border hover:border-teal/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{service.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">{service.name}</h3>
                          {selectedServices.includes(service.id) && <Check className="w-5 h-5 text-teal" />}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <Button
                onClick={() => setStep("pricing")}
                disabled={selectedServices.length === 0}
                className="w-full bg-teal text-navy hover:bg-teal/90 font-semibold py-6"
              >
                See Pricing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Step 2: Pricing Breakdown */}
          {step === "pricing" && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Your Quote</h2>
                <p className="text-muted-foreground">Here's a breakdown of your selected services</p>
              </div>

              <div className="bg-muted rounded-2xl p-6 space-y-4">
                {selectedServices.map((serviceId) => {
                  const service = services.find((s) => s.id === serviceId)
                  if (!service) return null
                  return (
                    <div key={serviceId} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{service.icon}</span>
                        <span className="font-medium text-foreground">{service.name}</span>
                      </div>
                      <span className="font-semibold text-foreground">{formatPrice(service.price)}</span>
                    </div>
                  )
                })}
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">Estimated Total</span>
                    <span className="text-2xl font-bold text-teal">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Final pricing may vary based on project scope and requirements
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("services")} className="flex-1 py-6 border-border">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
                <Button
                  onClick={() => setStep("contact")}
                  className="flex-1 bg-teal text-navy hover:bg-teal/90 font-semibold py-6"
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Form */}
          {step === "contact" && !isSubmitted && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
                <p className="text-muted-foreground">Tell us a bit about yourself and we'll reach out</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 xxx xxx xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="bg-muted border-border resize-none"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal text-navy hover:bg-teal/90 font-semibold py-6"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={openWhatsApp}
                    className="w-full py-6 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </form>

              <button
                onClick={() => setStep("pricing")}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="inline mr-1 w-4 h-4" />
                Back to pricing
              </button>
            </div>
          )}

          {/* Success State */}
          {step === "contact" && isSubmitted && (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-10 h-10 text-teal" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Message Sent!</h2>
                <p className="text-muted-foreground">
                  Thanks for reaching out, {formData.name.split(" ")[0]}! We'll get back to you within 24 hours.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-2">Selected Services:</p>
                <p className="font-medium text-foreground">
                  {selectedServices.map((id) => services.find((s) => s.id === id)?.name).join(", ")}
                </p>
                <p className="text-teal font-bold mt-2">{formatPrice(getTotalPrice())}</p>
              </div>
              <Button onClick={onClose} className="bg-teal text-navy hover:bg-teal/90 font-semibold px-8">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
