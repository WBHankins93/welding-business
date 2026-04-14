'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimationControls } from 'motion/react'
import { ArrowRight } from 'lucide-react'

type Category = 'all' | 'commercial' | 'welding' | 'structural' | 'handyman'

type ProjectImage = {
  src: string
  alt: string
  category: Category[]
}

const projectImages: ProjectImage[] = [
  // --- Existing project images ---
  { src: '/images/projects/commercial-wawa-complete.jpeg',        alt: 'Completed Wawa commercial build',             category: ['commercial'] },
  { src: '/images/projects/commercial-wawa-front.jpeg',           alt: 'Wawa storefront construction',                category: ['commercial'] },
  { src: '/images/projects/commercial-wawa-signage.jpeg',         alt: 'Wawa signage installation',                   category: ['commercial'] },
  { src: '/images/projects/commercial-awning-detail.jpeg',        alt: 'Commercial awning metalwork',                 category: ['commercial', 'structural'] },
  { src: '/images/projects/commercial-building-wide.jpeg',        alt: 'Commercial building construction',            category: ['commercial'] },
  { src: '/images/projects/commercial-building-construction.jpeg',alt: 'Building under construction',                 category: ['commercial'] },
  { src: '/images/projects/commercial-building-side.jpeg',        alt: 'Commercial building side view',               category: ['commercial'] },
  { src: '/images/projects/commercial-pergola-finished.jpeg',     alt: 'Commercial pergola installation',             category: ['commercial', 'structural'] },
  { src: '/images/projects/structural-column-weld.jpeg',          alt: 'Structural column weld',                      category: ['structural', 'welding'] },
  { src: '/images/projects/structural-building-framing.jpeg',     alt: 'Structural building framing',                 category: ['structural'] },
  { src: '/images/projects/structural-enclosure-framing.jpeg',    alt: 'Enclosure framing',                           category: ['structural'] },
  { src: '/images/projects/structural-trench-welding.jpeg',       alt: 'Trench welding work',                         category: ['structural', 'welding'] },
  { src: '/images/projects/structural-worker-fabricating.jpeg',   alt: 'Worker fabricating structural steel',         category: ['structural', 'welding'] },
  { src: '/images/projects/site-building-exterior.jpeg',          alt: 'Building exterior on site',                   category: ['commercial', 'structural'] },
  { src: '/images/projects/site-elevated-work.jpeg',              alt: 'Elevated site work',                          category: ['structural'] },
  { src: '/images/projects/welding-bead-closeup.jpeg',            alt: 'Precision welding bead detail',               category: ['welding'] },
  { src: '/images/projects/welding-joint-detail.jpeg',            alt: 'Welding joint detail',                        category: ['welding'] },
  { src: '/images/projects/welding-joint-closeup.jpeg',           alt: 'Weld joint closeup',                          category: ['welding'] },
  { src: '/images/projects/welding-panel-repair.jpeg',            alt: 'Panel repair welding',                        category: ['welding'] },
  { src: '/images/projects/welding-cert-test-3g.jpeg',            alt: 'AWS 3G certification weld test',              category: ['welding'] },
  { src: '/images/projects/welding-cert-test-4g.jpeg',            alt: 'AWS 4G certification weld test',              category: ['welding'] },
  // --- New TODO images ---
  { src: '/images/projects/elevator-shaft-welding.jpeg',          alt: 'Elevator shaft welding with Lincoln Electric', category: ['welding', 'structural'] },
  { src: '/images/projects/elevator-shaft-welding-2.jpeg',        alt: 'Elevator shaft welding — pit angle',          category: ['welding', 'structural'] },
  { src: '/images/projects/door-frame-installation.jpeg',         alt: 'Metal door frame installation on commercial building', category: ['structural', 'handyman'] },
  { src: '/images/projects/door-frame-installation-2.jpeg',       alt: 'Interior steel door frame framing',           category: ['structural', 'handyman'] },
  { src: '/images/projects/metal-outrigger-fabrication.jpeg',     alt: 'Fabricated metal outrigger tack welds',       category: ['welding'] },
  { src: '/images/projects/structural-post-repair-weld.jpeg',     alt: 'Structural post repair — fixing prior work',  category: ['welding', 'structural'] },
  { src: '/images/projects/structural-column-field-weld.jpeg',    alt: 'Structural column weld at foundation',        category: ['welding', 'structural'] },
  { src: '/images/projects/oil-pit-railings-structural.jpeg',     alt: 'Oil pit railings — structural steel framing', category: ['structural'] },
  { src: '/images/projects/commercial-build-framing.jpeg',        alt: 'Commercial build steel framing with Tyvek wrap', category: ['commercial', 'structural'] },
  { src: '/images/projects/commercial-build-framing-2.jpeg',      alt: 'Commercial build wide framing view',          category: ['commercial', 'structural'] },
  { src: '/images/handyman/antenna-installation-roofline.jpeg',   alt: 'Hi-boost antenna installation on roofline via boom lift', category: ['handyman'] },
  { src: '/images/handyman/antenna-installation-interior.jpeg',   alt: 'Antenna installation — interior scissor lift work', category: ['handyman'] },
  { src: '/images/handyman/antenna-installation-overhead.jpeg',   alt: 'Elevated overhead installation work',         category: ['handyman'] },
  { src: '/images/handyman/rv-trailer-jack-welding.jpeg',         alt: 'RV trailer jack installation welding',        category: ['handyman', 'welding'] },
  { src: '/images/handyman/rv-trailer-jack-welding-2.jpeg',       alt: 'RV trailer jack repair with sparks',          category: ['handyman', 'welding'] },
  { src: '/images/handyman/solar-system-installation.jpeg',       alt: 'Solar panel system installation — charge controllers and inverter', category: ['handyman'] },
  { src: '/images/handyman/solar-system-installation-2.jpeg',     alt: 'Solar system installation — alternate view',  category: ['handyman'] },
  // Equipment & hero shots
  { src: '/images/equipment/welding-rig-commercial.jpeg',         alt: 'Commercial welding rig on site',              category: ['welding'] },
  { src: '/images/equipment/welding-rig-residential.jpeg',        alt: 'Residential welding rig setup',               category: ['welding'] },
  { src: '/images/equipment/welding-helmet.jpeg',                 alt: 'Professional welding helmet',                 category: ['welding'] },
  { src: '/images/hero/commercial-building.jpeg',                 alt: 'Commercial building project',                 category: ['commercial'] },
  { src: '/images/hero/structural-steel.jpeg',                    alt: 'Structural steel work',                       category: ['structural'] },
  { src: '/images/hero/welder-portrait.jpeg',                     alt: 'DJN Services certified welder',               category: ['welding'] },
  { src: '/images/hero/welding-rig-jobsite.jpeg',                 alt: 'Welding rig on the job site',                 category: ['welding'] },
  { src: '/images/team/welder-elevated-platform.jpeg',            alt: 'DJN welder on elevated platform',             category: ['welding', 'structural'] },
  { src: '/images/team/welder-silo-interior.jpeg',                alt: 'DJN welder inside silo',                      category: ['welding', 'structural'] },
  { src: '/images/team/crew-elevated-work.jpeg',                  alt: 'DJN crew on elevated work platform',          category: ['welding', 'structural'] },
  { src: '/images/team/elevated-interior-fabrication.jpeg',       alt: 'DJN crew on scissor lift inside commercial build', category: ['structural'] },
]

const categories: { key: Category; label: string }[] = [
  { key: 'all',        label: 'All Work' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'welding',    label: 'Welding' },
  { key: 'structural', label: 'Structural' },
  { key: 'handyman',   label: 'Handyman' },
]

function shuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    seed = (seed * 16807 + 0) % 2147483647
    const j = seed % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

// Pixels per second — tune this single constant to adjust overall carousel speed
const PX_PER_SECOND = 80

function CarouselRow({
  images,
  direction,
}: {
  images: ProjectImage[]
  direction: 'left' | 'right'
}) {
  const controls = useAnimationControls()
  const trackRef = useRef<HTMLDivElement>(null)
  const [halfWidth, setHalfWidth] = useState(0)

  const items = [...images, ...images]

  useEffect(() => {
    if (!trackRef.current) return
    const w = trackRef.current.scrollWidth / 2
    setHalfWidth(w)
  }, [images])

  useEffect(() => {
    if (halfWidth === 0) return
    // Duration scales with track width so speed is always PX_PER_SECOND px/s
    const duration = halfWidth / PX_PER_SECOND
    const from = direction === 'left' ? 0 : -halfWidth
    const to = direction === 'left' ? -halfWidth : 0
    controls.set({ x: from })
    controls.start({
      x: [from, to],
      transition: {
        x: { repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' },
      },
    })
  }, [halfWidth, direction, controls])

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={trackRef}
        animate={controls}
        className="flex gap-4"
        style={{ width: 'max-content' }}
      >
        {items.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-80 md:h-64 md:w-96"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function ProjectCarousel() {
  const [active, setActive] = useState<Category>('all')

  const filtered =
    active === 'all'
      ? projectImages
      : projectImages.filter((img) => img.category.includes(active))

  const shuffled = shuffle(filtered, 42)
  const mid = Math.ceil(shuffled.length / 2)
  const row1 = shuffled.slice(0, mid)
  const row2 = shuffled.slice(mid)

  // Keep at least 3 images per row for the loop to look good
  const safeRow1 = row1.length < 3 ? [...row1, ...row1, ...row1] : row1
  const safeRow2 = row2.length < 3 ? [...row2, ...row2, ...row2] : row2

  return (
    <div className="space-y-6">
      {/* Category chip filter */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                active === key
                  ? 'border-[#FF6A00]/60 bg-[#FF6A00] text-white shadow-[0_8px_20px_rgba(255,106,0,0.35)]'
                  : 'border-black/10 bg-white text-[#1C1C1C] hover:border-[#FF6A00]/40 hover:text-[#FF6A00]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Scrolling rows */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <CarouselRow images={safeRow1} direction="left" />
        {safeRow2.length > 0 && <CarouselRow images={safeRow2} direction="right" />}
      </motion.div>

      {/* Link to full gallery */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2">
        <Link
          href={`/gallery${active !== 'all' ? `?category=${active}` : ''}`}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#1C1C1C] transition hover:text-[#FF6A00]"
        >
          View Full Gallery <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}
