import { describe, expect, it } from 'vitest'
import sitemap from '@/app/sitemap'

describe('sitemap route', () => {
  it('includes expected primary pages', () => {
    const entries = sitemap()
    const urls = entries.map((entry) => entry.url)

    expect(urls).toContain('https://www.djnservicesllc.com')
    expect(urls).toContain('https://www.djnservicesllc.com/services')
    expect(urls).toContain('https://www.djnservicesllc.com/about')
    expect(urls).toContain('https://www.djnservicesllc.com/contact')
    expect(urls).toContain('https://www.djnservicesllc.com/booking')
  })
})
