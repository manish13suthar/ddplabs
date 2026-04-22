export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* soft base glow */}
      <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/15 to-accent/20 blur-3xl" />

      {/* corner accents */}
      <div className="absolute -left-48 top-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-48 bottom-24 h-[30rem] w-[30rem] rounded-full bg-secondary/10 blur-3xl" />

      {/* subtle grid/noise vibe via gradients (no image asset) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px] opacity-40 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  )
}

