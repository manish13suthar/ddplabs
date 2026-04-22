import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "DDP Labs delivered our enterprise CRM system 2 weeks ahead of schedule with zero bugs. Their expertise in React and AWS helped us scale from startup to serving 10,000+ users.",
    author: "TechCorp",
    role: "Enterprise Platform",
  },
  {
    quote:
      "Best development partner we've worked with. Quality matches our in-house team with excellent project management.",
    author: "FinanceApp",
    role: "Fintech Product",
  },
]

export function Awards() {
  return (
    <section id="reviews" className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Reviews</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight">
            Trusted by{" "}
            <span className="text-secondary">leading teams</span>
          </h2>
          <p className="mt-6 text-lg text-background/70 max-w-2xl mx-auto">
            Premium engineering with predictable delivery—built for speed, quality, and clean communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 text-secondary mb-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-secondary" />
                ))}
              </div>

              <blockquote className="text-lg text-foreground leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
