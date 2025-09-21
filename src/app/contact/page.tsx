import Footer from '@/components/common/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import FAQSection from '@/components/contact/FAQSection'
import NewsletterSignup from '@/components/contact/NewsletterSignup'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ContactHero />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Info & Profile */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </main>

      <FAQSection />
      <NewsletterSignup />
      <Footer />
    </div>
  )
}
