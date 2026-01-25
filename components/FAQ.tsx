'use client'

import { useState, useRef } from 'react'

const faqs = [
  {
    question: 'Is this a free invoice maker app?',
    answer: 'Yes! HandM Digital Invoice is completely free. All core features including invoice creation, quotation maker, PDF generation, payment tracking, and client management are free forever. No subscription required, no hidden fees.',
  },
  {
    question: 'How do I create an invoice with this free invoice maker?',
    answer: 'Creating an invoice is simple: 1) Set up your business profile (logo, details, tax ID), 2) Add client information, 3) Add line items with quantities and rates, 4) Apply taxes and discounts if needed, 5) Generate and share the PDF. The app calculates totals automatically.',
  },
  {
    question: 'Can I create quotations with this quotation maker app?',
    answer: 'Absolutely! Our quotation maker lets you create professional quotations with versioning, expiry dates, and follow-up reminders. You can convert accepted quotations to invoices with one tap. Track quotation status (Draft, Sent, Accepted, Rejected, Expired, Converted).',
  },
  {
    question: 'Does the free invoice maker work offline?',
    answer: 'Yes! This is an offline-first invoice maker app. You can create invoices, quotations, manage clients, track payments, and receive reminders completely offline. All data is stored locally on your device.',
  },
  {
    question: 'Can I customize PDF invoices with my logo?',
    answer: 'Yes! Add your business logo, company name, address, contact details, tax ID, and customize invoice templates. The PDF generator creates professional, branded invoices that you can preview before downloading or sharing.',
  },
  {
    question: 'Does this invoice maker support multiple currencies?',
    answer: 'Yes! Our free invoice maker supports multiple currencies. You can select different currencies for each invoice, customize currency symbols, and create invoices for international clients. Perfect for freelancers and businesses working globally.',
  },
  {
    question: 'Can I track payments with this invoice app?',
    answer: 'Yes! Track full and partial payments per invoice. Record payment history with dates and notes. The app automatically updates invoice status (Paid, Pending, Overdue). View detailed payment records in the payment history section.',
  },
  {
    question: 'How do I manage multiple businesses with this invoice maker?',
    answer: 'You can create and manage multiple business profiles from one app. Each profile has its own logo, business information, tax ID, and invoice settings. Switch between businesses easily - perfect for freelancers with multiple ventures.',
  },
  {
    question: 'Is my invoice data secure?',
    answer: 'Yes! All data is stored locally on your device with secure SQLite database. You have full control over your data. Optional cloud backup and restore available. Google Drive integration for additional backup. Export and import capabilities for data portability.',
  },
  {
    question: 'What devices support this free invoice maker app?',
    answer: 'Currently available for Android and iOS. The app works on phones and tablets. Web version coming soon. Cross-platform support ensures you can access your invoices from any device.',
  },
  {
    question: 'Can I convert quotations to invoices?',
    answer: 'Yes! Our quotation maker allows you to convert accepted quotations to invoices instantly with one tap. All quotation details, line items, taxes, and discounts are automatically transferred to the new invoice.',
  },
  {
    question: 'Does this invoice maker send payment reminders?',
    answer: 'Yes! Get smart notifications for pending invoices, due dates, overdue invoices, and quotation follow-ups. Reminders work offline and send alerts even when the app is closed. Never miss a payment again.',
  },
]

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]))
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const isOpen = (index: number) => openIndices.has(index)

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white border-b border-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Frequently Asked Questions About Our Free Invoice Maker
          </h2>
          <p className="text-base sm:text-lg text-black max-w-2xl mx-auto opacity-70 px-4 sm:px-0">
            Everything you need to know about our free invoice maker and quotation maker app
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpenIndex = isOpen(index)
            return (
              <div
                key={index}
                className={`border border-black overflow-hidden transition-colors duration-300 ${
                  isOpenIndex ? 'bg-black' : 'bg-white'
                }`}
              >
                <button
                  type="button"
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset group touch-manipulation ${
                    isOpenIndex 
                      ? 'bg-black hover:bg-black' 
                      : 'bg-white hover:bg-black'
                  }`}
                  aria-expanded={isOpenIndex}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`text-sm sm:text-base font-semibold pr-6 sm:pr-8 transition-colors duration-200 leading-snug ${
                    isOpenIndex ? 'text-white' : 'text-black group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-500 ease-out ${
                      isOpenIndex ? 'transform rotate-180 text-white' : 'text-black group-hover:text-white'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    maxHeight: isOpenIndex 
                      ? `${contentRefs.current[index]?.scrollHeight || 200}px` 
                      : '0px',
                    opacity: isOpenIndex ? 1 : 0,
                  }}
                >
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el
                    }}
                    id={`faq-answer-${index}`}
                    className={`px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-white transition-opacity duration-500 leading-relaxed ${
                      isOpenIndex ? 'opacity-90' : 'opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

