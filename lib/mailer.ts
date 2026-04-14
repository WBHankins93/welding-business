import nodemailer from 'nodemailer'

const smtpHost = process.env.SMTP_HOST
const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS

if (!smtpHost || !smtpUser || !smtpPass) {
  throw new Error('Missing SMTP_HOST, SMTP_USER, or SMTP_PASS environment variables.')
}

// Nodemailer transporter — configured for Brevo SMTP relay.
// Works with any SMTP provider; just swap the host/port env vars.
export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: false, // STARTTLS on port 587
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
})
