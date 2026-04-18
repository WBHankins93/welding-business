import type { Metadata } from 'next'
import { ServicesPageContent } from '@/components/ServicesPageContent'

export const metadata: Metadata = {
  title: 'Services — Mobile Welding, Trash Removal & Handyman',
  description:
    'DJN Services LLC offers professional mobile welding (SMAW, FCAW, GMAW), trash and junk removal, hauling, and handyman services across the Gulf Coast. Solar installs, antenna work, RV repairs, structural steel, and more.',
  keywords: [
    'mobile welding services',
    'SMAW welding',
    'FCAW welding',
    'GMAW welding',
    'AWS certified welding Mississippi',
    'trash removal Gulf Coast',
    'dump services Mississippi',
    'handyman services Alabama',
    'solar panel installation',
    'antenna installation',
    'RV trailer repair',
    'elevator shaft welding',
    'structural steel contractor',
    'metal fabrication Gulf Coast',
  ],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/services',
  },
  openGraph: {
    title: 'Services — Mobile Welding, Trash Removal & Handyman | DJN Services LLC',
    description:
      'AWS certified mobile welding, trash removal, hauling, and handyman services across MS, AL, FL, and South GA. SMAW, FCAW, GMAW — on site, on time.',
    url: 'https://www.djnservicesllc.com/services',
    type: 'website',
    images: [
      {
        url: '/images/services/mobile-welding.webp',
        width: 1200,
        height: 630,
        alt: 'DJN Services — Professional mobile welding service',
      },
    ],
  },
}

type ServicesPageProps = {
  searchParams?: Promise<{
    service?: string | string[]
  }>
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const resolvedSearchParams = await searchParams
  const initialService = Array.isArray(resolvedSearchParams?.service)
    ? resolvedSearchParams?.service[0]
    : resolvedSearchParams?.service

  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Welding and Construction Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'DJN Services LLC',
      url: 'https://www.djnservicesllc.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Gulf Coast region: Mississippi, Alabama, Florida, South Georgia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'DJN Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Welding Services',
            description: 'Professional on-site welding services with SMAW, FCAW, and GMAW techniques.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trash Removal/Dump Services',
            description: 'Efficient hauling and delivery of materials up to 10,000 lbs per load.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Handyman Services',
            description: 'Comprehensive handyman services for residential and commercial properties.',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      <ServicesPageContent initialService={initialService} />
    </>
  )
}
