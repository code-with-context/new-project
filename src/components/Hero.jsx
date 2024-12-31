function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-6xl mb-6 font-bold tracking-tight leading-tight">
            Jane Doe
          </h1>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Bestselling author of contemporary fiction, exploring human relationships
            and the complexities of modern life.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero 