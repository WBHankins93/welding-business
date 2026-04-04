'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimationControls } from 'motion/react'

const projectImages = [
  { src: '/images/projects/commercial-wawa-complete.jpeg', alt: 'Completed Wawa commercial build' },
  { src: '/images/projects/structural-column-weld.jpeg', alt: 'Structural column weld' },
  { src: '/images/projects/commercial-pergola-finished.jpeg', alt: 'Commercial pergola installation' },
  { src: '/images/projects/welding-bead-closeup.jpeg', alt: 'Precision welding bead detail' },
  { src: '/images/projects/commercial-building-wide.jpeg', alt: 'Commercial building construction' },
  { src: '/images/projects/structural-worker-fabricating.jpeg', alt: 'Worker fabricating structural steel' },
  { src: '/images/projects/welding-joint-detail.jpeg', alt: 'Welding joint detail' },
  { src: '/images/projects/commercial-awning-detail.jpeg', alt: 'Commercial awning metalwork' },
  { src: '/images/projects/site-elevated-work.jpeg', alt: 'Elevated site work' },
  { src: '/images/projects/structural-building-framing.jpeg', alt: 'Structural building framing' },
  { src: '/images/projects/welding-panel-repair.jpeg', alt: 'Panel repair welding' },
  { src: '/images/projects/commercial-building-construction.jpeg', alt: 'Building under construction' },
  { src: '/images/projects/structural-enclosure-framing.jpeg', alt: 'Enclosure framing' },
  { src: '/images/projects/welding-cert-test-3g.jpeg', alt: 'AWS 3G certification weld test' },
  { src: '/images/projects/commercial-wawa-front.jpeg', alt: 'Wawa storefront construction' },
  { src: '/images/projects/structural-trench-welding.jpeg', alt: 'Trench welding work' },
  { src: '/images/projects/site-building-exterior.jpeg', alt: 'Building exterior on site' },
  { src: '/images/projects/welding-joint-closeup.jpeg', alt: 'Weld joint closeup' },
  { src: '/images/projects/commercial-building-side.jpeg', alt: 'Commercial building side view' },
  { src: '/images/projects/commercial-wawa-signage.jpeg', alt: 'Wawa signage installation' },
  { src: '/images/projects/welding-cert-test-4g.jpeg', alt: 'AWS 4G certification weld test' },
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

const shuffled = shuffle(projectImages, 42)
const row1Images = shuffled.slice(0, 11)
const row2Images = shuffled.slice(11)

function CarouselRow({ images, direction }: { images: typeof row1Images; direction: 'left' | 'right' }) {
  const controls = useAnimationControls()
  const trackRef = useRef<HTMLDivElement>(null)
  const [halfWidth, setHalfWidth] = useState(0)

  // Duplicate images for seamless loop
  const items = [...images, ...images]

  useEffect(() => {
    if (!trackRef.current) return
    // Half = width of original set of images
    const w = trackRef.current.scrollWidth / 2
    setHalfWidth(w)
  }, [])

  useEffect(() => {
    if (halfWidth === 0) return

    const from = direction === 'left' ? 0 : -halfWidth
    const to = direction === 'left' ? -halfWidth : 0
    const duration = 50

    controls.set({ x: from })
    controls.start({
      x: [from, to],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration,
          ease: 'linear',
        },
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
  return (
    <div className="space-y-4">
      <CarouselRow images={row1Images} direction="left" />
      <CarouselRow images={row2Images} direction="right" />
    </div>
  )
}
