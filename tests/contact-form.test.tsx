import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ContactForm } from '@/components/ContactForm'

vi.mock('motion/react', async () => {
  const React = await import('react')
  const Mock = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  ))

  return {
    motion: new Proxy(
      {},
      {
        get: () => Mock,
      }
    ),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  }
})

describe('ContactForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('shows success state after successful submit', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))

    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'Test User' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText('Subject *'), { target: { value: 'quote' } })
    fireEvent.change(screen.getByLabelText('Message *'), { target: { value: 'Need a quote' } })

    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => {
      expect(screen.getByText('Thank you for your message!')).toBeInTheDocument()
    })
  })

  it('shows error message when submit fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))

    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'Test User' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText('Subject *'), { target: { value: 'quote' } })
    fireEvent.change(screen.getByLabelText('Message *'), { target: { value: 'Need a quote' } })

    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => {
      expect(screen.getByText('Something went wrong. Please try again or call us directly.')).toBeInTheDocument()
    })
  })
})
