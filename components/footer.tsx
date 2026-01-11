import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-lg">C</span>
              </div>
              <span className="text-background font-bold text-xl tracking-tight">Cyfek</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
              A full-service digital company offering software development, digital marketing, and free tech education
              through Cyfek Academy. Home of SELTRA.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-background group-hover:text-navy" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-background group-hover:text-navy" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-background group-hover:text-navy" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-teal rounded-full flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-background group-hover:text-navy" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/#about" },
                { label: "Our Services", href: "/#services" },
                { label: "Portfolio", href: "/#work" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-teal transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-background mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://seltra.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-teal transition-colors text-sm"
                >
                  SELTRA
                </a>
              </li>
              <li>
                <Link href="/academy" className="text-background/70 hover:text-teal transition-colors text-sm">
                  Cyfek Academy
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-background/70 hover:text-teal transition-colors text-sm">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal mt-0.5" />
                <a
                  href="mailto:hello@cyfek.com"
                  className="text-background/70 hover:text-teal transition-colors text-sm"
                >
                  hello@cyfek.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal mt-0.5" />
                <a href="tel:+2341234567890" className="text-background/70 hover:text-teal transition-colors text-sm">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal mt-0.5" />
                <span className="text-background/70 text-sm">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© {new Date().getFullYear()} Cyfek. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-background/50 hover:text-teal text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/50 hover:text-teal text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
