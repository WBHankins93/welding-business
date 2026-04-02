import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingForm } from '@/components/BookingForm'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Book Your Service',
  description: 'Schedule your welding, trash removal, or handyman service online. We\'ll contact you within 24 hours to confirm your appointment. Free estimates included with all bookings.',
  keywords: ['book welding service', 'schedule welding', 'welding appointment', 'online booking'],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/booking',
  },
  openGraph: {
    title: 'Book Your Service | DJN Services LLC',
    description: 'Schedule your welding, trash removal, or handyman service online. Free estimates included.',
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
          <div className="glass-panel-dark max-w-3xl rounded-[32px] p-8 sm:p-10">
            <ScrollReveal immediate>
              <h1 className="page-hero-title mb-4 sm:mb-6">Book Your Service</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1} immediate>
              <p className="page-hero-subtitle max-w-3xl">
                Schedule your welding service online. We'll contact you within 24 hours to
                confirm your appointment.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass-panel-light rounded-[32px] p-6 shadow-xl sm:p-8 md:p-10 lg:p-14">
              <h2 className="section-title mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">Schedule Your Service</h2>
              <BookingForm />
            </div>
          </ScrollReveal>

          {/* Additional Information */}
          <StaggerContainer className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-6 sm:p-8">
                <h3 className="card-title mb-2">Quick Response</h3>
                <p className="card-text">
                  We'll contact you within 24 hours to confirm your appointment.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-6 sm:p-8">
                <h3 className="card-title mb-2">Free Estimates</h3>
                <p className="card-text">
                  All bookings include a free, no-obligation quote.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-6 sm:p-8">
                <h3 className="card-title mb-2">Flexible Scheduling</h3>
                <p className="card-text">
                  We work around your schedule to minimize disruption.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Emergency Service CTA */}
      <section className="bg-[#d4af37] text-[#0a0a0a] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel-light rounded-[32px] px-6 py-10 sm:px-10">
            <ScrollReveal>
              <h2 className="section-title mb-3 text-2xl sm:mb-4 sm:text-3xl md:text-4xl">Need Emergency Service?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-[#1a1f2e] px-4">
                For urgent welding repairs, contact us right away and we’ll help route the fastest response.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="glass-button-dark hidden sm:inline-flex"
              >
                Contact Us
              </Link>
              <a
                href="tel:5551234567"
                className="glass-button-primary inline-flex sm:hidden"
              >
                Call Now
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
