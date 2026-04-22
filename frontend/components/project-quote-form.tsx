"use client"

import { useMemo, useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  workEmail: z.string().email("Enter a valid work email"),
  companyName: z.string().min(2, "Enter your company name"),
  country: z.string().min(1, "Select a country"),
  projectType: z.string().min(1, "Select a project type"),
  budgetRange: z.string().min(1, "Select a budget range"),
  timeline: z.string().min(1, "Select a timeline"),
  projectDescription: z.string().min(10, "Tell us a bit more (10+ chars)"),
})

type FormValues = z.infer<typeof schema>

export function ProjectQuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  const defaultValues = useMemo<FormValues>(
    () => ({
      fullName: "",
      workEmail: "",
      companyName: "",
      country: "",
      projectType: "",
      budgetRange: "",
      timeline: "",
      projectDescription: "",
    }),
    [],
  )

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onSubmit",
  })

  const onSubmit = async (values: FormValues) => {
    // No backend wired here yet; this keeps UX consistent while you hook up API/email.
    console.log("Project quote request:", values)
    setSubmitted(true)
    form.reset(defaultValues)
  }

  return (
    <section id="contact" className="relative py-24 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Get Your Project Started Today
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-background leading-tight">
              Get Project <span className="text-primary">Quote</span>
            </h2>
            <p className="mt-6 text-lg text-background/70 leading-relaxed">
              Tell us about your project and we&apos;ll send a detailed proposal within 24 hours.
            </p>

            <div className="mt-10 grid gap-4">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="text-sm font-semibold text-foreground">Quick Response</div>
                <div className="mt-1 text-sm text-muted-foreground">24hr guaranteed response time</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="text-sm font-semibold text-foreground">FREE</div>
                <div className="mt-1 text-sm text-muted-foreground">Initial consultation</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="text-sm font-semibold text-foreground">48hr</div>
                <div className="mt-1 text-sm text-muted-foreground">Detailed proposal delivery</div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <div className="text-sm font-semibold text-foreground">Direct Contact</div>
              <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between gap-4">
                  <span>Email</span>
                  <a
                    className="text-primary hover:underline font-medium"
                    href="mailto:sales@ddp-labs.furieo.com"
                  >
                    sales@ddp-labs.furieo.com
                  </a>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>WhatsApp</span>
                  <a className="text-primary hover:underline font-medium" href="tel:+917984180885">
                    +91 79841 80885
                  </a>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="text-foreground font-medium">Operating hours</div>
                  <div className="mt-1">
                    Mon–Fri, 9 AM – 6 PM (UTC+5:30)
                    <br />
                    Emergency support: 24/7 for active projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
              {submitted && (
                <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground">
                  Thanks—request received. We&apos;ll get back to you within 24 hours.
                </div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" autoComplete="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="workEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="name@company.com"
                              type="email"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Company" autoComplete="organization" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="United States">United States</SelectItem>
                              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                              <SelectItem value="Germany">Germany</SelectItem>
                              <SelectItem value="France">France</SelectItem>
                              <SelectItem value="Netherlands">Netherlands</SelectItem>
                              <SelectItem value="Canada">Canada</SelectItem>
                              <SelectItem value="Australia">Australia</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Project Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="2-Day Proof of Concept">2-Day Proof of Concept</SelectItem>
                              <SelectItem value="Web Application">Web Application</SelectItem>
                              <SelectItem value="Mobile App">Mobile App</SelectItem>
                              <SelectItem value="AI/ML Solution">AI/ML Solution</SelectItem>
                              <SelectItem value="ERP/CRM System">ERP/CRM System</SelectItem>
                              <SelectItem value="Cloud Migration">Cloud Migration</SelectItem>
                              <SelectItem value="IoT Solution">IoT Solution</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budgetRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Budget" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Under $10,000">Under $10,000</SelectItem>
                              <SelectItem value="$10,000 - $25,000">$10,000 - $25,000</SelectItem>
                              <SelectItem value="$25,000 - $50,000">$25,000 - $50,000</SelectItem>
                              <SelectItem value="$50,000 - $100,000">$50,000 - $100,000</SelectItem>
                              <SelectItem value="$100,000+">$100,000+</SelectItem>
                              <SelectItem value="Not Sure">Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Timeline</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ASAP (2-4 weeks)">ASAP (2-4 weeks)</SelectItem>
                            <SelectItem value="1-2 Months">1-2 Months</SelectItem>
                            <SelectItem value="3-6 Months">3-6 Months</SelectItem>
                            <SelectItem value="6+ Months">6+ Months</SelectItem>
                            <SelectItem value="Still Planning">Still Planning</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share a quick overview, links, constraints, and what success looks like…"
                            className="min-h-28"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={form.formState.isSubmitting}
                  >
                    Get Project Quote
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

