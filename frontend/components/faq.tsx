import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Why choose DDP Labs over other development companies?",
    a: "Fast turnaround (2-day POCs), strong communication, and production-grade engineering. We optimize for measurable outcomes: speed, reliability, and maintainability.",
  },
  {
    q: "What types of software development services do you offer?",
    a: "Full-stack web, mobile, AI agents & automation, data engineering, AWS/serverless, ERP/CRM solutions, IoT/embedded, and QA testing.",
  },
  {
    q: "How much does software development cost?",
    a: "It depends on scope. Common ranges: 2-day POCs $2,000–$5,000 fixed, and larger builds priced by milestones or hourly. We’ll propose options with clear trade-offs.",
  },
  {
    q: "How long does a typical project take?",
    a: "POCs in 48 hours, MVPs in ~6–12 weeks, and enterprise platforms in 3–9 months depending on complexity, integrations, and compliance needs.",
  },
  {
    q: "How do you ensure security and IP protection?",
    a: "Security-first practices (least privilege, secrets hygiene, dependency scanning), careful access control, and clean handover. We can also work under NDA and client-owned repos/infrastructure.",
  },
]

export function FAQ() {
  return (
    <section className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight">
            Software development{" "}
            <span className="text-secondary">outsourcing</span> questions
          </h2>
          <p className="mt-6 text-lg text-background/70">
            Straight answers. If you have a specific constraint (compliance, timeline, stack), put it in the
            form and we’ll tailor the proposal.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-2 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, idx) => (
              <AccordionItem key={f.q} value={`item-${idx + 1}`} className="px-4">
                <AccordionTrigger className="text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

