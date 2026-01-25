const steps = [
  {
    number: '1',
    title: 'Create Your Business Profile',
    description: 'Add your logo, business name, email, phone, tax ID, and you\'re ready to create professional invoices.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Create an Invoice or Quotation',
    description: 'Use our free invoice maker to add items, rates, taxes, discounts, and clients. All calculations happen automatically. Create professional quotations with our quotation maker and convert them to invoices when accepted.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Save, Download & Share',
    description: 'Generate a ready-to-send PDF. Share instantly via email, WhatsApp, or messaging apps.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            How to Use Our Free Invoice Maker
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto opacity-70">
            Get started with our free invoice maker and quotation maker app in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 sm:px-0">
              {/* Large background number */}
              <div className="relative mb-6 sm:mb-8">
                <div className="text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold text-black leading-none opacity-30">
                  {step.number}
                </div>
                {/* Icon positioned at bottom corner of the number */}
                <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-2 border-black bg-white flex items-center justify-center transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4">
                  {step.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="mt-4 sm:mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black opacity-70 leading-relaxed px-2 sm:px-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

