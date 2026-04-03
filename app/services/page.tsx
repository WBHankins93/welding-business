import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Wrench, Package, Hammer } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Mobile welding, trash removal, and handyman services. Professional on-site solutions for construction, repairs, and custom projects. Certified welders with expertise in SMAW, FCAW, and GMAW techniques.',
  keywords: ['mobile welding', 'trash removal', 'dump services', 'handyman services', 'welding techniques', 'SMAW', 'FCAW', 'GMAW'],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/services',
  },
  openGraph: {
    title: 'Our Services | DJN Services LLC',
    description: 'Professional mobile welding, trash removal, and handyman services. On-site solutions for construction, repairs, and custom projects.',
    url: 'https://www.djnservicesllc.com/services',
    type: 'website',
  },
}

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Mobile Welding Services',
      image: '/images/services/mobile-welding.webp',
      alt: 'DJN Services mobile welding service',
      description:
        'Professional on-site welding services delivering high-quality results directly at your location. Ideal for construction, repairs, and custom fabrication projects.',
      highlight: 'Most requested for structural repair and custom metal work.',
      techniques: [
        {
          name: 'SMAW (Shielded Metal Arc Welding)',
          description: 'Durable and versatile for repair and construction.',
        },
        {
          name: 'FCAW (Flux-Cored Arc Welding)',
          description: 'High-speed and efficient for structural and heavy-duty tasks.',
        },
        {
          name: 'GMAW (Gas Metal Arc Welding)',
          description: 'Precision welding for fabrication and manufacturing.',
        },
      ],
      additionalOfferings: [
        'Cutting Services: Precise metal cutting for various applications.',
        'Custom Fabrication: Tailored solutions to meet unique specifications.',
      ],
    },
    {
      icon: Hammer,
      title: 'Handyman Services',
      description:
        'Comprehensive handyman services for residential and commercial properties. From minor repairs to major renovations, we handle projects of all sizes with quality craftsmanship.',
      highlight: 'Best for property upkeep, punch lists, and small renovations.',
      services: [
        'General Repairs: Doors, windows, cabinets, and fixtures.',
        'Installation Services: Fixtures, appliances, and essential upgrades.',
        'Painting and Finishing: Interior and exterior painting services.',
        'Custom Projects: Tailored solutions with quality craftsmanship.',
      ],
    },
    {
      icon: Package,
      title: 'Trash Removal/Dump Services',
      image: '/images/services/trash-removal-djn.webp',
      alt: 'DJN Services trash removal and dump service',
      description:
        'Efficient on-demand hauling and delivery of materials. Reliable solutions for waste removal, dirt delivery, and material transport across various industries.',
      highlight: 'Best for fast cleanups and scheduled site material hauling.',
      coreOfferings: [
        'Trash Delivery: Waste and unwanted materials to dump sites.',
        'Dirt, Rock, and Sand Delivery: Material transport to specified locations.',
        'Time-Sensitive Hauling: Quick response for urgent delivery needs.',
        'Flexible Load Sizes: Small to large deliveries accommodated.',
      ],
      specializedCapabilities: [
        'Up to 10,000 lbs per Load: Efficient handling of larger loads.',
        'Regional or Long-Distance Coverage: Local and extended transport options.',
        'Compliance: Fully insured and compliant with environmental regulations.',
      ],
    },
  ]

  // Structured data for services page
  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Welding and Construction Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'DJN Services LLC',
      url: 'https://www.djnservicesllc.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Gulf Coast region: Mississippi, Alabama, Florida, South Georgia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'DJN Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Welding Services',
            description: 'Professional on-site welding services with SMAW, FCAW, and GMAW techniques.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trash Removal/Dump Services',
            description: 'Efficient hauling and delivery of materials up to 10,000 lbs per load.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Handyman Services',
            description: 'Comprehensive handyman services for residential and commercial properties.',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      <div>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: 'DJN Services LLC', href: '/' },
              { label: 'Services' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/services/mobile-welding.webp"
            alt="Professional metal fabrication and welding services - DJN Services LLC"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-dark max-w-4xl rounded-[32px] p-8 sm:p-10">
            <ScrollReveal immediate>
              <h1 className="page-hero-title mb-4 sm:mb-6">Our Services</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1} immediate>
              <p className="page-hero-subtitle max-w-3xl">
                Welding and dump services built for hard jobs, fast scheduling, and dependable execution.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8 sm:mb-10 md:mb-12">
              <p className="text-sm font-semibold tracking-[0.14em] uppercase text-[#8c6a00] mb-3">
                Compare Services
              </p>
              <h2 className="section-title mb-4">Pick the right crew for the job</h2>
              <p className="section-subtitle max-w-3xl">
                We organized services by typical project flow: fabrication and repairs first, hauling and dump support second, and finishing/property work third.
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon
              const isFeatured = index === 0
              return (
                <StaggerItem key={service.title} className={isFeatured ? 'md:col-span-6' : 'md:col-span-3'}>
                  <div className={`glass-panel-light rounded-[30px] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full ${isFeatured ? 'ring-1 ring-[#d4af37]/40' : ''}`}>
                  <div className="mb-4 flex flex-wrap items-center gap-3 sm:mb-5">
                    <span className="inline-flex items-center rounded-full border border-[#d4af37]/40 bg-[#fff8dc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#7a5d00]">
                      Service {index + 1}
                    </span>
                    {isFeatured && (
                      <span className="inline-flex items-center rounded-full border border-[#1f2937]/20 bg-[#111827] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white">
                        Featured
                      </span>
                    )}
                  </div>
                  {service.image && (
                    <div className={`relative mb-5 overflow-hidden rounded-xl ${isFeatured ? 'lg:mb-7' : ''}`}>
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={1200}
                        height={700}
                        className={`w-full object-cover ${isFeatured ? 'h-56 sm:h-64 md:h-72' : 'h-52'}`}
                        sizes={isFeatured ? '(max-width: 768px) 100vw, 100vw' : '(max-width: 768px) 100vw, 50vw'}
                      />
                    </div>
                  )}
                  <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
                    <div className="rounded-2xl bg-[#fef3c7]/90 p-3 sm:p-4 shadow-md">
                      <Icon className="size-6 sm:size-7 md:size-8 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="card-title mb-2 sm:text-2xl">{service.title}</h3>
                    </div>
                  </div>
                  <p className="card-text mb-4 sm:mb-6">{service.description}</p>
                  <p className="mb-4 rounded-2xl border border-[#d4af37]/35 bg-[#fffbea] px-4 py-3 text-sm font-medium text-[#5c4600] sm:mb-6 sm:text-base">
                    {service.highlight}
                  </p>

                  {/* Welding Techniques */}
                  {service.techniques && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="card-title mb-2 text-base sm:mb-3 sm:text-lg">Welding Techniques:</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.techniques.map((technique, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold flex-shrink-0">•</span>
                            <div className="text-sm sm:text-base">
                              <span className="font-semibold text-[#1a1f2e]">{technique.name}: </span>
                              <span className="text-[#1a1f2e]">{technique.description}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Additional Offerings */}
                  {service.additionalOfferings && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="card-title mb-2 text-base sm:mb-3 sm:text-lg">Additional Offerings:</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.additionalOfferings.map((offering, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold flex-shrink-0">•</span>
                            <span className="text-[#1a1f2e] text-sm sm:text-base">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Core Offerings */}
                  {service.coreOfferings && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="card-title mb-2 text-base sm:mb-3 sm:text-lg">Core Offerings:</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.coreOfferings.map((offering, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold flex-shrink-0">•</span>
                            <span className="text-[#1a1f2e] text-sm sm:text-base">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Specialized Capabilities */}
                  {service.specializedCapabilities && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="card-title mb-2 text-base sm:mb-3 sm:text-lg">Specialized Capabilities:</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.specializedCapabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold flex-shrink-0">•</span>
                            <span className="text-[#1a1f2e] text-sm sm:text-base">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Services (for Handyman) */}
                  {service.services && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="card-title mb-2 text-base sm:mb-3 sm:text-lg">Services:</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.services.map((serviceItem, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold flex-shrink-0">•</span>
                            <span className="text-[#1a1f2e] text-sm sm:text-base">{serviceItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Get a Quote Button */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                    <Link
                      href="/contact#contact-form"
                      className={`glass-button-dark w-full text-center text-xs tracking-wide ${isFeatured ? 'sm:w-full md:w-auto' : 'sm:w-auto'}`}
                    >
                      Get a quote
                    </Link>
                  </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="section-title mb-4 sm:mb-6">Materials</h2>
              <p className="section-subtitle max-w-2xl mx-auto px-4">
                We provide a variety of materials for your construction and landscaping needs
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/materials/rock-djn.webp"
                    alt="Rock material available for hauling and delivery"
                    width={900}
                    height={600}
                    className="h-40 w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0a0a0a]">Rock</h3>
                <p className="text-[#1a1f2e] leading-relaxed text-sm sm:text-base">
                  Durable natural material for construction, landscaping, and drainage. Ideal for foundations, pathways, and decorative applications.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/materials/sand-djn.webp"
                    alt="Sand material available for delivery"
                    width={900}
                    height={600}
                    className="h-40 w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0a0a0a]">Sand</h3>
                <p className="text-[#1a1f2e] leading-relaxed text-sm sm:text-base">
                  Versatile material for construction, landscaping, and leveling. Ideal for concrete, paving, and filling applications.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/materials/dirt.webp"
                    alt="Dirt material available for grading and fill delivery"
                    width={900}
                    height={600}
                    className="h-40 w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0a0a0a]">Dirt</h3>
                <p className="text-[#1a1f2e] leading-relaxed text-sm sm:text-base">
                  Essential material for landscaping, gardening, and leveling. Perfect for filling, grading, and creating healthy soil bases.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-panel-light rounded-[28px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/materials/mulch.webp"
                    alt="Mulch material available for landscaping delivery"
                    width={900}
                    height={600}
                    className="h-40 w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0a0a0a]">Mulch</h3>
                <p className="text-[#1a1f2e] leading-relaxed text-sm sm:text-base">
                  Organic or synthetic material for landscaping and gardening. Ideal for moisture retention, soil temperature regulation, and enhanced curb appeal.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#d4af37] text-[#0a0a0a] py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel-light rounded-[32px] px-6 py-10 sm:px-10">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Need Our Services?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-[#1a1f2e] px-4">
                Get in touch with us today to discuss your project requirements and receive a free quote.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="/contact#contact-form"
                  className="glass-button-primary"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  className="glass-button-dark"
                >
                  Request a Quote
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
