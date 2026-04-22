import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SiteBackground } from "@/components/site-background"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { CaseStudies } from "@/components/case-studies"
import { Insights } from "@/components/insights"
import { Awards } from "@/components/awards"
import { News } from "@/components/news"
import { WhyChoose } from "@/components/why-choose"
import { FAQ } from "@/components/faq"
import { ProjectQuoteForm } from "@/components/project-quote-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SiteBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <WhyChoose />
        <Stats />
        <CaseStudies />
        <Insights />
        <News />
        <Awards />
        <FAQ />
        <ProjectQuoteForm />
        <Footer />
      </div>
    </main>
  )
}
