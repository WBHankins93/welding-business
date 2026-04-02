'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const navigation = [
    { name: 'DJN Services LLC', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Complete A Form', href: '/contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className={`sticky top-0 z-50 ${isHome ? 'px-3 pt-0 text-white sm:px-5 lg:px-8' : 'border-b border-gray-200 bg-white/95 text-[#1a1f2e] backdrop-blur-sm'}`}>
      <nav className={`${isHome ? 'glass-shell mx-auto mt-3 max-w-5xl rounded-[30px] px-4 sm:px-6 lg:px-8' : 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className={`flex items-center justify-between gap-4 ${isHome ? 'min-h-20 sm:min-h-24' : 'min-h-14 sm:min-h-16'}`}>
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
                className={`relative w-auto brightness-110 contrast-125 saturate-110 ${isHome ? 'h-16 drop-shadow-[0_0_18px_rgba(255,106,0,0.4)] sm:h-20 lg:h-24' : 'h-10 sm:h-11'}`}
              />
            </div>
            <span className="sr-only">DJN Services LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.16em] transition-all duration-200 ${
                  isActive(item.href)
                    ? isHome
                      ? 'bg-white/12 text-[#FF6A00] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                      : 'bg-[#1a1f2e]/8 text-[#FF6A00]'
                    : isHome
                      ? 'text-gray-300 hover:bg-white/8 hover:text-white'
                      : 'text-[#4a5568] hover:bg-[#1a1f2e]/6 hover:text-[#1a1f2e]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden rounded-full p-2 transition-colors hover:text-[#FF6A00] ${isHome ? 'border border-white/12 bg-white/6 text-white' : 'border border-black/10 bg-white text-[#1a1f2e]'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className={`md:hidden overflow-hidden ${isHome ? 'border-t border-white/10' : 'border-t border-black/10'}`}
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
                          ? isHome
                            ? 'glass-button-primary text-center'
                            : 'bg-[#1a1f2e] text-white text-center'
                          : isHome
                            ? 'glass-panel-dark text-gray-200 hover:text-[#FF6A00]'
                            : 'bg-gray-100 text-[#1a1f2e] hover:text-[#FF6A00]'
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
                  <a
                    href="tel:5551234567"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex w-full justify-center rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] ${isHome ? 'glass-button-primary' : 'bg-[#1a1f2e] text-white'}`}
                  >
                    Call Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
