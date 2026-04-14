'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Get A Quote', href: '/booking' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className={`${isHome ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${isHome ? `px-3 sm:px-5 lg:px-8 ${scrolled ? 'py-1' : 'py-2'}` : 'py-1 px-3 sm:px-5 lg:px-8'}`}>
      <nav className={`mx-auto rounded-2xl px-4 sm:px-6 lg:px-8 transition-all duration-300 glass-shell ${isHome ? `max-w-5xl ${scrolled ? 'shadow-lg' : ''}` : 'max-w-7xl shadow-lg'}`}>
        <div className={`flex items-center justify-between gap-4 ${isHome ? 'min-h-20 sm:min-h-24' : 'min-h-16 sm:min-h-20'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative px-1 py-1 transition-transform duration-200 group-hover:scale-[1.03]">
              <div
                aria-hidden="true"
                className="absolute inset-1 rounded-full bg-[#FF6A00]/20 blur-xl transition-opacity duration-200 group-hover:opacity-100"
              />
              <Image
                src="/images/brand/djn-logo.webp"
                alt="DJN Services LLC"
                width={340}
                height={114}
                priority
                className={`relative w-auto brightness-110 contrast-125 saturate-110 drop-shadow-[0_0_18px_rgba(255,106,0,0.4)] ${isHome ? 'h-20 sm:h-24 lg:h-28' : 'h-16 sm:h-20'}`}
              />
            </div>
            <span className="sr-only">DJN Services LLC</span>
          </Link>

          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 font-kicker text-sm font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-white/12 text-[#FF6A00] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                    : 'text-gray-300 hover:bg-white/8 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full p-3 transition-all duration-200 bg-[#FF6A00] text-white shadow-[0_0_24px_rgba(255,106,0,0.45)] hover:scale-105"
              aria-label="Contact DJN Services"
            >
              <Phone className="size-6 sm:size-7" />
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full p-3 transition-all duration-200 bg-[#FF6A00] text-white shadow-[0_0_18px_rgba(255,106,0,0.42)]"
              aria-label="Contact DJN Services"
            >
              <Phone className="size-5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full p-2 transition-colors border border-white/12 bg-white/6 text-white hover:text-[#FF6A00]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-2xl px-4 py-3 transition-all duration-200 ${
                        isActive(item.href)
                          ? 'glass-button-primary text-center'
                          : 'glass-panel-dark text-gray-200 hover:text-[#FF6A00]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full justify-center rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] glass-button-primary"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
