const benefits = [
  'Create invoices in under 1 minute',
  'Convert quotations to invoices instantly',
  'Automate follow-ups and reminders',
  'Manage clients without spreadsheets',
  'Track payments & overdue invoices easily',
  'Branded PDFs with your business identity',
  'Works offline — no internet required',
  'Reliable local storage & backup tools',
]

export default function Benefits() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-black p-6 sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 sm:mb-8 text-center">
            Why Choose Digital Invoice?
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base sm:text-lg text-black leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

