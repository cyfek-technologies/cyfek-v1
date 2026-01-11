export function BlogHero() {
  return (
    <section className="bg-hero-bg pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Our Blog</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6 leading-tight">
            Insights & Ideas for <span className="text-teal">Digital Growth</span>
          </h1>
          <p className="text-xl text-hero-foreground/70 leading-relaxed">
            Expert perspectives on marketing, technology, and business growth from the Cyfek team. Stay ahead with
            actionable insights and industry trends.
          </p>
        </div>
      </div>
    </section>
  )
}
