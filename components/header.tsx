"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContact } from "./contact-provider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const { openContactPopup } = useContact();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero-bg/95 backdrop-blur-sm border-b border-hero-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
              <span className="text-navy font-bold text-lg">C</span>
            </div>
            <span className="text-hero-foreground font-bold text-xl tracking-tight">Cyfek</span>
          */}
            <img
              src="/logo.png"
              alt="logo"
              className="w-[300px] h-[70px] object-cover -ml-[4rem]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/what-we-do"
              className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium"
            >
              What We Do
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium">
                Company
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-hero-bg border border-hero-foreground/10 rounded-xl shadow-xl overflow-hidden">
                  <Link
                    href="/#about"
                    className="block px-4 py-3 hover:bg-teal/10 transition-colors border-b border-hero-foreground/10"
                  >
                    <span className="text-hero-foreground font-medium text-sm">
                      About Us
                    </span>
                    <p className="text-hero-foreground/60 text-xs mt-0.5">
                      Learn about our mission
                    </p>
                  </Link>
                  <Link
                    href="/what-we-do#team"
                    className="block px-4 py-3 hover:bg-teal/10 transition-colors"
                  >
                    <span className="text-hero-foreground font-medium text-sm">
                      Our Team
                    </span>
                    <p className="text-hero-foreground/60 text-xs mt-0.5">
                      Meet our leadership
                    </p>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#services"
              className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium">
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-hero-bg border border-hero-foreground/10 rounded-xl shadow-xl overflow-hidden">
                  <Link
                    href="/products"
                    className="block px-4 py-3 hover:bg-teal/10 transition-colors border-b border-hero-foreground/10"
                  >
                    <span className="text-teal font-semibold text-sm">
                      All Products
                    </span>
                    <p className="text-hero-foreground/60 text-xs mt-0.5">
                      Explore our ecosystem
                    </p>
                  </Link>
                  <a
                    href="https://seltra.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-teal/10 transition-colors"
                  >
                    <span className="text-hero-foreground font-medium text-sm">
                      SELTRA
                    </span>
                    <p className="text-hero-foreground/60 text-xs mt-0.5">
                      Peer-to-peer marketing platform
                    </p>
                  </a>
                  <Link
                    href="/academy"
                    className="block px-4 py-3 hover:bg-teal/10 transition-colors"
                  >
                    <span className="text-hero-foreground font-medium text-sm">
                      Cyfek Academy
                    </span>
                    <p className="text-hero-foreground/60 text-xs mt-0.5">
                      Free tech education program
                    </p>
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/#work"
              className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={openContactPopup}
              className="bg-teal text-navy hover:bg-teal/90 font-semibold px-6"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-hero-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-hero-foreground/10">
            <div className="flex flex-col gap-4">
              <Link
                href="/what-we-do"
                className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                What We Do
              </Link>
              <Link
                href="/#about"
                className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#services"
                className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/products"
                className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/academy"
                className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Academy
              </Link>
              <Link
                href="/#work"
                className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/blog"
                className="text-hero-foreground/80 hover:text-teal transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  openContactPopup();
                }}
                className="bg-teal text-navy hover:bg-teal/90 font-semibold w-full mt-2"
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
