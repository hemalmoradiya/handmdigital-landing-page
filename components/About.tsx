export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white border-b border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
            Building tools that help businesses{' '}
            <span className="block sm:inline">run smarter.</span>
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none text-black text-center">
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 opacity-80 px-2 sm:px-0">
            H&amp;M Digital designs simple, powerful, and reliable apps for modern entrepreneurs. Digital Invoice was created to eliminate the stress of billing — so freelancers, service providers, and small businesses can focus on doing what they love.
          </p>
          <p className="text-base sm:text-lg leading-relaxed opacity-80 px-2 sm:px-0">
            Our goal is to deliver fast, intuitive software that simplifies daily workflows.
          </p>
        </div>
      </div>
    </section>
  )
}

