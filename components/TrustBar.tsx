export default function TrustBar() {
  return (
    <section className="bg-white border-y border-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-black">
          <div className="flex items-center gap-2">
            <span className="font-semibold">10,000+</span>
            <span className="opacity-70">invoices created</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-black"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">4.9⭐</span>
            <span className="opacity-70">rating</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-black"></div>
          <div className="flex items-center gap-2">
            <span className="opacity-70">Loved by freelancers &amp; small businesses</span>
          </div>
        </div>
      </div>
    </section>
  )
}

