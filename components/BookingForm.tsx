'use client'

import { useState } from 'react'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // Replace with your Formspree form ID
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_BOOKING_ID || 'YOUR_FORMSPREE_BOOKING_ID'

  const services = [
    'MIG Welding',
    'TIG Welding',
    'Stick Welding',
    'Custom Fabrication',
    'Mobile Welding',
    'Structural Welding',
    'Repair Services',
    'Other',
  ]

  const projectTypes = [
    'Residential',
    'Commercial',
    'Industrial',
    'Automotive',
    'Agricultural',
    'Emergency Repair',
  ]

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
  ]

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
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg text-center">
        <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <CheckCircle className="size-10 sm:size-12 text-green-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Booking Request Received!</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
          Thank you for choosing DJN Services LLC.
        </p>
        <p className="text-gray-600 text-sm sm:text-base">
          We've received your booking request and will contact you within 24 hours
          to confirm your appointment and discuss your project details.
        </p>
        <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-[#fef3c7] rounded-xl border border-[#d4af37]/30">
          <p className="text-gray-700 text-sm sm:text-base">
            <strong>What's next?</strong> Our team will review your request and
            reach out to confirm the date, time, and provide a detailed quote for
            your project.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-center">
          <p className="text-sm">Something went wrong. Please try again or call us directly.</p>
        </div>
      )}

      {/* Personal Information */}
      <div className="border-b pb-4 sm:pb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-sm sm:text-base">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-sm sm:text-base">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="mt-3 sm:mt-4">
          <label htmlFor="phone" className="block mb-2 font-medium text-sm sm:text-base">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Service Details */}
      <div className="border-b pb-4 sm:pb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Service Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label htmlFor="serviceType" className="block mb-2 font-medium text-sm sm:text-base">
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="projectType" className="block mb-2 font-medium text-sm sm:text-base">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-3 sm:mt-4">
          <label htmlFor="location" className="block mb-2 font-medium text-sm sm:text-base">
            Project Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
            placeholder="Address or location description"
          />
        </div>
      </div>

      {/* Preferred Date & Time */}
      <div className="border-b pb-4 sm:pb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Preferred Date & Time</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label htmlFor="date" className="block mb-2 font-medium text-sm sm:text-base">
              <Calendar className="inline size-3 sm:size-4 mr-1" />
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="time" className="block mb-2 font-medium text-sm sm:text-base">
              <Clock className="inline size-3 sm:size-4 mr-1" />
              Preferred Time Slot *
            </label>
            <select
              id="time"
              name="time"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
            >
              <option value="">Select time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          * This is a preferred date and time. We'll confirm availability when
          we contact you.
        </p>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="description" className="block mb-2 font-medium text-sm sm:text-base">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
          placeholder="Please describe your welding project, including materials, dimensions, and any specific requirements..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] py-3 sm:py-4 rounded-lg transition-all duration-200 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
      >
        Submit Booking Request
      </button>

      <p className="text-xs sm:text-sm text-gray-500 text-center">
        By submitting this form, you agree to be contacted by DJN Services LLC
        regarding your booking request.
      </p>
    </form>
  )
}
