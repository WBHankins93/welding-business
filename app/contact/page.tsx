import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'
import { businessPhones, businessEmail, businessAddress, businessHoursLabel } from '@/lib/contact-info'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DJN Services LLC for a free quote or to discuss your welding, trash removal, or handyman project. Business hours are Monday through Saturday, 8AM to 6PM. We respond within 24 hours.',
  keywords: ['contact welding services', 'welding quote', 'emergency welding', 'welding consultation'],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/contact',
  },
  openGraph: {
    title: 'Contact DJN Services LLC | Free Quote Available',
    description: 'Get in touch for a free quote or to discuss your welding, trash removal, or handyman project.',
    url: 'https://www.djnservicesllc.com/contact',
    type: 'website',
  },
}

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: businessPhones.map((p) => `${p.label}: ${p.display}`),
    },
    {
      icon: Mail,
      title: 'Email',
      details: [businessEmail, 'We respond within 24 hours'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: [businessAddress.street, businessAddress.cityStateZip],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [businessHoursLabel],
    },
  ]

  // FAQ structured data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer free estimates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We provide free, no-obligation quotes for all welding and fabrication projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve the Gulf Coast region: Mississippi, Alabama, Florida, and South Georgia. Contact us to confirm we serve your location.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can you start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects can be scheduled within a few days based on availability during business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are you licensed and insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we are fully licensed, insured, and our welders are AWS certified.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: 'DJN Services LLC', href: '/' },
              { label: 'Contact' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/projects/commercial-wawa-signage.jpeg"
            alt="DJN Services truck and crew ready for on-site service calls"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-dark max-w-4xl rounded-2xl p-8 sm:p-10">
            <ScrollReveal immediate>
              <h1 className="page-hero-title mb-4 sm:mb-6">Contact Us</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1} immediate>
              <p className="page-hero-subtitle max-w-3xl">
                Get in touch with us for a free quote or to discuss your welding project.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <StaggerItem key={info.title}>
                  <div className="border border-black/10 bg-white p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-[#1C1C1C] sm:mb-6 sm:h-16 sm:w-16">
                      <Icon className="size-7 sm:size-8 text-[#FF6A00]" />
                    </div>
                    <h3 className="card-title mb-2 sm:mb-3">{info.title}</h3>
                    {info.title === 'Phone'
                      ? businessPhones.map((phone) => (
                        <a
                          key={phone.href}
                          href={phone.href}
                          className="card-text mb-1 block hover:text-[#FF6A00] transition-colors duration-200"
                        >
                          {phone.label}: {phone.display}
                        </a>
                      ))
                      : info.details.map((detail, index) => (
                        <p key={index} className="card-text mb-1">
                          {detail}
                        </p>
                      ))}
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Form */}
            <ScrollReveal direction="right">
              <div className="bg-white p-6 sm:p-8 md:p-10 border border-black/10">
                <h2 className="section-title text-2xl sm:text-3xl mb-6 sm:mb-8">Send Us a Message</h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Additional Info */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="space-y-6 sm:space-y-8">
                <div className="border border-black/10 bg-white p-6 sm:p-8">
                  <h3 className="card-title mb-3 sm:mb-4">Emergency Service</h3>
                  <p className="card-text mb-4 sm:mb-6 text-[#1a1f2e]">
                    Need urgent welding repairs? We offer 24/7 emergency service for
                    critical situations.
                  </p>
                  <a
                    href={businessPhones[0].href}
                    className="btn-primary flex w-full"
                  >
                    Call Now: {businessPhones[0].display}
                  </a>
                </div>

                <div className="border border-black/10 bg-white p-6 sm:p-8">
                  <h3 className="card-title mb-3 sm:mb-4">Service Area</h3>
                  <p className="card-text text-[#1a1f2e]">
                    Gulf coast region: MS, AL, FL, South GA. Contact us to confirm we serve your location.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f7f8fa] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-title mb-10 text-center sm:mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="card-title mb-3">Do you offer free estimates?</h3>
                <p className="card-text">
                  Yes! We provide free, no-obligation quotes for all welding and
                  fabrication projects.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="card-title mb-3">What areas do you serve?</h3>
                <p className="card-text">
                  We serve the Gulf Coast region: Mississippi, Alabama, Florida, and South Georgia. Contact us to confirm we serve your location.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="card-title mb-3">How quickly can you start?</h3>
                <p className="card-text">
                  Most projects can be scheduled within a few days. Emergency services
                  are available 24/7.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-black/10 bg-white p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="card-title mb-3">Are you licensed and insured?</h3>
                <p className="card-text">
                  Yes, we are fully licensed, insured, and our welders are AWS certified.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
    </>
  )
}
