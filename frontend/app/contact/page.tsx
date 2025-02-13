import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"

export default function Contact() {
  return (
    <main className="min-h-screen bg-culinary-cream">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-serif font-bold text-primary-800 mb-8 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  )
}

