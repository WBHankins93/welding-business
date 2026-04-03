'use client'

import { useState, type MouseEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Wrench, Package, Hammer } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations'
import { primaryPhone } from '@/lib/contact-info'

const serviceTabs = [
  { id: 'mobile-welding', label: 'Mobile Welding', icon: Wrench },
  { id: 'trash-removal', label: 'Trash Removal / Dump', icon: Package },
  { id: 'handyman', label: 'Handyman Services', icon: Hammer },
]

const services = [
  {
    id: 'mobile-welding',
    icon: Wrench,
    title: 'Mobile Welding Services',
    image: '/images/services/mobile-welding.webp',
    alt: 'DJN Services mobile welding service',
    description:
      'Professional on-site welding services delivering high-quality results directly at your location. Ideal for construction, repairs, and custom fabrication projects.',
    highlight: 'Ideal for: structural repairs, custom fabrication, and field service welding.',
    techniques: [
      'SMAW (Shielded Metal Arc Welding): Durable and versatile for repair and construction.',
      'FCAW (Flux-Cored Arc Welding): High-speed and efficient for structural and heavy-duty tasks.',
      'GMAW (Gas Metal Arc Welding): Precision welding for fabrication and manufacturing.',
    ],
  },
  {
    id: 'trash-removal',
    icon: Package,
    title: 'Trash Removal / Dump Services',
    image: '/images/services/trash-removal-djn.webp',
    alt: 'DJN Services trash removal and dump service',
    description:
      'Efficient on-demand hauling and delivery of materials. Reliable solutions for waste removal, dirt delivery, and material transport across various industries.',
    highlight: 'Ideal for: cleanouts, job-site debris, and scheduled material hauling.',
    list: [
      'Trash Delivery: Waste and unwanted materials to dump sites.',
      'Dirt, Rock, and Sand Delivery: Material transport to specified locations.',
      'Time-Sensitive Hauling: Quick response for urgent delivery needs.',
      'Flexible Load Sizes: Small to large deliveries accommodated.',
      'Up to 10,000 lbs per Load and regional/long-distance coverage.',
    ],
  },
  {
    id: 'handyman',
    icon: Hammer,
    title: 'Handyman Services',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Handyman tools bag for repair and installation work',
    description:
      'Comprehensive handyman services for residential and commercial properties. From minor repairs to major renovations, we handle projects of all sizes with quality craftsmanship.',
    highlight: 'Ideal for: repairs, punch lists, installations, and finish work.',
    list: [
      'General Repairs: Doors, windows, cabinets, and fixtures.',
      'Installation Services: Fixtures, appliances, and essential upgrades.',
      'Painting and Finishing: Interior and exterior painting services.',
      'Custom Projects: Tailored solutions with quality craftsmanship.',
    ],
  },
]

const materials = [
  {
    title: 'Rock',
    image: '/images/materials/rock-djn.webp',
    alt: 'Rock material available for hauling and delivery',
    description: 'Durable natural material for construction, landscaping, and drainage.',
  },
  {
    title: 'Sand',
    image: '/images/materials/sand-djn.webp',
    alt: 'Sand material available for delivery',
    description: 'Versatile material for construction, landscaping, and leveling.',
  },
  {
    title: 'Dirt',
    image: '/images/materials/dirt.webp',
    alt: 'Dirt material available for grading and fill delivery',
    description: 'Essential material for landscaping, gardening, and leveling.',
  },
  {
    title: 'Mulch',
    image: '/images/materials/mulch.webp',
    alt: 'Mulch material available for landscaping delivery',
    description: 'Organic or synthetic material for moisture retention and curb appeal.',
  },
]

export function ServicesPageContent() {
  const [activeService, setActiveService] = useState(services[0].id)
  const activeServiceDetails = services.find((service) => service.id === activeService) ?? services[0]
  const ActiveServiceIcon = activeServiceDetails.icon

  const jumpToService = (id: string) => {
    setActiveService(id)
  }

  const onMaterialMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <div>
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: 'DJN Services LLC', href: '/' }, { label: 'Services' }]} />
        </div>
      </div>

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
                Welding, hauling, and handyman support built for hard jobs, fast scheduling, and dependable execution.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6a00]">All Services</p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {serviceTabs.map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeService === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => jumpToService(tab.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all ${
                    isActive
                      ? 'border-[#FF6A00]/60 bg-[#FF6A00] text-white shadow-[0_12px_26px_rgba(255,106,0,0.35)]'
                      : 'border-black/10 bg-[#f7f7f7] text-[#1a1f2e] hover:border-[#FF6A00]/30'
                  }`}
                >
                  <TabIcon className="size-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8 sm:space-y-10">
            <StaggerItem key={activeServiceDetails.title}>
              <article
                id={activeServiceDetails.id}
                className="rounded-[30px] border border-[#FF6A00]/45 bg-gradient-to-br from-[#fff8ef] via-white to-[#fff2de] p-6 shadow-[0_26px_50px_rgba(255,106,0,0.16)] transition-all duration-300 sm:p-8 md:p-10"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-2xl bg-[#1a1f2e] p-3 text-[#FF6A00]">
                    <ActiveServiceIcon className="size-6" />
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-[#0a0a0a] sm:text-3xl">{activeServiceDetails.title}</h2>
                </div>
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-black/10">
                  {activeServiceDetails.id === 'handyman' ? (
                    <img
                      src={activeServiceDetails.image}
                      alt={activeServiceDetails.alt}
                      className="h-64 w-full object-cover sm:h-72"
                    />
                  ) : (
                    <Image
                      src={activeServiceDetails.image}
                      alt={activeServiceDetails.alt}
                      width={1200}
                      height={700}
                      className="h-64 w-full object-cover sm:h-72"
                      sizes="100vw"
                    />
                  )}
                </div>
                <p className="card-text">{activeServiceDetails.description}</p>
                <div className="my-5 rounded-2xl border border-[#FF6A00]/35 bg-white px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8c6a00]">Ideal for</p>
                  <p className="mt-2 text-[#1a1f2e]">{activeServiceDetails.highlight.replace('Ideal for: ', '')}</p>
                </div>

                <ul className="space-y-3">
                  {(activeServiceDetails.techniques ?? activeServiceDetails.list ?? []).map((item, idx) => (
                    <li key={idx} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-[#1a1f2e]">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-black/10 pt-6">
                  <Link href="/booking" className="glass-button-primary w-full sm:w-auto">
                    Get A Quote
                  </Link>
                </div>
              </article>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-14">
              <h2 className="section-title mb-4 sm:mb-6">Materials</h2>
              <p className="section-subtitle max-w-2xl mx-auto px-4">
                Swipe across materials and hover each card for a detailed preview.
              </p>
            </div>
          </ScrollReveal>
          <div className="flex snap-x gap-5 overflow-x-auto pb-3">
            {materials.map((material) => (
              <div
                key={material.title}
                onMouseMove={onMaterialMove}
                className="group relative min-w-[280px] flex-1 snap-start overflow-hidden rounded-[30px] border border-white/70 bg-white p-5 shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
                style={{
                  backgroundImage:
                    'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(255,106,0,0.18), transparent 65%), linear-gradient(160deg, #ffffff, #f5f5f5)',
                }}
              >
                <div className="relative mb-4 overflow-hidden rounded-xl border border-black/10">
                  <Image
                    src={material.image}
                    alt={material.alt}
                    width={900}
                    height={600}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 70vw, 24vw"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0a0a0a]">{material.title}</h3>
                <p className="text-[#1a1f2e] leading-relaxed">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d4af37] text-[#0a0a0a] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel-light rounded-[32px] px-6 py-10 sm:px-10">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Need Our Services?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl mb-7 sm:mb-9 max-w-2xl mx-auto text-[#1a1f2e] px-4">
                Get in touch today to discuss your project and get your quote.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link href="/booking" className="glass-button-primary">
                  Get A Quote
                </Link>
                <a href={primaryPhone.href} className="glass-button-dark">
                  Call {primaryPhone.display}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
