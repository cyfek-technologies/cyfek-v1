export function WhatWeDoHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-hero-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6 leading-tight">
            What We Do
          </h1>
          <p className="text-xl md:text-2xl text-hero-foreground/70 leading-relaxed max-w-3xl">
            An innovative blend of software engineers, digital marketers, product designers, and strategic educators.
            Our team is the driving force behind every transformation we deliver.
          </p>

          {/* On this page navigation */}
          <div className="mt-12 pt-8 border-t border-hero-foreground/10">
            <p className="text-sm font-semibold text-teal mb-4 uppercase tracking-wider">On this page</p>
            <nav className="flex flex-wrap gap-4">
              <a href="#gallery" className="text-hero-foreground/60 hover:text-teal transition-colors text-sm">
                Our Work
              </a>
              <span className="text-hero-foreground/30">·</span>
              <a href="#services" className="text-hero-foreground/60 hover:text-teal transition-colors text-sm">
                Services
              </a>
              <span className="text-hero-foreground/30">·</span>
              <a href="#team" className="text-hero-foreground/60 hover:text-teal transition-colors text-sm">
                Leadership Team
              </a>
              <span className="text-hero-foreground/30">·</span>
              <a href="#contact" className="text-hero-foreground/60 hover:text-teal transition-colors text-sm">
                Work With Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
