import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-white min-h-screen flex items-center border-b border-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left max-w-5xl mx-auto lg:mx-0 lg:pr-8 order-2 lg:order-1">
            <div className="mb-3 sm:mb-4 -mx-4 sm:-mx-8 lg:-mx-16 xl:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+8rem)] xl:w-[calc(100%+12rem)] px-2 sm:px-0">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-black">handmdigital</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 block -mx-4 sm:-mx-8 lg:-mx-16 xl:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+8rem)] xl:w-[calc(100%+12rem)]">
              <div className="block">Free Invoice Maker &amp; Quotation Maker</div>
              <div className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">Create professional invoices in minutes</div>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 opacity-70 block -mx-4 sm:-mx-8 lg:-mx-16 xl:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+8rem)] xl:w-[calc(100%+12rem)] px-2 sm:px-0">
              The best free invoice maker and quotation maker app for freelancers and small businesses. Create invoices, quotations, generate PDFs, track payments, manage clients, and send reminders — all for free. Works offline. No subscription required. Download the free invoice maker app now.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6 -mx-4 sm:-mx-8 lg:-mx-16 xl:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+8rem)] xl:w-[calc(100%+12rem)] px-2 sm:px-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.digiinvoicemaker.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-black text-sm sm:text-base font-medium bg-black text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Get the app for free"
              >
                Get the App — Free
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-black text-sm sm:text-base font-medium text-black bg-white hover:bg-black hover:text-white transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Supporting microcopy */}
            <p className="text-xs sm:text-sm text-black opacity-60 block -mx-4 sm:-mx-8 lg:-mx-16 xl:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+8rem)] xl:w-[calc(100%+12rem)] px-2 sm:px-0">
              Free forever • Works offline • Professional PDFs • Multi-currency • No subscription
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end lg:-mr-8 lg:ml-auto order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-md">
              <Image 
                src="/hero-phone.png" 
                alt="HandM Digital Invoice app preview showing invoice creation interface on mobile device"
                width={400}
                height={800}
                priority
                className="w-full h-auto max-h-[500px] sm:max-h-[600px] md:max-h-[700px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

