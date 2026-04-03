import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Hammer,
  Home as HomeIcon,
  Phone,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { FloatingOrbs } from '@/components/animations/FloatingOrbs'
import { HoverLift } from '@/components/animations/HoverLift'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'

const phoneNumber = '(555) 123-4567'
const phoneHref = 'tel:5551234567'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'DJN Services delivers welding, hauling, and removal work with fast response times, fair estimates, and dependable workmanship for homes, businesses, and job sites.',
  alternates: {
    canonical: 'https://www.djnservicesllc.com',
  },
  openGraph: {
    title: 'DJN Services | Welding • Hauling • Removal',
    description:
      'Reliable local contractor services for welding, hauling, and removal. Fast turnaround. Built for hard jobs.',
    url: 'https://www.djnservicesllc.com',
    type: 'website',
  },
}

type Service = {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

type Project = {
  title: string
  type: string
  image: string
  alt: string
}

type Testimonial = {
  quote: string
  name: string
  role: string
}

const services: Service[] = [
  {
    title: 'Mobile Welding Service',
    description: 'On-site repairs and fabrication for gates, trailers, equipment, and structural steel.',
    icon: Wrench,
  },
  {
    title: 'Trash & Junk Removal',
    description: 'Fast hauling for cleanouts, construction debris, and bulky items from homes and job sites.',
    icon: Truck,
  },
  {
    title: 'Handyman Services',
    description: 'Dependable repair and install work done with practical solutions and clean finishes.',
    icon: Hammer,
  },
]

const tickerItems = [
  'MOBILE WELDING',
  'TRASH & JUNK REMOVAL',
  'HANDYMAN SERVICES',
  'FAST RESPONSE',
  'RESIDENTIAL + COMMERCIAL',
]

const reasons = [
  'Clear communication and honest estimates',
  'Built for hard jobs and tight timelines',
  'Quality workmanship with durable results',
  'Responsive scheduling and dependable arrival times',
]

const projects: Project[] = [
  {
    title: 'Mobile Welding Repair',
    type: 'Mobile Welding',
    image: '/images/services/mobile-welding.webp',
    alt: 'DJN Services mobile welding work in progress',
  },
  {
    title: 'Property Cleanout Haul',
    type: 'Removal & Hauling',
    image: '/images/services/trash-removal-djn.webp',
    alt: 'DJN Services trash removal and hauling project',
  },
  {
    title: 'Rock Material Delivery',
    type: 'Material Hauling',
    image: '/images/materials/rock-djn.webp',
    alt: 'Rock material ready for hauling and delivery',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'DJN showed up when they said they would, got the weld repairs done right, and had us back running the same day.',
    name: 'Mark R.',
    role: 'Fleet Supervisor',
  },
  {
    quote:
      'We needed a fast junk haul after a remodel. Fair price, hardworking crew, and the site was left clean.',
    name: 'Angela T.',
    role: 'Homeowner',
  },
  {
    quote:
      'Straightforward estimate, quality workmanship, and no excuses. Exactly the kind of contractor we needed.',
    name: 'Carlos M.',
    role: 'Property Manager',
  },
]

const serviceAreas = [
  'Mississippi',
  'Alabama',
  'Florida',
  'South Georgia',
]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="type-kicker mb-3 inline-flex items-center gap-2">
        <Sparkles className="size-3.5" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="type-heading text-3xl leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="type-body mt-4">{description}</p>
    </div>
  )
}

export default function Home() {
  const homepageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DJN Services LLC',
    url: 'https://www.djnservicesllc.com',
    telephone: phoneNumber,
    serviceType: ['Mobile Welding', 'Hauling', 'Removal', 'Handyman Services'],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }} />

      <section className="relative isolate -mt-24 overflow-hidden bg-[#1C1C1C] pt-24 text-white sm:-mt-28 sm:pt-28">
        <FloatingOrbs />
        <Image
          src="/images/services/mobile-welding.webp"
          alt="DJN Services mobile welding crew at work"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-32">
          <ScrollReveal direction="up">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">Welding • Hauling • Removal</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-heading font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
              Reliable Work.
              <br />
              Built to Last.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl">
              <span className="font-semibold italic text-white">Welcome to DJN Services.</span> Heavy-duty help for homes, businesses, and job sites. Fast response, fair estimates, and serious workmanship from a local crew.
            </p>
            <div className="mt-10 flex">
              <Link
                href="/contact#contact-form"
                className="glass-button-primary gap-2 px-8 py-4 text-base tracking-wide shadow-[0_0_30px_rgba(255,106,0,0.35)]"
              >
                Get A Quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </ScrollReveal>

          <FadeIn delay={0.2} className="glass-panel-dark self-end rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#FF6A00]">Fast Response</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-100">
              {['Same-day scheduling', 'Honest scope', 'Clear pricing', 'Residential', 'Commercial', 'Job-site service'].map((item) => (
                <div key={item} className="glass-panel-light flex min-h-14 items-center justify-center rounded-2xl px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-[#1C1C1C]">
                  {item}
                </div>
              ))}
            </div>
            <a href={phoneHref} className="glass-button-primary mt-6 inline-flex w-full gap-2 px-5 py-3 text-sm tracking-wide">
              <Phone className="size-4" /> {phoneNumber}
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="overflow-hidden border-y border-black/10 bg-white py-3 sm:py-4">
        <div className="stock-ticker-track flex min-w-max items-center gap-3 px-3 sm:gap-4 sm:px-4">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="rounded-full border border-black/10 bg-[#f7f7f7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1a1f2e] sm:px-5 sm:text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Services"
            title="Hard-Working Services for Hard Jobs"
            description="From mobile welding to hauling and cleanup, we handle the tough work with dependable turnaround and practical solutions."
          />
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <StaggerItem key={service.title}>
                  <HoverLift className="h-full">
                    <article className="glass-panel-light flex h-full flex-col rounded-[28px] p-6 transition hover:shadow-xl">
                      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-[#1C1C1C] text-[#FF6A00]">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-[#1C1C1C]">{service.title}</h3>
                      <p className="mt-4 text-[#4A4A4A]">{service.description}</p>
                      <Link href="/services" className="glass-button-dark mt-6 w-full gap-2 text-xs tracking-wide sm:w-fit">
                        Learn More <ArrowRight className="size-4" />
                      </Link>
                    </article>
                  </HoverLift>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#1C1C1C] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-heading font-bold uppercase tracking-wide sm:text-4xl md:text-5xl">Dependable Crew. Durable Results.</h2>
            <p className="mt-5 max-w-2xl text-gray-300 sm:text-lg">
              We keep it simple: show up, work hard, and do it right. DJN Services is built on reliable service, practical planning, and quality that holds up.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason} className="glass-panel-dark flex gap-3 rounded-[24px] p-4 text-sm sm:text-base">
                  <Star className="mt-0.5 size-4 shrink-0 text-[#FF6A00]" aria-hidden="true" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 self-end">
            <div className="glass-panel-dark rounded-[28px] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#FF6A00]">Priority Scheduling</p>
              <p className="mt-2 text-2xl font-heading font-bold tracking-wide text-white sm:text-3xl">
                Fast communication for urgent work.
              </p>
              <Link
                href="/contact"
                className="glass-button-primary mt-5 hidden w-full gap-2 text-xs tracking-wide sm:inline-flex"
              >
                <ArrowRight className="size-4" /> Get A Quote
              </Link>
              <a
                href={phoneHref}
                className="glass-button-primary mt-5 inline-flex w-full gap-2 text-xs tracking-wide sm:hidden"
              >
                <Phone className="size-4" /> Call Now
              </a>
            </div>
            <div className="glass-panel-dark rounded-[28px] p-5 text-sm text-gray-200">
              <p className="font-semibold uppercase tracking-wider text-white">Built for:</p>
              <p className="mt-2">Homes • Commercial Properties • Construction Sites • Equipment Yards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Work"
            title="Recent Projects"
            description="A few examples of welding, hauling, and repair work handled by DJN Services. This layout is ready for before/after additions as your project gallery grows."
          />
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <HoverLift>
                  <article className="glass-panel-light overflow-hidden rounded-[28px]">
                    <div className="relative h-56">
                      <Image src={project.image} alt={project.alt} fill className="object-cover transition duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">{project.type}</p>
                      <h3 className="mt-2 text-xl font-heading font-bold uppercase tracking-wide text-[#1C1C1C]">{project.title}</h3>
                    </div>
                  </article>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Customer Feedback"
            title="Trusted by Local Clients"
            description="No fluff—just real feedback from homeowners, managers, and crews who needed the job done right."
          />
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <figure className="glass-panel-light flex h-full flex-col justify-between rounded-[28px] p-6">
                  <blockquote className="text-[#1C1C1C]">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-black/10 pt-4">
                    <p className="font-bold uppercase tracking-wide text-[#1C1C1C]">{testimonial.name}</p>
                    <p className="text-sm text-[#4A4A4A]">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Area"
            title="Serving the Gulf Coast"
            description="We provide welding, hauling, and removal across the Gulf Coast: Mississippi, Alabama, Florida, and South Georgia."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {serviceAreas.map((area) => (
              <div key={area} className="glass-panel-light flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#1C1C1C]">
                <HomeIcon className="size-4 text-[#FF6A00]" aria-hidden="true" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1C1C1C] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">Ready to Get Started?</p>
          <h2 className="mt-3 text-4xl font-heading font-bold uppercase tracking-wide sm:text-5xl">Get Your Quote Today</h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-300 sm:text-lg">
            Need welding, hauling, or removal done fast? Reach out for priority response or send a quote request and we’ll follow up quickly.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/contact#contact-form"
              className="glass-button-primary gap-2 px-8 py-4 text-base tracking-wide"
            >
              Get A Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
