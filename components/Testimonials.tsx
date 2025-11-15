'use client'

import { useState, useRef } from 'react'

const testimonials = [
  {
    name: 'Amit S.',
    role: 'Freelancer',
    quote: 'This app saves me HOURS every week. Sending professional invoices has never been easier.',
  },
  {
    name: 'Sonal P.',
    role: 'Digital Agency',
    quote: 'The reminders and follow-up features are a game changer. No more missed payments.',
  },
  {
    name: 'Rohit K.',
    role: 'Consultant',
    quote: 'Simple, fast, and accurate. I manage my entire billing workflow with just this one app.',
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const totalSlides = testimonials.length

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
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            What Our Users Say
          </h2>
          <p className="text-base sm:text-lg text-black max-w-2xl mx-auto opacity-70 px-4 sm:px-0">
            Real feedback from early beta users
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
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-2"
                >
                  <div className="bg-white p-5 sm:p-6 border border-black">
                    <div className="mb-3 sm:mb-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 italic opacity-80 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-black">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-black opacity-60">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-black'
                    : 'w-2 bg-black opacity-30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 border border-black"
            >
              <div className="mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 italic opacity-80 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-sm sm:text-base text-black">
                  {testimonial.name}
                </div>
                <div className="text-xs sm:text-sm text-black opacity-60">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

