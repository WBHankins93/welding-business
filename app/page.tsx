import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Hammer,
  Home as HomeIcon,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from 'lucide-react'

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

const trustPoints = [
  'Locally Owned',
  'Free Estimates',
  'Fast Response',
  'Reliable Service',
  'Residential + Commercial',
]

const reasons = [
  'Clear communication and honest estimates',
  'Built for hard jobs and tight timelines',
  'Quality workmanship with durable results',
  'Responsive scheduling and dependable arrival times',
]

const projects: Project[] = [
  {
    title: 'Trailer Frame Reinforcement',
    type: 'Mobile Welding',
    image:
      'https://images.unsplash.com/photo-1615833400276-295fbc76f19e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Welder repairing a heavy-duty trailer frame',
  },
  {
    title: 'Property Cleanout Haul',
    type: 'Removal & Hauling',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Heavy truck hauling debris away from a property',
  },
  {
    title: 'Steel Gate Repair',
    type: 'Welding Repair',
    image:
      'https://images.unsplash.com/photo-1651573582903-7b0fdb391cb6?auto=format&fit=crop&w=1400&q=80',
    alt: 'Metal gate fabrication and welding in progress',
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
  'Downtown',
  'North Side',
  'South Side',
  'West End',
  'East Metro',
  'Nearby Rural Areas',
]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">
        <Sparkles className="size-3.5" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-heading font-bold uppercase leading-tight tracking-wide text-[#1C1C1C] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base text-[#4A4A4A] sm:text-lg">{description}</p>
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
        <Image
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=2000&q=80"
          alt="Worker welding steel with industrial sparks"
          fill
          priority
          className="object-cover opacity-30 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">Welding • Hauling • Removal</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-heading font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
              Reliable Work.
              <br />
              Built to Last.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl">
              Heavy-duty help for homes, businesses, and job sites. Fast response, fair estimates, and serious workmanship from a local crew.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6A00] px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-[#e66000]"
              >
                Get a Quote <ArrowRight className="size-4" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/60 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:border-[#FF6A00] hover:text-[#FF6A00]"
              >
                <Phone className="size-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="self-end rounded-sm border border-white/20 bg-black/45 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[#FF6A00]">Fast Response</p>
            <div className="mt-4 space-y-4 text-sm text-gray-200">
              <p className="flex items-center gap-2">
                <Clock3 className="size-4 text-[#FF6A00]" /> Same-day scheduling when available
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#FF6A00]" /> Honest scope and clear pricing
              </p>
              <p className="flex items-center gap-2">
                <Building2 className="size-4 text-[#FF6A00]" /> Residential, commercial, and job-site work
              </p>
            </div>
            <a
              href={phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-[#FF6A00] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#FF6A00] transition hover:bg-[#FF6A00] hover:text-white"
            >
              <Phone className="size-4" /> {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center justify-center gap-2 border border-black/10 bg-[#F4F4F4] px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#1C1C1C] sm:text-sm">
              <CheckCircle2 className="size-4 text-[#FF6A00]" aria-hidden="true" />
              <span>{point}</span>
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="flex h-full flex-col border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 inline-flex size-12 items-center justify-center bg-[#1C1C1C] text-[#FF6A00]">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-[#1C1C1C]">{service.title}</h3>
                  <p className="mt-4 text-[#4A4A4A]">{service.description}</p>
                  <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#1C1C1C] transition hover:text-[#FF6A00]">
                    Learn More <ArrowRight className="size-4" />
                  </Link>
                </article>
              )
            })}
          </div>
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
                <li key={reason} className="flex gap-3 border border-white/15 bg-white/5 p-4 text-sm sm:text-base">
                  <Star className="mt-0.5 size-4 shrink-0 text-[#FF6A00]" aria-hidden="true" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 self-end">
            <div className="border border-[#FF6A00]/50 bg-black/40 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#FF6A00]">Call for Priority Scheduling</p>
              <a href={phoneHref} className="mt-2 block text-3xl font-heading font-bold tracking-wide text-white transition hover:text-[#FF6A00] sm:text-4xl">
                {phoneNumber}
              </a>
            </div>
            <div className="border border-white/15 bg-white/5 p-5 text-sm text-gray-200">
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden border border-black/10 bg-[#F4F4F4]">
                <div className="relative h-56">
                  <Image src={project.image} alt={project.alt} fill className="object-cover grayscale" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6A00]">{project.type}</p>
                  <h3 className="mt-2 text-xl font-heading font-bold uppercase tracking-wide text-[#1C1C1C]">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Customer Feedback"
            title="Trusted by Local Clients"
            description="No fluff—just real feedback from homeowners, managers, and crews who needed the job done right."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="flex h-full flex-col justify-between border border-black/10 bg-white p-6">
                <blockquote className="text-[#1C1C1C]">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-black/10 pt-4">
                  <p className="font-bold uppercase tracking-wide text-[#1C1C1C]">{testimonial.name}</p>
                  <p className="text-sm text-[#4A4A4A]">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Area"
            title="Serving the Local Area"
            description="We provide welding, hauling, and removal services across the metro and surrounding communities."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {serviceAreas.map((area) => (
              <div key={area} className="flex items-center justify-center gap-2 border border-black/10 bg-[#F4F4F4] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#1C1C1C]">
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
            Need welding, hauling, or removal done fast? Call now for priority response or send a quote request and we’ll follow up quickly.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6A00] px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-[#e66000]"
            >
              <CalendarClock className="size-4" /> Get a Quote
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/60 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:border-[#FF6A00] hover:text-[#FF6A00]"
            >
              <Phone className="size-4" /> Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
