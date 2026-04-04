import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { primaryPhone, businessPhones, businessEmail, businessAddress, businessHoursLabel } from '@/lib/contact-info'
import '@/styles/index.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas', display: 'swap' })
const barlow = Barlow({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-barlow', display: 'swap' })
const barlowCondensed = Barlow_Condensed({ weight: ['600', '700'], subsets: ['latin'], variable: '--font-barlow-condensed', display: 'swap' })


export const metadata: Metadata = {
  metadataBase: new URL('https://www.djnservicesllc.com'),
  title: {
    default: 'DJN Services LLC | Professional Welding & Handyman Services',
    template: '%s | DJN Services LLC',
  },
  description: 'Professional mobile welding, trash removal, and handyman services. Certified welders with 20+ years of combined experience. 100% disabled veteran-owned business.',
  keywords: ['welding services', 'mobile welding', 'trash removal', 'handyman services', 'metal fabrication', 'veteran owned business'],
  authors: [{ name: 'DJN Services LLC' }],
  creator: 'DJN Services LLC',
  publisher: 'DJN Services LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.djnservicesllc.com',
    siteName: 'DJN Services LLC',
    title: 'DJN Services LLC | Professional Welding & Handyman Services',
    description: 'Professional mobile welding, trash removal, and handyman services. Certified welders with 20+ years of combined experience.',
    images: [
      {
        url: '/images/services/mobile-welding.webp',
        alt: 'DJN Services LLC mobile welding service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DJN Services LLC | Professional Welding Services',
    description: 'Professional mobile welding, trash removal, and handyman services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DJN Services LLC',
    description: 'Professional mobile welding, trash removal, and handyman services. 100% disabled veteran-owned business.',
    url: 'https://www.djnservicesllc.com',
    telephone: primaryPhone.display,
    email: businessEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessAddress.street,
      addressLocality: businessAddress.locality,
      addressRegion: businessAddress.region,
      postalCode: businessAddress.postalCode,
      addressCountry: businessAddress.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    areaServed: [
      { '@type': 'State', name: 'Mississippi' },
      { '@type': 'State', name: 'Alabama' },
      { '@type': 'State', name: 'Florida' },
      { '@type': 'Place', name: 'South Georgia' },
    ],
    serviceType: [
      'Mobile Welding Services',
      'Trash Removal/Dump Services',
      'Handyman Services',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      // Add social media links when available
      // 'https://www.facebook.com/djnservicesllc',
      // 'https://www.linkedin.com/company/djn-services-llc',
    ],
  }

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth', scrollPaddingTop: '80px' }} className={`${inter.variable} ${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="canonical" href="https://www.djnservicesllc.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6A00" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-white font-body">
        <Navigation />
        <main>{children}</main>
        <footer className="bg-[#0a0a0a] text-white mt-8 sm:mt-12 md:mt-16 border-t border-[#1a1f2e]/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="relative px-1 py-1">
                    <div
                      aria-hidden="true"
                      className="absolute inset-1 rounded-full bg-[#FF6A00]/20 blur-xl"
                    />
                    <Image
                      src="/images/brand/djn-logo.webp"
                      alt="DJN Services LLC"
                      width={360}
                      height={120}
                      className="relative h-24 w-auto brightness-110 contrast-125 saturate-110 drop-shadow-[0_0_18px_rgba(255,106,0,0.35)] sm:h-28"
                    />
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Professional welding services for all your metal fabrication needs. 100% disabled veteran-owned business.
                </p>
              </div>
              <nav aria-label="Footer navigation">
                <h3 className="font-heading font-bold uppercase tracking-wide mb-4 sm:mb-6 text-[#FF6A00] text-base sm:text-lg">Quick Links</h3>
                <div className="space-y-2 sm:space-y-3">
                  <Link href="/" className="block text-gray-400 hover:text-[#FF6A00] transition-colors duration-200 text-sm sm:text-base">
                    Home
                  </Link>
                  <Link href="/services" className="block text-gray-400 hover:text-[#FF6A00] transition-colors duration-200 text-sm sm:text-base">
                    Services
                  </Link>
                  <Link href="/about" className="block text-gray-400 hover:text-[#FF6A00] transition-colors duration-200 text-sm sm:text-base">
                    About
                  </Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-[#FF6A00] transition-colors duration-200 text-sm sm:text-base">
                    Contact
                  </Link>
                </div>
              </nav>
              <address className="not-italic">
                <h3 className="font-heading font-bold uppercase tracking-wide mb-4 sm:mb-6 text-[#FF6A00] text-base sm:text-lg">Contact</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                  {businessPhones.map((phone) => (
                    <p key={phone.label}>
                      <a href={phone.href} className="hover:text-[#FF6A00] transition-colors duration-200">
                        {phone.label}: {phone.display}
                      </a>
                    </p>
                  ))}
                  <p>
                    <a href={`mailto:${businessEmail}`} className="hover:text-[#FF6A00] transition-colors duration-200">
                      Email: {businessEmail}
                    </a>
                  </p>
                  <p>Hours: {businessHoursLabel}</p>
                </div>
              </address>
            </div>
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center">
              <p className="font-kicker text-sm tracking-[0.25em] text-[#FF6A00]">
                &copy; {new Date().getFullYear()} DJN Services LLC
              </p>
              <p className="mt-1.5 text-xs text-gray-500">
                All rights reserved. 100% Disabled Veteran-Owned Business.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
