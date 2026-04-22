"use client"

import { useState } from "react"
import { ArrowRight, Play, Pause } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    title: "Why a 2-day POC is the fastest way to validate your idea",
    date: "April 2026",
  },
  {
    title: "Security & performance-first delivery: what “enterprise-grade” means in practice",
    date: "April 2026",
  },
  {
    title: "AI agents in production: patterns for safe automation and measurable ROI",
    date: "March 2026",
  },
  {
    title: "Serverless on AWS: reference architecture for scale with predictable costs",
    date: "March 2026",
  },
  {
    title: "Data engineering that doesn’t break at month 6: governance and observability essentials",
    date: "March 2026",
  },
  {
    title: "Choosing the right stack for an MVP: speed now without tech debt later",
    date: "February 2026",
  },
]

export function News() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="blog" className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">DDP Labs Blog</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight">
              Latest <span className="text-primary">updates</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  <span>Play</span>
                </>
              )}
            </button>
            <Link 
              href="#" 
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all news
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* News ticker / grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.date}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-3">
                {item.title}
              </h3>
              <div className={`mt-4 flex items-center text-sm font-medium text-primary transition-all duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <span>Read more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
