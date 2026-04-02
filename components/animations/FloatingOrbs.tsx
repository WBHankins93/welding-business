'use client'

import { motion } from 'motion/react'

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#FF6A00]/20 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, -25, 30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, 15, -10, 0], y: [0, -20, 10, 0], opacity: [0.35, 0.6, 0.4, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
