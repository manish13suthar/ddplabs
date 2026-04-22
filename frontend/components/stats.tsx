"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 24, suffix: "h", label: "Avg. response time" },
  { value: 2, suffix: "d", label: "POC turnaround" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), value)
      setDisplayValue(current)

      if (step >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toString()
  }

  return (
    <div ref={ref} className="font-serif text-5xl md:text-6xl font-bold text-primary">
      {formatNumber(displayValue)}{suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">360° Value</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight">
            Every day, we embrace change and create{" "}
            <span className="text-secondary">value for all</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-background/70 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-background leading-relaxed italic">
            &ldquo;Companies will thrive when they put people first, embracing technology as an enabler, not a replacement. It is human in the lead, not human in the loop.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="text-secondary font-semibold">DDP Labs</p>
            <p className="text-background/70 text-sm">Fast. Secure. Scalable.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
