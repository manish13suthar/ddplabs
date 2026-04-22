import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Fastest Time-to-Market",
    description: "2-day proof of concepts, 6–12 week MVPs, and 24-hour response for urgent requirements.",
  },
  {
    title: "Enterprise-Grade Quality",
    description: "Security-first engineering, automated testing, performance tuning, and production-ready delivery.",
  },
  {
    title: "Cost-Effective, Transparent",
    description: "Premium quality at competitive rates with clear scope, timelines, and weekly deliverables.",
  },
  {
    title: "Proven Track Record",
    description: "50+ projects delivered with 98% client satisfaction and consistent on-time execution.",
  },
  {
    title: "Global Coverage",
    description: "Timezone-friendly collaboration, clear communication, and dependable ongoing support.",
  },
  {
    title: "Modern Tech Stack",
    description: "React/Next.js, Node/TypeScript, AWS, data engineering, and AI/ML built for production.",
  },
]

export function WhyChoose() {
  return (
    <section className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Why Choose DDP Labs
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight">
              Built to ship{" "}
              <span className="text-secondary">fast</span>—without the mess
            </h2>
            <p className="mt-6 text-lg text-background/70 leading-relaxed">
              We act like an extension of your team: crisp scope, clean communication, and production-grade
              engineering you can trust.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{r.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

