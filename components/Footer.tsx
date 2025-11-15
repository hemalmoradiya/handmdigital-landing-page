export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-black text-white py-8 sm:py-10 md:py-12 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              H&amp;M Digital
            </h3>
            <p className="text-sm sm:text-base text-white opacity-70">
              Create invoices, track payments, manage clients. All in one app.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://sites.google.com/view/digital-invoice-terms/home" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-white opacity-70 hover:opacity-100 transition-opacity touch-manipulation"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a 
                  href="https://sites.google.com/view/digitalinvoice-policy/home" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-white opacity-70 hover:opacity-100 transition-opacity touch-manipulation"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <p className="text-sm sm:text-base text-white opacity-70">
              <a
                href="mailto:digitalhandm@gmail.com"
                className="hover:opacity-100 transition-opacity touch-manipulation break-all"
              >
                digitalhandm@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white opacity-70">
          <p>
            © 2025 H&amp;M Digital — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

