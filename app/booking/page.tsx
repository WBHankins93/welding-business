import type { Metadata } from 'next'
import { Calendar, Clock } from 'lucide-react'
import { BookingForm } from '@/components/BookingForm'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Book Your Service',
  description: 'Schedule your welding, hotshot, trash removal, or handyman service online. We\'ll contact you within 24 hours to confirm your appointment. Free estimates included with all bookings.',
  keywords: ['book welding service', 'schedule welding', 'welding appointment', 'online booking'],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/booking',
  },
  openGraph: {
    title: 'Book Your Service | DJN Services LLC',
    description: 'Schedule your welding, hotshot, trash removal, or handyman service online. Free estimates included.',
    url: 'https://www.djnservicesllc.com/booking',
    type: 'website',
  },
}

export default function Booking() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Book Your Service' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Book Your Service</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Schedule your welding service online. We'll contact you within 24 hours to
              confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#0a0a0a]">Schedule Your Service</h2>
            <BookingForm />
          </div>

          {/* Additional Information */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#f7f8fa] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-md">
              <h3 className="font-bold mb-2 text-sm sm:text-base">Quick Response</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                We'll contact you within 24 hours to confirm your appointment.
              </p>
            </div>
            <div className="bg-[#f7f8fa] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-md">
              <h3 className="font-bold mb-2 text-sm sm:text-base">Free Estimates</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                All bookings include a free, no-obligation quote.
              </p>
            </div>
            <div className="bg-[#f7f8fa] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-md">
              <h3 className="font-bold mb-2 text-sm sm:text-base">Flexible Scheduling</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                We work around your schedule to minimize disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service CTA */}
      <section className="bg-[#d4af37] text-[#0a0a0a] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need Emergency Service?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-[#1a1f2e] px-4">
            For urgent welding repairs, call us directly at (555) 123-4567
          </p>
          <a
            href="tel:5551234567"
            className="inline-block bg-[#0a0a0a] text-[#d4af37] hover:bg-[#1a1f2e] px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-all duration-200 font-semibold shadow-xl hover:shadow-2xl text-sm sm:text-base"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  )
}
