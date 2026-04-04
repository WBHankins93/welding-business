export const businessPhones = [
  { label: 'Jared', display: '(256) 665-6754', href: 'tel:2566656754' },
  { label: 'David', display: '(256) 929-9234', href: 'tel:2569299234' },
] as const

export const primaryPhone = businessPhones[0]

export const businessEmail = 'djnservicesllc@gmail.com'

export const businessAddress = {
  street: '12127 Gateway 16',
  cityStateZip: 'Elberta, AL 36530',
  locality: 'Elberta',
  region: 'AL',
  postalCode: '36530',
  country: 'US',
} as const

export const businessHoursLabel = 'Mon-Sat, 8AM-6PM'
