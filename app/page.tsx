import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
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
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { primaryPhone } from '@/lib/contact-info'

const phoneNumber = primaryPhone.display
const phoneHref = primaryPhone.href

export const metadata: Metadata = {
  title: 'Mobile Welding, Hauling & Handyman Services — Gulf Coast',
  description:
    'DJN Services LLC delivers mobile welding, trash removal, hauling, and handyman services across Mississippi, Alabama, Florida, and South Georgia. 100% disabled veteran-owned. AWS certified welders. Fast response, honest estimates.',
  keywords: [
    'mobile welding near me',
    'welding services Mississippi',
    'welding services Alabama',
    'welding services Gulf Coast',
    'trash removal Mississippi',
    'junk hauling Gulf Coast',
    'handyman Gulf Coast',
    'veteran owned contractor',
    'AWS certified welding',
  ],
  alternates: {
    canonical: 'https://www.djnservicesllc.com',
  },
  openGraph: {
    title: 'DJN Services LLC | Mobile Welding, Hauling & Handyman — Gulf Coast',
    description:
      'AWS certified mobile welding, trash removal, and handyman services across MS, AL, FL, and South GA. 100% disabled veteran-owned. Fast response, honest estimates.',
    url: 'https://www.djnservicesllc.com',
    type: 'website',
    images: [
      {
        url: '/images/services/mobile-welding.webp',
        width: 1200,
        height: 630,
        alt: 'DJN Services LLC — Mobile welding crew on site',
      },
    ],
  },
}

type Service = {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
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

const trustPoints = [
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

      <section className="relative isolate overflow-hidden bg-[#1C1C1C] text-white">
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
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-36 pb-20 sm:px-6 sm:pt-40 sm:pb-24 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:pt-44 lg:pb-32">
          <ScrollReveal direction="up">
            <p className="font-kicker text-sm text-[#FF6A00]">Welding • Hauling • Removal</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
              Reliable Work.
              <br />
              Built to Last.
            </h1>
            <p className="mt-6 max-w-2xl font-subheading text-lg text-gray-200 sm:text-xl">
              <span className="font-semibold italic text-white">Welcome to DJN Services.</span> Heavy-duty help for homes, businesses, and job sites. Fast response, fair estimates, and serious workmanship from a local crew.
            </p>
            <div className="mt-10 flex">
              <Link
                href="/booking"
                className="btn-primary-glow gap-2 px-8 py-4 text-base"
              >
                Get A Quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </ScrollReveal>

          <FadeIn delay={0.2} className="glass-panel-dark self-end rounded-2xl p-6">
            <p className="font-kicker text-xs text-[#FF6A00]">Fast Response</p>
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

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          <StaggerContainer className="contents" immediate>
            {trustPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#F4F4F4] px-3 py-3 text-center font-kicker text-xs text-[#1C1C1C] sm:text-sm">
                  <CheckCircle2 className="size-4 shrink-0 text-[#FF6A00]" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
                    <article className="flex h-full flex-col border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
                      <div className="mb-5 inline-flex size-12 items-center justify-center bg-[#1C1C1C] text-[#FF6A00]">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-[#1C1C1C]">{service.title}</h3>
                      <p className="mt-4 text-[#4A4A4A]">{service.description}</p>
                      <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#1C1C1C] transition hover:text-[#FF6A00]">
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
            <p className="type-kicker mb-3">Why Choose Us</p>
            <h2 className="type-heading text-3xl leading-tight sm:text-4xl md:text-5xl">Dependable Crew. Durable Results.</h2>
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
              <p className="font-kicker text-xs text-[#FF6A00]">Priority Scheduling</p>
              <p className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                Fast communication for urgent work.
              </p>
              <Link
                href="/booking"
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

      <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <SectionHeading
              eyebrow="Featured Work"
              title="Recent Projects"
              description="Commercial builds, structural steel, weld certifications, and on-site fabrication — real work from real job sites."
            />
            <Link
              href="/gallery"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-[#F4F4F4] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-[#1C1C1C] transition hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              Full Gallery <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
        <ProjectCarousel />
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
                <figure className="flex h-full flex-col justify-between border border-black/10 bg-white p-6">
                  <blockquote className="font-body text-[#1C1C1C]">{'\u201C'}{testimonial.quote}{'\u201D'}</blockquote>
                  <figcaption className="mt-6 border-t border-black/10 pt-4">
                    <p className="font-heading font-bold uppercase tracking-wide text-[#1C1C1C]">{testimonial.name}</p>
                    <p className="font-note text-sm text-[#4A4A4A]">{testimonial.role}</p>
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
              <div key={area} className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#F4F4F4] px-4 py-3 font-kicker text-sm text-[#1C1C1C]">
                <HomeIcon className="size-4 text-[#FF6A00]" aria-hidden="true" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1C1C1C] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="type-kicker">Ready to Get Started?</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">Get Your Quote Today</h2>
          <p className="mx-auto mt-5 max-w-2xl font-subheading text-gray-300 sm:text-lg">
            Need welding, hauling, or removal done fast? Reach out for priority response or send a quote request and we&apos;ll follow up quickly.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/booking"
              className="btn-primary-glow gap-2 px-8 py-4 text-base"
            >
              Get A Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
