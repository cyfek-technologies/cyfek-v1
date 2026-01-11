"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { ContactPopup } from "./contact-popup"

interface ContactContextType {
  openContactPopup: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function useContact() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider")
  }
  return context
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [trigger, setTrigger] = useState<"auto" | "manual">("manual")
  const [hasShownAuto, setHasShownAuto] = useState(false)

  // Auto-trigger after 60 seconds
  useEffect(() => {
    if (hasShownAuto) return

    const timer = setTimeout(() => {
      setTrigger("auto")
      setIsOpen(true)
      setHasShownAuto(true)
    }, 60000) // 60 seconds

    return () => clearTimeout(timer)
  }, [hasShownAuto])

  const openContactPopup = useCallback(() => {
    setTrigger("manual")
    setIsOpen(true)
  }, [])

  return (
    <ContactContext.Provider value={{ openContactPopup }}>
      {children}
      <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} trigger={trigger} />
    </ContactContext.Provider>
  )
}
