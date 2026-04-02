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

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-0 text-white sm:px-5 lg:px-8">
      <nav className="glass-shell mx-auto mt-3 max-w-5xl rounded-[30px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4 sm:min-h-24">
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
                className="relative h-16 w-auto brightness-110 contrast-125 saturate-110 drop-shadow-[0_0_18px_rgba(255,106,0,0.4)] sm:h-20 lg:h-24"
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
                    ? 'bg-white/12 text-[#FF6A00] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                    : 'text-gray-300 hover:bg-white/8 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full border border-white/12 bg-white/6 p-2 text-white transition-colors hover:text-[#FF6A00]"
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
                  <a
                    href="tel:5551234567"
                    onClick={() => setMobileMenuOpen(false)}
                    className="glass-button-primary flex w-full text-center"
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
