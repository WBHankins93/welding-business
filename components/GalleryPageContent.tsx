'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal } from '@/components/animations'

type Category = 'all' | 'commercial' | 'welding' | 'structural' | 'handyman' | 'team'

type GalleryImage = {
  src: string
  alt: string
  caption: string
  category: Category[]
}

export const galleryImages: GalleryImage[] = [
  // Commercial
  { src: '/images/projects/commercial-wawa-complete.jpeg',         alt: 'Completed Wawa commercial build',                         caption: 'Wawa — Commercial Build Complete',          category: ['commercial'] },
  { src: '/images/projects/commercial-wawa-front.jpeg',            alt: 'Wawa storefront construction',                            caption: 'Wawa — Storefront Framing',                 category: ['commercial'] },
  { src: '/images/projects/commercial-wawa-signage.jpeg',          alt: 'Wawa signage installation',                               caption: 'Wawa — Signage Installation',               category: ['commercial'] },
  { src: '/images/projects/commercial-awning-detail.jpeg',         alt: 'Commercial awning metalwork detail',                      caption: 'Commercial Awning Metalwork',               category: ['commercial', 'structural'] },
  { src: '/images/projects/commercial-building-wide.jpeg',         alt: 'Commercial building wide view under construction',        caption: 'Commercial Build — Wide View',              category: ['commercial'] },
  { src: '/images/projects/commercial-building-construction.jpeg', alt: 'Building under active construction',                      caption: 'Commercial Building — Active Construction', category: ['commercial'] },
  { src: '/images/projects/commercial-building-side.jpeg',         alt: 'Commercial building side view',                           caption: 'Commercial Building — Side View',           category: ['commercial'] },
  { src: '/images/projects/commercial-pergola-finished.jpeg',      alt: 'Finished commercial pergola',                             caption: 'Commercial Pergola — Finished',             category: ['commercial', 'structural'] },
  { src: '/images/projects/commercial-build-framing.jpeg',         alt: 'Commercial steel framing with Tyvek wrap',                caption: 'Commercial Build — Steel Framing',          category: ['commercial', 'structural'] },
  { src: '/images/projects/commercial-build-framing-2.jpeg',       alt: 'Commercial build wide framing view',                      caption: 'Commercial Build — Framing Wide',           category: ['commercial', 'structural'] },
  { src: '/images/projects/site-building-exterior.jpeg',           alt: 'Building exterior on job site',                           caption: 'Job Site — Building Exterior',              category: ['commercial', 'structural'] },
  { src: '/images/hero/commercial-building.jpeg',                  alt: 'Commercial building project — DJN Services',              caption: 'Commercial Building Project',               category: ['commercial'] },
  // Structural
  { src: '/images/projects/structural-building-framing.jpeg',      alt: 'Structural building framing',                             caption: 'Structural Framing',                        category: ['structural'] },
  { src: '/images/projects/structural-enclosure-framing.jpeg',     alt: 'Structural enclosure framing',                            caption: 'Enclosure Framing',                         category: ['structural'] },
  { src: '/images/projects/structural-trench-welding.jpeg',        alt: 'Trench welding work on structural steel',                 caption: 'Trench Welding',                            category: ['structural', 'welding'] },
  { src: '/images/projects/structural-worker-fabricating.jpeg',    alt: 'Worker fabricating structural steel on site',             caption: 'Steel Fabrication — On Site',               category: ['structural', 'welding'] },
  { src: '/images/projects/site-elevated-work.jpeg',               alt: 'Elevated site work on steel structure',                   caption: 'Elevated Structural Work',                  category: ['structural'] },
  { src: '/images/projects/oil-pit-railings-structural.jpeg',      alt: 'Oil pit railings structural steel framing',               caption: 'Oil Pit Railings',                          category: ['structural'] },
  { src: '/images/projects/elevator-shaft-welding.jpeg',           alt: 'Elevator shaft welding with Lincoln Electric welder',     caption: 'Elevator Shaft Welding',                    category: ['welding', 'structural'] },
  { src: '/images/projects/elevator-shaft-welding-2.jpeg',         alt: 'Elevator shaft welding — pit angle view',                 caption: 'Elevator Shaft — Pit View',                 category: ['welding', 'structural'] },
  { src: '/images/projects/door-frame-installation.jpeg',          alt: 'Metal door frame installation on commercial building',    caption: 'Door Frame Installation',                   category: ['structural', 'handyman'] },
  { src: '/images/projects/door-frame-installation-2.jpeg',        alt: 'Interior steel door frame framing',                       caption: 'Steel Door Frame — Interior',               category: ['structural', 'handyman'] },
  { src: '/images/projects/structural-post-repair-weld.jpeg',      alt: 'Structural post repair — correcting prior work',          caption: 'Structural Post Repair',                    category: ['welding', 'structural'] },
  { src: '/images/projects/structural-column-field-weld.jpeg',     alt: 'Structural column weld at foundation — open field',       caption: 'Column Weld — Field Work',                  category: ['welding', 'structural'] },
  { src: '/images/hero/structural-steel.jpeg',                     alt: 'Structural steel fabrication work',                       caption: 'Structural Steel Work',                     category: ['structural'] },
  // Welding
  { src: '/images/projects/structural-column-weld.jpeg',           alt: 'Structural column weld closeup',                          caption: 'Structural Column Weld',                    category: ['structural', 'welding'] },
  { src: '/images/projects/welding-bead-closeup.jpeg',             alt: 'Precision welding bead detail',                           caption: 'Weld Bead — Precision Detail',              category: ['welding'] },
  { src: '/images/projects/welding-joint-detail.jpeg',             alt: 'Welding joint detail',                                    caption: 'Welding Joint Detail',                      category: ['welding'] },
  { src: '/images/projects/welding-joint-closeup.jpeg',            alt: 'Weld joint closeup',                                      caption: 'Weld Joint — Closeup',                      category: ['welding'] },
  { src: '/images/projects/welding-panel-repair.jpeg',             alt: 'Panel repair welding',                                    caption: 'Panel Repair Welding',                      category: ['welding'] },
  { src: '/images/projects/welding-cert-test-3g.jpeg',             alt: 'AWS 3G certification weld test',                          caption: 'AWS 3G Cert Test',                          category: ['welding'] },
  { src: '/images/projects/welding-cert-test-4g.jpeg',             alt: 'AWS 4G certification weld test',                          caption: 'AWS 4G Cert Test',                          category: ['welding'] },
  { src: '/images/projects/metal-outrigger-fabrication.jpeg',      alt: 'Fabricated metal outrigger tack welds',                   caption: 'Metal Outrigger Fabrication',               category: ['welding'] },
  { src: '/images/equipment/welding-rig-commercial.jpeg',          alt: 'Commercial welding rig on site',                          caption: 'Welding Rig — Commercial Setup',             category: ['welding'] },
  { src: '/images/equipment/welding-rig-residential.jpeg',         alt: 'Residential welding rig setup',                           caption: 'Welding Rig — Residential Setup',            category: ['welding'] },
  { src: '/images/equipment/welding-helmet.jpeg',                  alt: 'Professional welding helmet',                             caption: 'Welding Gear',                              category: ['welding'] },
  // Handyman
  { src: '/images/handyman/antenna-installation-roofline.jpeg',    alt: 'Hi-boost antenna installation on roofline via boom lift', caption: 'Hi-Boost Antenna — Roofline Install',       category: ['handyman'] },
  { src: '/images/handyman/antenna-installation-interior.jpeg',    alt: 'Antenna installation — interior scissor lift work',       caption: 'Hi-Boost Antenna — Interior Work',          category: ['handyman'] },
  { src: '/images/handyman/antenna-installation-overhead.jpeg',    alt: 'Elevated overhead installation work inside building',     caption: 'Elevated Installation — Overhead',          category: ['handyman'] },
  { src: '/images/handyman/rv-trailer-jack-welding.jpeg',          alt: 'RV trailer jack installation welding',                    caption: 'RV Trailer Jack Install',                   category: ['handyman', 'welding'] },
  { src: '/images/handyman/rv-trailer-jack-welding-2.jpeg',        alt: 'RV trailer jack repair with sparks flying',               caption: 'RV Trailer Jack — Weld Repair',             category: ['handyman', 'welding'] },
  { src: '/images/handyman/solar-system-installation.jpeg',        alt: 'Solar panel system — charge controllers and inverter',    caption: 'Solar System Installation',                 category: ['handyman'] },
  { src: '/images/handyman/solar-system-installation-2.jpeg',      alt: 'Solar system installation — alternate view',              caption: 'Solar System — Full Setup',                 category: ['handyman'] },
  // Team
  { src: '/images/hero/welder-portrait.jpeg',                      alt: 'DJN Services certified welder portrait',                  caption: 'DJN Certified Welder',                      category: ['team'] },
  { src: '/images/hero/welding-rig-jobsite.jpeg',                  alt: 'DJN Services welding rig on the job site',                caption: 'Welding Rig — Job Site',                    category: ['team'] },
  { src: '/images/team/welder-elevated-platform.jpeg',             alt: 'DJN welder working from elevated platform',               caption: 'Elevated Platform Work',                    category: ['team'] },
  { src: '/images/team/welder-silo-interior.jpeg',                 alt: 'DJN welder inside silo — interior industrial work',       caption: 'Silo Interior Work',                        category: ['team'] },
  { src: '/images/team/crew-elevated-work.jpeg',                   alt: 'DJN crew member on elevated work platform smiling',       caption: 'Crew — Elevated Work',                      category: ['team'] },
  { src: '/images/team/elevated-interior-fabrication.jpeg',        alt: 'DJN crew on scissor lift inside commercial build',        caption: 'Interior Fabrication — Elevated',           category: ['team'] },
]

const categories: { key: Category; label: string; description: string }[] = [
  { key: 'all',        label: 'All Work',   description: 'Every project — commercial builds, welding, structural steel, handyman installs, and the crew behind it all.' },
  { key: 'commercial', label: 'Commercial', description: 'Large-scale builds, storefronts, and commercial steel work.' },
  { key: 'welding',    label: 'Welding',    description: 'Certified weld work — structural, fabrication, and field repairs.' },
  { key: 'structural', label: 'Structural', description: 'Framing, columns, railings, and steel structural systems.' },
  { key: 'handyman',   label: 'Handyman',   description: 'Antenna installs, solar systems, RV repairs, door frames, and more.' },
  { key: 'team',       label: 'Our Crew',   description: 'The people behind every job — certified, experienced, and dependable.' },
]

export function GalleryPageContent() {
  const searchParams = useSearchParams()
  const paramCategory = searchParams.get('category') as Category | null
  const [active, setActive] = useState<Category>(
    paramCategory && categories.some((c) => c.key === paramCategory) ? paramCategory : 'all'
  )
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    active === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category.includes(active))

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }
  const next = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, filtered.length])

  const activeCategory = categories.find((c) => c.key === active)!

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: 'DJN Services LLC', href: '/' },
              { label: 'Gallery' },
            ]}
          />
        </div>
      </div>

      {/* Hero — matches About/Services pattern exactly */}
      <section className="relative bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/projects/elevator-shaft-welding.jpeg"
            alt="DJN Services project gallery — real work from real job sites"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-dark max-w-4xl rounded-2xl p-8 sm:p-10">
            <ScrollReveal immediate>
              <h1 className="page-hero-title mb-4 sm:mb-6">Project Portfolio</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1} immediate>
              <p className="page-hero-subtitle max-w-3xl">
                Real jobs from real job sites — commercial builds, certified welds, structural steel, and hands-on service across the Gulf Coast.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Category filter bar */}
      <section className="bg-white border-b border-black/10 sticky top-0 z-20 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                  active === key
                    ? 'border-[#FF6A00]/60 bg-[#FF6A00] text-white shadow-[0_8px_20px_rgba(255,106,0,0.35)]'
                    : 'border-black/10 bg-[#F4F4F4] text-[#1C1C1C] hover:border-[#FF6A00]/40 hover:text-[#FF6A00]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category description + count */}
      <section className="bg-[#F4F4F4] py-6 border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[#4A4A4A] text-sm sm:text-base">{activeCategory.description}</p>
          <span className="font-kicker text-xs text-[#FF6A00] shrink-0">{filtered.length} photos</span>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-4"
          >
            {filtered.map((img, index) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-[#F4F4F4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/50 flex items-end">
                  <p className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 w-full px-3 pb-3 text-xs font-semibold uppercase tracking-wide text-white leading-tight">
                    {img.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1C] py-14 sm:py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="type-kicker">Like What You See?</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            Let&apos;s Get Your Job Done
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-subheading text-gray-300 sm:text-lg">
            Every project in this gallery started with a call. Reach out for a fast, honest quote.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/booking" className="btn-primary-glow gap-2 px-8 py-4 text-base">
              Get A Quote
            </Link>
            <Link href="/services" className="btn-secondary-white gap-2 px-8 py-4 text-base">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition z-10"
              aria-label="Close"
            >
              <X className="size-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 sm:left-6 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative mx-14 sm:mx-20 max-h-[85vh] max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 800px"
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold uppercase tracking-wide text-gray-300">
                {filtered[lightboxIndex].caption}
              </p>
              <p className="mt-1 text-center text-xs text-gray-500">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 sm:right-6 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition z-10"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
