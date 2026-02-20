import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Award, Users, Clock, Target } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'

export const metadata: Metadata = {
  title: 'About Us',
  description: '100% disabled veteran-owned business delivering top-quality welding, hotshot, trash removal, and handyman services with precision and reliability. 20+ years of combined experience, AWS certified welders.',
  keywords: ['veteran owned business', 'disabled veteran owned', 'welding company', 'certified welders', 'AWS certified'],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/about',
  },
  openGraph: {
    title: 'About DJN Services LLC | 100% Disabled Veteran-Owned Business',
    description: 'Building trust through quality craftsmanship. 100% disabled veteran-owned business with 20+ years of combined experience.',
    url: 'https://www.djnservicesllc.com/about',
    type: 'website',
  },
}

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description:
        'We never compromise on quality. Every weld is performed to the highest standards with thorough inspection.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description:
        'Your satisfaction is our priority. We work closely with clients to ensure their needs are met and exceeded.',
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description:
        'We respect your time and deadlines. Count on us for prompt, professional service every time.',
    },
    {
      icon: Target,
      title: 'Precision Work',
      description:
        'Attention to detail is what sets us apart. We take pride in delivering accurate, precise results.',
    },
  ]

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100%', label: 'Quality Guaranteed' },
    { number: '24/7', label: 'Emergency Service' },
  ]

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1762786219193-f34607f29d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWxkZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MTU1ODEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional certified welder performing precision welding work - DJN Services LLC team member"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">About DJN Services LLC</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Building trust through quality craftsmanship since day one
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-[#0a0a0a]">Who we are</h2>
            </ScrollReveal>
            <div className="space-y-4 sm:space-y-6 text-[#1a1f2e] leading-relaxed text-base sm:text-lg">
              <p>
                100% disabled veteran-owned, <strong>DJN Services LLC</strong> is dedicated to delivering top-quality solutions with the precision, reliability, and work ethic you can trust. Serving as a one-stop resource for your construction and service needs, we take pride in offering:
              </p>
              <ul className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#d4af37] font-bold mt-1 flex-shrink-0">•</span>
                  <div className="text-sm sm:text-base">
                    <strong className="text-[#0a0a0a]">Mobile Welding Services:</strong> Professional on-site welding, cutting, and custom fabrication to meet your project demands.
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#d4af37] font-bold mt-1 flex-shrink-0">•</span>
                  <div className="text-sm sm:text-base">
                    <strong className="text-[#0a0a0a]">Hotshot Services:</strong> Reliable, on-demand freight transportation with flexible load capabilities, including 40' flatbed services.
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#d4af37] font-bold mt-1 flex-shrink-0">•</span>
                  <div className="text-sm sm:text-base">
                    <strong className="text-[#0a0a0a]">Trash Removal and Dump Services:</strong> Efficient hauling and disposal of dirt, rock, sand, and waste materials, with load capacities up to 10,000 lbs.
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#d4af37] font-bold mt-1 flex-shrink-0">•</span>
                  <div className="text-sm sm:text-base">
                    <strong className="text-[#0a0a0a]">Handyman Services:</strong> Skilled repairs, installations, and custom projects to keep your home or business in top shape.
                  </div>
                </li>
              </ul>
              <p className="mt-6 sm:mt-8">
                At DJN Services LLC, we are committed to providing exceptional service with a focus on integrity, attention to detail, and a mission-driven approach to meeting our clients' needs.
              </p>
              <p>
                Let us bring experience, dedication, and results to your next project. Contact us today to learn more or request a quote!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#d4af37] text-[#0a0a0a] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 text-[#0a0a0a]">{stat.number}</div>
                  <div className="text-[#1a1f2e] font-semibold text-sm sm:text-base md:text-lg">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0a0a0a]">Our Values</h2>
              <p className="text-base sm:text-lg md:text-xl text-[#4a5568] max-w-2xl mx-auto px-4">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <StaggerItem key={value.title}>
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30">
                    <div className="bg-[#fef3c7] w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md">
                      <Icon className="size-8 sm:size-10 text-[#d4af37]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0a0a0a]">{value.title}</h3>
                    <p className="text-[#4a5568] leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0a0a0a]">
                Certifications & Expertise
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#4a5568] max-w-2xl mx-auto px-4">
                Our team maintains industry certifications and stays current with the
                latest welding techniques
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem>
              <div className="bg-[#f7f8fa] p-6 sm:p-8 md:p-10 rounded-xl border border-gray-100 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#0a0a0a]">Certifications</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#1a1f2e] text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>AWS Certified Welders</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>OSHA Safety Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Structural Welding Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Licensed & Insured</span>
                </li>
              </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f7f8fa] p-6 sm:p-8 md:p-10 rounded-xl border border-gray-100 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#0a0a0a]">Specializations</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#1a1f2e] text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Stainless Steel Welding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Aluminum Welding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Cast Iron Repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Exotic Metal Welding</span>
                </li>
              </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f7f8fa] p-6 sm:p-8 md:p-10 rounded-xl border border-gray-100 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#0a0a0a]">Equipment</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#1a1f2e] text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>State-of-the-art Welders</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Mobile Welding Units</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Plasma Cutting Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37] font-bold">•</span>
                  <span>Fabrication Shop</span>
                </li>
              </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] text-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Work With Us?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Experience the DJN Services LLC difference on your next project
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/booking"
                className="bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl text-sm sm:text-base"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-[#0a0a0a] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
