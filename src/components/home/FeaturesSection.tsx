export default function FeaturesSection() {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Build and deploy applications in seconds with our optimized infrastructure and smart caching.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, SSO integration, and compliance certifications.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices, from mobile phones to large screens.'
    },
    {
      icon: '⚡',
      title: 'Real-time Sync',
      description: 'Collaborate in real-time with your team using our advanced synchronization technology.'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Fully customizable themes, components, and layouts to match your brand identity.'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Comprehensive analytics and insights to track performance and user engagement.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything you need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              build amazing apps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools and features you need to create, deploy, and scale your applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
