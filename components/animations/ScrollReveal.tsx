'use client'

import { motion, useInView } from 'motion/react'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  immediate?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  className = '',
  immediate = false,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50%' })
  const shouldAnimate = immediate || isInView

  const directionMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
  }

  const { y, x } = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={shouldAnimate ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
