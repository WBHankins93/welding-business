import type { Metadata } from 'next'
import Link from 'next/link'
import { Menu, X, Flame } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import '@/styles/index.css'

export const metadata: Metadata = {
  title: 'DJN Services LLC | Professional Welding, Hotshot & Handyman Services',
  description: 'Professional mobile welding, hotshot services, trash removal, and handyman services. Certified welders with 20+ years of combined experience.',
  keywords: 'welding services, mobile welding, hotshot services, trash removal, handyman services, metal fabrication',
  openGraph: {
    title: 'DJN Services LLC',
    description: 'Professional welding, hotshot, and handyman services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
        <footer className="bg-[#0a0a0a] text-white mt-8 sm:mt-12 md:mt-16 border-t border-[#1a1f2e]/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="bg-[#d4af37] p-2 sm:p-2.5 rounded-lg shadow-lg">
                    <Flame className="size-5 sm:size-6 text-[#0a0a0a]" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold">DJN Services LLC</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Professional welding services for all your metal fabrication needs.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4 sm:mb-6 text-[#d4af37] text-base sm:text-lg">Quick Links</h3>
                <div className="space-y-2 sm:space-y-3">
                  <Link href="/" className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-200 text-sm sm:text-base">
                    Home
                  </Link>
                  <Link href="/services" className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-200 text-sm sm:text-base">
                    Services
                  </Link>
                  <Link href="/about" className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-200 text-sm sm:text-base">
                    About
                  </Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-200 text-sm sm:text-base">
                    Contact
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 sm:mb-6 text-[#d4af37] text-base sm:text-lg">Contact</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                  <p className="hover:text-[#d4af37] transition-colors duration-200">Phone: (555) 123-4567</p>
                  <p className="hover:text-[#d4af37] transition-colors duration-200">Email: info@djnservicesllc.com</p>
                  <p>Hours: Mon-Fri, 8AM-6PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#1a1f2e]/30 text-center text-gray-500 text-sm sm:text-base">
              <p>&copy; {new Date().getFullYear()} DJN Services LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
