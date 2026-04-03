import { describe, expect, it } from 'vitest'
import { businessAddress, businessEmail, businessHoursLabel, businessPhones, primaryPhone } from '@/lib/contact-info'

describe('contact info constants', () => {
  it('exposes two business phone numbers', () => {
    expect(businessPhones).toHaveLength(2)
    expect(primaryPhone.display).toBe('(256) 665-6754')
    expect(businessPhones[1].display).toBe('(256) 929-9234')
  })

  it('exposes the business email and address', () => {
    expect(businessEmail).toBe('djnservicesllc@gmail.com')
    expect(businessAddress.street).toBe('12127 Gateway 16')
    expect(businessAddress.cityStateZip).toBe('Elberta, AL 36530')
    expect(businessHoursLabel).toBe('Mon-Sat, 8AM-6PM')
  })
})
