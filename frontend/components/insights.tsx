import { ArrowRight, FileText, TrendingUp, Lightbulb } from "lucide-react"
import Link from "next/link"

const insights = [
  {
    type: "Research Report",
    icon: FileText,
    title: "Talent Reinventors: Delivering value with and for people",
    description: "How can people and AI thrive together? Explore six leadership traits that enable breakthrough results.",
    featured: true,
  },
  {
    type: "Research Report",
    icon: TrendingUp,
    title: "AI innovation is nonstop. Your cloud foundation should be too.",
    description: "Modern cloud is the foundation for AI innovation. Discover three strategic pathways for boosting cloud maturity.",
    featured: false,
  },
  {
    type: "Perspective",
    icon: Lightbulb,
    title: "The dawn of the agentic deal",
    description: "Agentic AI is reshaping M&A. See how leading acquirers build AI into the deal thesis to drive advantage.",
    featured: false,
  },
  {
    type: "Research Report",
    icon: FileText,
    title: "Making self-funding supply chains real",
    description: "Discover how AI and autonomous technologies create self‑funding supply chains, cutting costs and boosting productivity.",
    featured: false,
  },
  {
    type: "Perspective",
    icon: Lightbulb,
    title: "Pulse of Change: What&apos;s top of mind for leaders",
    description: "Global executives enter 2026 with unmistakable confidence. But beneath the optimism, data shows gaps in the way of scale.",
    featured: false,
  },
  {
    type: "Research Report",
    icon: TrendingUp,
    title: "The age of co-intelligence",
    description: "The age of co-intelligence is here as humans and AI collaborate to drive growth and redeploy talent.",
    featured: false,
  },
]

export function Insights() {
  const featuredInsight = insights.find(i => i.featured)
  const otherInsights = insights.filter(i => !i.featured)

  return (
    <section id="insights" className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Insights</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight max-w-3xl">
            Latest thinking from our{" "}
            <span className="text-secondary">experts</span>
          </h2>
        </div>

        {/* Featured + Grid layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured insight */}
          {featuredInsight && (
            <Link 
              href="#"
              className="group relative bg-foreground rounded-xl overflow-hidden lg:row-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="relative p-8 lg:p-12 h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-6">
                    <featuredInsight.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{featuredInsight.type}</span>
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-background mb-4 group-hover:text-primary transition-colors">
                    {featuredInsight.title}
                  </h3>
                  <p className="text-background/70 text-lg leading-relaxed">
                    {featuredInsight.description}
                  </p>
                </div>
                <div className="flex items-center text-primary font-medium mt-6">
                  <span>Read more</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          )}

          {/* Other insights grid */}
          <div className="grid gap-6">
            {otherInsights.slice(0, 2).map((insight) => (
              <Link
                key={insight.title}
                href="#"
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <insight.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{insight.type}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{insight.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional insights row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {otherInsights.slice(2).map((insight) => (
            <Link
              key={insight.title}
              href="#"
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-muted rounded-full mb-4">
                <insight.icon className="h-3 w-3 text-primary" />
                <span className="text-xs text-muted-foreground">{insight.type}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {insight.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{insight.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
