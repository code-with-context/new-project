function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-5xl mb-16 text-center font-bold text-gray-900">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-8 bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 