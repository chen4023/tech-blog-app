export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Lead Developer at TechCorp',
      content: 'TechFlow has completely transformed how we build applications. The speed and reliability are unmatched.',
      avatar: '👩‍💻',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO at StartupXYZ',
      content: 'The real-time collaboration features saved us months of development time. Our team productivity increased by 300%.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Product Manager at InnovateLab',
      content: 'The analytics dashboard gives us insights we never had before. It\'s like having a crystal ball for our app performance.',
      avatar: '👩‍💼',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Loved by developers worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our community of developers and companies are saying about TechFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
