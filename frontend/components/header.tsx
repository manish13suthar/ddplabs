"use client"

import { useCallback, useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Reviews", href: "#reviews" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleHashNav = useCallback((href: string) => {
    if (!href.startsWith("#")) return

    const target = document.querySelector(href)
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      history.pushState(null, "", href)
    } else {
      // Fallback: still update URL hash even if element is missing
      location.hash = href
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-serif text-2xl font-bold text-primary">DDP Labs</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
            >
              <Link
                href={item.href}
                scroll={false}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={(e) => {
                  if (!item.href.startsWith("#")) return
                  e.preventDefault()
                  handleHashNav(item.href)
                }}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link
              href="#contact"
              scroll={false}
              className="inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                handleHashNav("#contact")
              }}
            >
              Start a 2-day POC
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={false}
                className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  if (!item.href.startsWith("#")) return
                  e.preventDefault()
                  handleHashNav(item.href)
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link
                  href="#contact"
                  scroll={false}
                  className="inline-flex items-center justify-center gap-2"
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    e.preventDefault()
                    handleHashNav("#contact")
                  }}
                >
                  Start a 2-day POC
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
