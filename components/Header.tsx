'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#screenshots', label: 'App In Action' },
    { href: '#faq', label: 'FAQ' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/handm.png" 
                alt="handmdigital" 
                className="h-12 sm:h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black hover:bg-black hover:text-white px-3 py-2 transition-all duration-300 ease-in-out"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.digiinvoicemaker.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-black text-sm font-medium bg-black text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Download the app"
            >
              Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 border border-black hover:bg-black hover:text-white transition-colors touch-manipulation"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-black">
            <div className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-black hover:bg-black hover:text-white transition-colors touch-manipulation"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://play.google.com/store/apps/details?id=com.digiinvoicemaker.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 mt-2 text-base font-medium text-center border border-black bg-black text-white hover:bg-white hover:text-black transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

