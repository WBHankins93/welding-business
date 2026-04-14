import type { Metadata } from 'next'
import { Suspense } from 'react'
import { GalleryPageContent } from '@/components/GalleryPageContent'

export const metadata: Metadata = {
  title: 'Project Portfolio — Welding, Structural Steel & Handyman Gallery',
  description:
    'Browse the DJN Services LLC project portfolio. Commercial builds, AWS certified welding, structural steel, elevator shaft work, solar installs, antenna installs, and more — real jobs across Mississippi, Alabama, Florida, and South Georgia.',
  keywords: [
    'welding project portfolio',
    'commercial construction photos',
    'structural steel gallery',
    'mobile welding projects Mississippi',
    'handyman services photos',
    'solar installation Gulf Coast',
    'elevator shaft welding',
    'RV repair welding',
    'DJN Services gallery',
    'veteran owned contractor projects',
  ],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/gallery',
  },
  openGraph: {
    title: 'Project Portfolio | DJN Services LLC — Welding, Structural & Handyman',
    description:
      'Real work from real job sites across the Gulf Coast. Commercial builds, structural steel, certified welding, and handyman installations. Browse the DJN Services project portfolio.',
    url: 'https://www.djnservicesllc.com/gallery',
    type: 'website',
    images: [
      {
        url: '/images/projects/elevator-shaft-welding.jpeg',
        width: 1200,
        height: 630,
        alt: 'DJN Services LLC — elevator shaft welding project',
      },
    ],
  },
}

export default function GalleryPage() {
  return (
    <Suspense>
      <GalleryPageContent />
    </Suspense>
  )
}
