function Books() {
  const books = [
    {
      title: "The Silent Echo",
      year: "2023",
      cover: "https://via.placeholder.com/200x300",
      description: "A haunting tale of family secrets and redemption."
    },
    {
      title: "Midnight Gardens",
      year: "2021",
      cover: "https://via.placeholder.com/200x300",
      description: "Award-winning novel about love and loss in post-war Europe."
    },
    {
      title: "The Last Letter",
      year: "2019",
      cover: "https://via.placeholder.com/200x300",
      description: "A contemporary romance set in the publishing world of New York."
    }
  ]

  return (
    <section id="books" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-5xl mb-16 text-center font-bold text-gray-900">
          Published Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {books.map((book) => (
            <div 
              key={book.title} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-auto mb-6 rounded-lg shadow-md"
              />
              <h3 className="font-serif text-2xl mb-2 font-bold text-gray-900">{book.title}</h3>
              <p className="text-indigo-600 font-medium mb-4">{book.year}</p>
              <p className="text-gray-600 leading-relaxed">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Books 