'use client'

import { useState, useRef } from 'react'

const features = [
  {
    title: 'Free Invoice Maker & Quotation Maker',
    description: 'Create professional invoices and quotations instantly. Auto-generated invoice numbers, real-time calculations, multiple tax rates, item-level and invoice-level discounts, payment terms, and full status tracking (Draft, Sent, Paid, Overdue, Cancelled).',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Quotation to Invoice Conversion',
    description: 'Create professional quotations with versioning, expiry dates, and follow-up reminders. Convert accepted quotations to invoices with one tap. Track quotation status (Draft, Sent, Accepted, Rejected, Expired, Converted).',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Payment Tracking & Partial Payments',
    description: 'Track full and partial payments per invoice. Record payment history with dates and notes. Automatic payment status updates. Refund tracking. Payment history bottom sheet for detailed records.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Professional PDF Generation',
    description: 'Generate branded PDF invoices with your logo, business information, and custom templates. Preview PDFs before download. Download, print, or share instantly via email, WhatsApp, or messaging apps. Signature support on PDFs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Client Management System',
    description: 'Complete client database with contact details. Add clients inline while creating invoices. Client search and selection. Client history tracking. Import clients from contacts. Auto-fill client data in invoices and quotations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Currency Support',
    description: 'Create invoices in multiple currencies. Custom currency symbols. Currency selection per invoice. Perfect for international businesses and freelancers working with global clients.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Multiple Business Profiles',
    description: 'Manage multiple business profiles from one app. Switch between businesses easily. Each profile has its own logo, business information, tax ID, and invoice settings. Perfect for freelancers with multiple ventures.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Smart Notifications & Reminders',
    description: 'Never miss a payment. Get alerts for pending invoices, due dates, overdue invoices, and quotation follow-ups. Works offline and sends reminders even when the app is closed.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'Dashboard & Revenue Analytics',
    description: 'Track your business performance with revenue dashboard. View total revenue, paid amount, pending invoices, and overdue amounts. Revenue charts and business insights. Quick overview of your financial health.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Offline-First & Cloud Backup',
    description: 'Works completely offline. All data stored locally with SQLite database. Optional cloud backup and restore. Google Drive integration. Export and import capabilities. Your data, your control.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Item Master & Product Catalog',
    description: 'Create a product and service catalog. Save frequently used items with descriptions, rates, and tax information. Quick add items to invoices from your catalog. Save time on repetitive invoicing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Advanced Search & Filters',
    description: 'Find invoices and quotations instantly. Search by client name, invoice number, email, or description. Filter by status (Draft, Sent, Paid, Overdue), date range, or amount. Sort by newest, oldest, or recently updated.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
]

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Show 2 items per slide on mobile
  const itemsPerSlide = 2
  const totalSlides = Math.ceil(features.length / itemsPerSlide)

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1)
    }
    if (isRightSwipe && currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Complete Invoice & Quotation Maker Features
          </h2>
          <p className="text-base sm:text-lg text-black max-w-2xl mx-auto opacity-70 px-4 sm:px-0">
            Everything you need in a free invoice maker and quotation maker app — from invoice creation to payment tracking
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden">
          <div
            ref={sliderRef}
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full flex gap-4"
                >
                  {features
                    .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                    .map((feature, index) => (
                      <div
                        key={slideIndex * itemsPerSlide + index}
                        className="flex-1 p-5 border border-black hover:bg-black transition-colors group min-w-0"
                      >
                        <div className="w-10 h-10 border border-black flex items-center justify-center mb-3 group-hover:border-white group-hover:text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-black opacity-70 group-hover:text-white group-hover:opacity-90 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-black'
                    : 'w-2 bg-black opacity-30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 border border-black hover:bg-black transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-black flex items-center justify-center mb-3 sm:mb-4 group-hover:border-white group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-black opacity-70 group-hover:text-white group-hover:opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

