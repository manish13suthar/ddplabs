"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Pause } from "lucide-react"

const heroSlides = [
  {
    title: "Together We",
    highlight: "Transform",
    subtitle: "Shaping tomorrow, today",
    description: "In a world of constant change, reinvention is a continuous strategy. That&apos;s why we work with organizations to rewrite the rules of growth, innovation and resilience.",
    cta: "See what we do",
  },
  {
    title: "Human",
    highlight: "Potential",
    subtitle: "Unlocking possibilities",
    description: "We believe in the power of people. Our human-centered approach drives innovation that matters, creating lasting impact for businesses and communities worldwide.",
    cta: "Discover our approach",
  },
  {
    title: "Innovation",
    highlight: "Realized",
    subtitle: "From vision to reality",
    description: "We turn bold ideas into breakthrough results. Our expertise across strategy, technology, and operations helps organizations thrive in the digital age.",
    cta: "Explore our work",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const slide = heroSlides[currentSlide]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-background">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide">
                {slide.subtitle}
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {slide.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                {slide.highlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-background/70 leading-relaxed mb-8 max-w-xl">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                {slide.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Main circle with people imagery suggestion */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 via-secondary/25 to-accent/30 flex items-center justify-center backdrop-blur-sm border border-background/15">
                <div className="text-center text-background">
                  <div className="text-6xl font-serif font-bold mb-2">360°</div>
                  <div className="text-sm uppercase tracking-widest">Value Creation</div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/80 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-secondary-foreground font-bold text-2xl">AI</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/80 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-accent-foreground font-bold text-lg">Tech</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/80 rounded-lg flex items-center justify-center shadow-xl">
                <span className="text-primary-foreground font-bold text-xs">Cloud</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-6 lg:left-8 flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-background/10 hover:bg-background/15 text-background transition-colors"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-8 bg-primary" 
                    : "w-4 bg-background/25 hover:bg-background/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
