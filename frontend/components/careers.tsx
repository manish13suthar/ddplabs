import { ArrowRight, Users, GraduationCap, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work alongside brilliant minds who challenge and inspire you every day.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Access world-class training, certifications, and growth opportunities.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Shape the future of industries and communities around the world.",
  },
  {
    icon: Heart,
    title: "Wellbeing First",
    description: "We prioritize your health, balance, and personal fulfillment.",
  },
]

export function Careers() {
  return (
    <section id="careers" className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Careers</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight">
              Build a career as exciting as the{" "}
              <span className="text-accent">world we&apos;re shaping</span>
            </h2>
            <p className="mt-6 text-lg text-background/70 leading-relaxed">
              Grow personally and professionally in a global company that helps you unlock your full potential. Join a community of innovators, dreamers, and doers.
            </p>

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-background mb-1">{benefit.title}</h3>
                    <p className="text-sm text-background/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Search jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Life at DDP Labs
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Join our team</h4>
                  <p className="text-sm text-muted-foreground">750,000+ people worldwide</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-foreground">Open positions</span>
                    <span className="text-2xl font-bold text-primary">2,500+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Across 120+ countries</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-foreground">Training hours</span>
                    <span className="text-2xl font-bold text-secondary">40M+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Invested in our people annually</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-foreground">Employee satisfaction</span>
                    <span className="text-2xl font-bold text-accent">4.2/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Glassdoor rating</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-medium">
              #4 Best Workplace
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg text-sm font-medium">
              Fortune 500
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
