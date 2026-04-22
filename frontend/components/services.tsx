"use client"

import { useState } from "react"
import {
  ArrowRight,
  Bot,
  Database,
  Zap,
  Cloud,
  Code2,
  Smartphone,
  Boxes,
  UsersRound,
  Bug,
  Cpu,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Intelligent automation with AI chatbots, custom ML models, and workflow agents to improve speed, quality, and efficiency.",
    color: "bg-primary",
    link: "#contact",
  },
  {
    icon: Database,
    title: "Data Science & Data Engineering",
    description:
      "Reliable pipelines, analytics-ready warehouses, and ML-driven insights built for production with strong governance.",
    color: "bg-secondary",
    link: "#contact",
  },
  {
    icon: Zap,
    title: "2-Day Proof of Concept (POC)",
    description:
      "Validate your idea in 48 hours with a working prototype that’s demoable, deployable, and measurable.",
    color: "bg-accent",
    link: "#contact",
  },
  {
    icon: Cloud,
    title: "Serverless Cloud Solutions (AWS)",
    description:
      "Scalable serverless architectures with Lambda, DynamoDB, API Gateway, S3 and event-driven integrations.",
    color: "bg-primary",
    link: "#contact",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Modern React/Next.js + Node/TypeScript builds, clean APIs, and production-grade delivery from MVP to scale.",
    color: "bg-secondary",
    link: "#contact",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform apps with polished UX, offline-first capability, and performance that holds up in production.",
    color: "bg-accent",
    link: "#contact",
  },
  {
    icon: Boxes,
    title: "ERP Solutions",
    description:
      "ERP implementations and custom builds to streamline finance, HR, supply chain, inventory, and reporting.",
    color: "bg-primary",
    link: "#contact",
  },
  {
    icon: UsersRound,
    title: "CRM Solutions",
    description:
      "CRM customization and integrations for lead management, sales automation, customer analytics, and support workflows.",
    color: "bg-secondary",
    link: "#contact",
  },
  {
    icon: Bug,
    title: "QA Testing",
    description:
      "Manual + automated testing across unit/integration/UI, plus performance and security validation for release confidence.",
    color: "bg-accent",
    link: "#contact",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Solutions",
    description:
      "Connected-device software, secure provisioning, MQTT pipelines, OTA updates, and scalable ingestion platforms.",
    color: "bg-primary",
    link: "#contact",
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What we do</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight max-w-3xl">
            Turnkey delivery across{" "}
            <span className="text-primary">product, data, AI, and cloud</span>
          </h2>
          <p className="mt-6 text-lg text-background/70 max-w-2xl">
            Built for speed and quality—from a 2-day POC to enterprise-grade systems.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.link}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg ${service.color} mb-6`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Read more link */}
              <div className="flex items-center text-sm font-medium text-primary">
                <span>Read more</span>
                <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                  hoveredIndex === index ? "translate-x-1" : ""
                }`} />
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${service.color} opacity-5 rounded-tr-xl rounded-bl-[100%]`} />
            </Link>
          ))}

          {/* CTA card */}
          <Link
            href="#contact"
            className="group relative bg-primary/5 rounded-xl p-8 border-2 border-dashed border-primary/30 hover:border-primary transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-lg font-semibold text-background mb-2">
              Get a project quote
            </h3>
              <p className="text-sm text-background/70">
              Tell us what you’re building—we’ll reply within 24 hours.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
