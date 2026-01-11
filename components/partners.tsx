export function Partners() {
  const partners = [
    { name: "Google", logo: "G" },
    { name: "Meta", logo: "M" },
    { name: "Paystack", logo: "P" },
    { name: "Flutterwave", logo: "F" },
    { name: "Interswitch", logo: "I" },
    { name: "AWS", logo: "A" },
  ]

  return (
    <section className="py-16 lg:py-24 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center w-24 h-12 lg:w-32 lg:h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="text-2xl lg:text-3xl font-bold text-muted-foreground group-hover:text-teal transition-colors">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">Google Partner</div>
            <p className="text-muted-foreground text-sm">Certified Google Ads Partner</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">Meta Partner</div>
            <p className="text-muted-foreground text-sm">Official Meta Business Partner</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">ISO Certified</div>
            <p className="text-muted-foreground text-sm">Quality Management System</p>
          </div>
        </div>
      </div>
    </section>
  )
}
