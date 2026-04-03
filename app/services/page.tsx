import type { Metadata } from 'next'
import { ServicesPageContent } from '@/components/ServicesPageContent'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Mobile welding, trash removal, and handyman services. Professional on-site solutions for construction, repairs, and custom projects. Certified welders with expertise in SMAW, FCAW, and GMAW techniques.',
  keywords: ['mobile welding', 'trash removal', 'dump services', 'handyman services', 'welding techniques', 'SMAW', 'FCAW', 'GMAW'],
  alternates: {
    canonical: 'https://www.djnservicesllc.com/services',
  },
  openGraph: {
    title: 'Our Services | DJN Services LLC',
    description: 'Professional mobile welding, trash removal, and handyman services. On-site solutions for construction, repairs, and custom projects.',
    url: 'https://www.djnservicesllc.com/services',
    type: 'website',
  },
}

export default function ServicesPage() {
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
      <ServicesPageContent />
    </>
  )
}
