import type { Metadata } from 'next'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { BookingForm } from '@/components/BookingForm'
import { ScrollReveal } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Get A Quote — Book Mobile Welding, Hauling & Handyman Services',
  description:
    'Request a free quote from DJN Services LLC for mobile welding, trash removal, hauling, or handyman services. Fill out the form and we will respond within 24 hours. Serving Mississippi, Alabama, Florida, and South Georgia.',
  keywords: [
    'book welding service',
    'welding quote Mississippi',
    'request handyman service',
    'mobile welding booking',
    'trash removal quote Gulf Coast',
    'get a welding estimate',
    'DJN Services booking',
  ],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/booking',
  },
  openGraph: {
    title: 'Get A Quote | DJN Services LLC — Gulf Coast Welding & Handyman',
    description:
      'Request a free quote for mobile welding, hauling, or handyman work. Fast response. Serving MS, AL, FL, and South GA.',
    url: 'https://www.djnservicesllc.com/booking',
    type: 'website',
    images: [
      {
        url: '/images/projects/commercial-building-wide.jpeg',
        width: 1200,
        height: 630,
        alt: 'DJN Services LLC — commercial construction project',
      },
    ],
  },
}

export default function BookingPage() {
  return (
    <div>
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: 'DJN Services LLC', href: '/' }, { label: 'Book a Service' }]} />
        </div>
      </div>

      <section className="relative bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/projects/commercial-building-wide.jpeg"
            alt="Commercial on-site welding team preparing a job estimate"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-dark max-w-4xl rounded-2xl p-8 sm:p-10">
            <ScrollReveal immediate>
              <h1 className="page-hero-title mb-4 sm:mb-6">Get A Quote</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1} immediate>
              <p className="page-hero-subtitle max-w-3xl">
                Tell us about your project and we will get back to you within 24 hours with a quote.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white p-6 sm:p-8 md:p-10 border border-black/10">
              <BookingForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
