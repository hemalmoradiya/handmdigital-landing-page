'use client'

import { useState, useRef } from 'react'

const faqs = [
  {
    question: 'Is Digital Invoice free?',
    answer: 'Yes. Core features are free forever with an optional Pro upgrade coming soon.',
  },
  {
    question: 'Does the app work offline?',
    answer: 'Absolutely. You can create invoices, manage clients, and receive reminders offline.',
  },
  {
    question: 'Can I customize PDF invoices?',
    answer: 'Yes. Add your logo, business details, tax ID, and choose templates.',
  },
  {
    question: 'Is my data secure?',
    answer: 'All data is stored locally on your device with backup options available.',
  },
  {
    question: 'What devices are supported?',
    answer: 'Android and iOS versions are available. Web version coming soon.',
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
            Frequently Asked Questions
          </h2>
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

