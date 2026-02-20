import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Zap, CheckCircle, Award } from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Expert welding services you can trust. Professional welding and metal fabrication for commercial, industrial, and residential projects. 100% disabled veteran-owned business with 20+ years of combined experience.',
  alternates: {
    canonical: 'https://www.djnservicesllc.com',
  },
  openGraph: {
    title: 'DJN Services LLC | Expert Welding Services You Can Trust',
    description: 'Professional welding and metal fabrication for commercial, industrial, and residential projects. Certified welders with 20+ years of experience.',
    url: 'https://www.djnservicesllc.com',
    type: 'website',
  },
}

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'MIG Welding',
      description: 'Precision MIG welding for clean, strong joints on various metals.',
    },
    {
      icon: Zap,
      title: 'TIG Welding',
      description: 'High-quality TIG welding for detailed work and exotic metals.',
    },
    {
      icon: CheckCircle,
      title: 'Fabrication',
      description: 'Custom metal fabrication tailored to your specific needs.',
    },
    {
      icon: Award,
      title: 'Repair Services',
      description: 'Expert repair services for damaged metal structures and equipment.',
    },
  ]

  const features = [
    'Certified & Licensed Welders',
    '20+ Years Combined Experience',
    'Competitive Pricing',
    'Quick Turnaround Time',
    'Mobile Welding Available',
    'Quality Guaranteed',
  ]

  // Structured data for homepage
  const homepageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DJN Services LLC',
    url: 'https://www.djnservicesllc.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.djnservicesllc.com/services?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }}
      />
      <div>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1582649831749-e2d634f55cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwbWV0YWwlMjB3b3JrfGVufDF8fHx8MTc3MTUzMzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional welder creating sparks during metal welding work - DJN Services LLC"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                Expert Welding Services You Can Trust
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-300 leading-relaxed">
                Professional welding and metal fabrication for commercial, industrial, and residential projects.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/booking"
                  className="bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-center font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl text-sm sm:text-base"
                >
                  Schedule Service
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white hover:bg-white hover:text-[#0a0a0a] px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-center font-semibold transition-all duration-200 text-sm sm:text-base"
                >
                  Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0a0a0a]">Our Services</h2>
              <p className="text-base sm:text-lg md:text-xl text-[#4a5568] max-w-2xl mx-auto px-4">
                We offer a comprehensive range of welding and fabrication services
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <StaggerItem key={service.title}>
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30">
                    <div className="bg-[#fef3c7] w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                      <Icon className="size-6 sm:size-7 text-[#d4af37]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0a0a0a]">{service.title}</h3>
                    <p className="text-[#4a5568] leading-relaxed text-sm sm:text-base">{service.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
          <ScrollReveal>
            <div className="text-center mt-8 sm:mt-12 md:mt-16">
              <Link
                href="/services"
                className="inline-block bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1a1f2e] text-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
                  Why Choose DJN Services LLC?
                </h2>
                <p className="text-gray-300 mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg leading-relaxed">
                  With over two decades of combined experience, we've built our reputation
                  on quality workmanship, reliability, and customer satisfaction. We take
                  pride in every project, no matter the size.
                </p>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8 md:mb-10">
                  {features.map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle className="size-5 sm:size-6 text-[#d4af37] flex-shrink-0" />
                        <span className="text-gray-200 text-sm sm:text-base">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <div>
                  <Link
                    href="/about"
                    className="inline-block border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] text-[#d4af37] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTU1ODExOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern industrial welding workshop with professional equipment - DJN Services LLC facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#d4af37] text-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-[#1a1f2e] px-4">
              Contact us today for a free quote or to schedule your welding service.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/booking"
                className="bg-[#0a0a0a] text-[#d4af37] hover:bg-[#1a1f2e] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl text-sm sm:text-base"
              >
                Book an Appointment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#d4af37] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
    </>
  )
}
