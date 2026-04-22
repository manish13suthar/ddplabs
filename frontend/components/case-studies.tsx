"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    client: "Global Healthcare Network",
    title: "Transforming patient care with AI-powered diagnostics",
    description: "We helped a leading healthcare provider implement AI solutions that reduced diagnosis time by 40% and improved patient outcomes across 200+ facilities.",
    metric: "40%",
    metricLabel: "faster diagnostics",
    color: "from-primary/80 to-primary/40",
  },
  {
    client: "Nordic Energy Solutions",
    title: "Building a sustainable future with smart grid technology",
    description: "Our team designed and deployed an intelligent energy management system that cut operational costs by 35% while reducing carbon emissions significantly.",
    metric: "35%",
    metricLabel: "cost reduction",
    color: "from-secondary/80 to-secondary/40",
  },
  {
    client: "Pacific Retail Group",
    title: "Reimagining customer experience through digital innovation",
    description: "We created an omnichannel platform that unified online and in-store experiences, driving a 60% increase in customer engagement and loyalty.",
    metric: "60%",
    metricLabel: "more engagement",
    color: "from-accent/80 to-accent/40",
  },
  {
    client: "Continental Bank",
    title: "Modernizing core banking for the digital age",
    description: "Our cloud-native banking platform helped migrate 15 million accounts while maintaining 99.99% uptime and reducing operational costs by half.",
    metric: "99.99%",
    metricLabel: "system uptime",
    color: "from-primary/80 to-primary/40",
  },
  {
    client: "Environmental Solutions Inc",
    title: "Turning the tide on plastic pollution with digital tracking",
    description: "We built a comprehensive waste management system that connected 50,000 households to collection services, preventing tons of waste from reaching oceans.",
    metric: "50K+",
    metricLabel: "households connected",
    color: "from-secondary/80 to-secondary/40",
  },
]

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const visibleStudies = [
    caseStudies[currentIndex],
    caseStudies[(currentIndex + 1) % caseStudies.length],
    caseStudies[(currentIndex + 2) % caseStudies.length],
  ]

  return (
    <section id="portfolio" className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Success Stories</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight max-w-2xl">
              See how we help our clients{" "}
              <span className="text-accent">thrive</span>
            </h2>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-background/20 hover:border-primary hover:bg-background/10 transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-5 w-5 text-background" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-background/20 hover:border-primary hover:bg-background/10 transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="h-5 w-5 text-background" />
            </button>
          </div>
        </div>

        {/* Case studies carousel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleStudies.map((study, index) => (
            <div
              key={`${study.client}-${index}`}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${study.color} p-6 flex flex-col justify-between`}>
                <span className="text-sm text-white/80 font-medium">{study.client}</span>
                <div>
                  <div className="text-4xl font-bold text-white">{study.metric}</div>
                  <div className="text-sm text-white/80">{study.metricLabel}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {study.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary cursor-pointer group/link">
                  <span>Read case study</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View all case studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
