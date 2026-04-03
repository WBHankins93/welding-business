'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface HoverLiftProps {
  children: ReactNode
  className?: string
}

export function HoverLift({ children, className = '' }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
