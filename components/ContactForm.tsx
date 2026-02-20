'use client'

import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // Replace with your Formspree form ID
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || 'YOUR_FORMSPREE_CONTACT_ID'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-4 sm:p-6 rounded-lg text-center">
        <p className="text-base sm:text-lg font-medium">Thank you for your message!</p>
        <p className="mt-2 text-sm sm:text-base">We'll get back to you as soon as possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-center">
          <p className="text-sm">Something went wrong. Please try again or call us directly.</p>
        </div>
      )}
      <div>
        <label htmlFor="name" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        >
          <option value="">Select a subject</option>
          <option value="quote">Request a Quote</option>
          <option value="general">General Inquiry</option>
          <option value="service">Service Question</option>
          <option value="emergency">Emergency Service</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
      >
        Send Message
      </button>
    </form>
  )
}
