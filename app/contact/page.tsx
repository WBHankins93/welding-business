import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DJN Services LLC for a free quote or to discuss your welding, trash removal, or handyman project. Available 24/7 for emergency services. We respond within 24 hours.',
  keywords: ['contact welding services', 'welding quote', 'emergency welding', 'welding consultation'],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/contact',
  },
  openGraph: {
    title: 'Contact DJN Services LLC | Free Quote Available',
    description: 'Get in touch for a free quote or to discuss your welding, trash removal, or handyman project. Available 24/7 for emergencies.',
    url: 'https://www.djnservicesllc.com/contact',
    type: 'website',
  },
}

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', 'Available 24/7 for emergencies'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@djnservicesllc.com', 'We respond within 24 hours'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Industrial Parkway', 'Your City, ST 12345'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8AM - 6PM', 'Saturday: 9AM - 2PM'],
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
          text: 'Most projects can be scheduled within a few days. Emergency services are available 24/7.',
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
      <section className="bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-dark max-w-4xl rounded-[32px] p-8 sm:p-10">
            <ScrollReveal immediate>
              <h1 className="page-hero-title mb-4 sm:mb-6">Contact Us</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1} immediate>
              <p className="page-hero-subtitle max-w-3xl">
                Get in touch with us for a free quote or to discuss your welding project
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
                  <div className="glass-panel-light rounded-[28px] p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fef3c7]/90 shadow-md sm:mb-6 sm:h-20 sm:w-20">
                      <Icon className="size-8 sm:size-10 text-[#d4af37]" />
                    </div>
                    <h3 className="card-title mb-2 sm:mb-3">{info.title}</h3>
                    {info.details.map((detail, index) => (
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
            {/* Contact form */}
            <ScrollReveal direction="right">
              <div id="contact-form" className="glass-panel-light rounded-[32px] p-6 shadow-lg sm:p-8 md:p-10">
                <h2 className="section-title mb-6 text-2xl sm:mb-8 sm:text-3xl md:text-4xl">Send Us a Message</h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Additional Info */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="space-y-6 sm:space-y-8">
                <div className="glass-panel-light rounded-[28px] p-6 sm:p-8">
                  <h3 className="card-title mb-3 sm:mb-4">Emergency Service</h3>
                  <p className="card-text mb-4 sm:mb-6 text-[#1a1f2e]">
                    Need urgent welding repairs? We offer 24/7 emergency service for
                    critical situations.
                  </p>
                  <Link
                    href="#contact-form"
                    className="glass-button-dark hidden w-full sm:inline-flex"
                  >
                    Send Emergency Details
                  </Link>
                  <a
                    href="tel:5551234567"
                    className="glass-button-primary flex w-full sm:hidden"
                  >
                    Call Now: (555) 123-4567
                  </a>
                </div>

                <div className="glass-panel-light rounded-[28px] p-6 sm:p-8">
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
              <div className="glass-panel-light rounded-[28px] p-8 transition-all duration-300">
                <h3 className="card-title mb-3">Do you offer free estimates?</h3>
                <p className="card-text">
                  Yes! We provide free, no-obligation quotes for all welding and
                  fabrication projects.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-8 transition-all duration-300">
                <h3 className="card-title mb-3">What areas do you serve?</h3>
                <p className="card-text">
                  We serve the Gulf Coast region: Mississippi, Alabama, Florida, and South Georgia. Contact us to confirm we serve your location.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-8 transition-all duration-300">
                <h3 className="card-title mb-3">How quickly can you start?</h3>
                <p className="card-text">
                  Most projects can be scheduled within a few days. Emergency services
                  are available 24/7.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-8 transition-all duration-300">
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
