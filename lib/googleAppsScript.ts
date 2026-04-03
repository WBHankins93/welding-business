'use client'

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL

type FormType = 'contact' | 'booking'

export async function submitInquiryToGoogle(formData: FormData, formType: FormType) {
  if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
    throw new Error('Google Apps Script endpoint is not configured.')
  }

  const payload = new URLSearchParams()

  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      payload.append(key, value)
    }
  }

  payload.append('formType', formType)
  payload.append('submittedAt', new Date().toISOString())

  const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: 'POST',
    body: payload,
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Google submission failed with status ${response.status}`)
  }
}
