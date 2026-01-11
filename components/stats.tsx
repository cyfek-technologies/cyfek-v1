"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 2.5, suffix: "M+", label: "Users Reached", isDecimal: true },
  { value: 5, suffix: "+", label: "Years Experience" },
]

function AnimatedCounter({ value, suffix, isDecimal = false }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal">
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              <p className="text-background/70 mt-2 text-sm lg:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
