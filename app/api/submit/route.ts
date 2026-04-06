import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { transporter } from '@/lib/mailer'
import { businessEmail } from '@/lib/contact-info'

// ─── Types ───────────────────────────────────────────────────

interface ContactPayload {
  formType: 'contact'
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

interface BookingPayload {
  formType: 'booking'
  name: string
  email: string
  phone: string
  serviceType: string
  projectType: string
  location: string
  date: string
  time: string
  description: string
}

type FormPayload = ContactPayload | BookingPayload

// ─── Validation ──────────────────────────────────────────────

function validateContact(data: Record<string, unknown>): ContactPayload | null {
  const { name, email, subject, message } = data
  if (!name || !email || !subject || !message) return null
  return {
    formType: 'contact',
    name: String(name),
    email: String(email),
    phone: data.phone ? String(data.phone) : undefined,
    subject: String(subject),
    message: String(message),
  }
}

function validateBooking(data: Record<string, unknown>): BookingPayload | null {
  const { name, email, phone, serviceType, projectType, location, date, time, description } = data
  if (!name || !email || !phone || !serviceType || !projectType || !location || !date || !time || !description) {
    return null
  }
  return {
    formType: 'booking',
    name: String(name),
    email: String(email),
    phone: String(phone),
    serviceType: String(serviceType),
    projectType: String(projectType),
    location: String(location),
    date: String(date),
    time: String(time),
    description: String(description),
  }
}

// ─── Database insert ─────────────────────────────────────────

async function insertSubmission(payload: FormPayload) {
  if (payload.formType === 'contact') {
    await sql`
      INSERT INTO contact_submissions (name, email, phone, subject, message)
      VALUES (
        ${payload.name},
        ${payload.email},
        ${payload.phone ?? null},
        ${payload.subject},
        ${payload.message}
      )
    `
  } else {
    await sql`
      INSERT INTO booking_submissions
        (name, email, phone, service_type, project_type, location, preferred_date, preferred_time, description)
      VALUES (
        ${payload.name},
        ${payload.email},
        ${payload.phone},
        ${payload.serviceType},
        ${payload.projectType},
        ${payload.location},
        ${payload.date},
        ${payload.time},
        ${payload.description}
      )
    `
  }
}

// ─── Email notification ──────────────────────────────────────

const SUBJECT_LABELS: Record<string, string> = {
  quote: 'Request a Quote',
  general: 'General Inquiry',
  service: 'Service Question',
  emergency: 'Emergency Service',
}

function buildContactEmail(p: ContactPayload): { subject: string; html: string } {
  const subjectLabel = SUBJECT_LABELS[p.subject] || p.subject
  return {
    subject: `New Contact Form: ${subjectLabel} from ${p.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a1a; color: #d4af37; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; font-size: 20px;">New Contact Form Submission</h2>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${p.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${p.email}" style="color: #d4af37;">${p.email}</a></td>
            </tr>
            ${p.phone ? `<tr><td style="padding: 8px 0; color: #666; vertical-align: top;">Phone</td><td style="padding: 8px 0;"><a href="tel:${p.phone}" style="color: #d4af37;">${p.phone}</a></td></tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Subject</td>
              <td style="padding: 8px 0;">${subjectLabel}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 6px;">
            <p style="margin: 0 0 4px 0; color: #666; font-size: 13px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${p.message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT
          </p>
        </div>
      </div>
    `,
  }
}

function buildBookingEmail(p: BookingPayload): { subject: string; html: string } {
  return {
    subject: `New Booking Request: ${p.serviceType} — ${p.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a1a; color: #d4af37; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; font-size: 20px;">New Booking Request</h2>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
          <h3 style="margin: 0 0 12px 0; color: #333; font-size: 16px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; color: #666; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 6px 0; font-weight: 600;">${p.name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 6px 0;"><a href="mailto:${p.email}" style="color: #d4af37;">${p.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; vertical-align: top;">Phone</td>
              <td style="padding: 6px 0;"><a href="tel:${p.phone}" style="color: #d4af37;">${p.phone}</a></td>
            </tr>
          </table>

          <h3 style="margin: 0 0 12px 0; color: #333; font-size: 16px;">Service Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; color: #666; width: 140px; vertical-align: top;">Service Type</td>
              <td style="padding: 6px 0;">${p.serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; vertical-align: top;">Project Type</td>
              <td style="padding: 6px 0;">${p.projectType}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; vertical-align: top;">Location</td>
              <td style="padding: 6px 0;">${p.location}</td>
            </tr>
          </table>

          <h3 style="margin: 0 0 12px 0; color: #333; font-size: 16px;">Schedule</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; color: #666; width: 140px; vertical-align: top;">Preferred Date</td>
              <td style="padding: 6px 0; font-weight: 600;">${p.date}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; vertical-align: top;">Preferred Time</td>
              <td style="padding: 6px 0; font-weight: 600;">${p.time}</td>
            </tr>
          </table>

          <div style="padding: 16px; background: #f9f9f9; border-radius: 6px;">
            <p style="margin: 0 0 4px 0; color: #666; font-size: 13px;">Project Description</p>
            <p style="margin: 0; white-space: pre-wrap;">${p.description}</p>
          </div>

          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT
          </p>
        </div>
      </div>
    `,
  }
}

// ─── Route handler ───────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, ...data } = body

    if (!formType || !['contact', 'booking'].includes(formType)) {
      return NextResponse.json(
        { error: 'Invalid or missing formType' },
        { status: 400 }
      )
    }

    // Validate
    const payload =
      formType === 'contact'
        ? validateContact(data)
        : validateBooking(data)

    if (!payload) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert into database — this is the critical operation.
    // If this fails, we return an error to the user.
    await insertSubmission(payload)

    // Send email notification — best-effort, non-blocking.
    // A failed email never causes the form to show an error;
    // the submission is already safely stored in the database.
    const fromAddress = process.env.SMTP_FROM_EMAIL || 'notifications@djnservicesllc.com'
    const emailContent =
      payload.formType === 'contact'
        ? buildContactEmail(payload)
        : buildBookingEmail(payload)

    transporter.sendMail({
      from: `DJN Services LLC <${fromAddress}>`,
      to: businessEmail,
      subject: emailContent.subject,
      html: emailContent.html,
    }).catch((err) => {
      // Log the email failure but do not propagate — the DB write already succeeded.
      console.error('Email notification failed (submission was saved):', err)
    })

    return NextResponse.json({ result: 'success' }, { status: 200 })
  } catch (err) {
    console.error('Form submission error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
