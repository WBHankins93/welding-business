'use client'

/**
 * Static placeholder form for client demos. Does not submit anywhere.
 * Swap to ContactForm when the live form endpoint is configured.
 */
export function ContactFormPlaceholder() {
  return (
    <form
      className="space-y-4 sm:space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="contact-name" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Name *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          placeholder="Your name"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Email *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Phone
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          placeholder="(256) 665-6754"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Subject *
        </label>
        <select
          id="contact-subject"
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
        <label htmlFor="contact-message" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
        />
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
