const screenshots = [
  {
    title: 'Create Invoice',
    caption: 'Professional invoices in minutes',
    description: 'Screenshot of invoice creation screen',
    image: '/hero-phone.png',
  },
  {
    title: 'Quotation to Invoice Conversion',
    caption: 'Convert with one tap',
    description: 'Screenshot showing quotation conversion feature',
    image: '/quotation-to-invoice.png',
  },
  {
    title: 'Reminder Notifications',
    caption: 'Never miss a payment',
    description: 'Screenshot of reminder notifications',
    image: '/notification.png',
  },
  {
    title: 'Dashboard Analytics',
    caption: 'Track revenue & performance',
    description: 'Screenshot of dashboard with analytics',
    image: '/dashboard.png',
  },
  {
    title: 'Client Manager',
    caption: 'All your clients, organized in one place',
    description: 'Screenshot of client management interface',
    image: '/clients.png',
  },
  {
    title: 'PDF Preview',
    caption: 'Share-ready professional templates',
    description: 'Screenshot of PDF preview',
    image: '/pdf-preview.png',
  },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-12 sm:py-16 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">
            App In Action
          </h2>
          <p className="text-xs sm:text-sm text-black opacity-70">
            Explore the App
          </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="text-left border border-black bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out flex flex-col h-full group cursor-pointer relative overflow-hidden"
            >
              {/* Background animation overlay */}
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
              
              {/* Content wrapper */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Small preview */}
                <div className="aspect-[9/16] bg-white border-b border-black relative overflow-hidden flex items-center justify-center py-2 flex-shrink-0 group-hover:bg-black transition-colors duration-300 ease-in-out">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.description}
                    className="w-full h-full object-contain my-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                
                {/* Caption */}
                <div className="p-2 sm:p-3 text-[10px] sm:text-xs h-16 sm:h-20 flex flex-col justify-center transition-all duration-300 ease-in-out text-black group-hover:text-white">
                  <div className="font-semibold mb-0.5 sm:mb-1 line-clamp-2 transition-all duration-300 ease-in-out text-black opacity-70 group-hover:text-white group-hover:opacity-100">
                    {screenshot.title}
                  </div>
                  <div className="text-[9px] sm:text-xs opacity-70 line-clamp-2 transition-all duration-300 ease-in-out text-black opacity-60 group-hover:text-white group-hover:opacity-90">
                    {screenshot.caption}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

