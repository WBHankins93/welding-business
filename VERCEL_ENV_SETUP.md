# Vercel Environment Variables Setup

## Required Environment Variables

You need to set up **1 environment variable** in Vercel for the forms to work:

### `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`
- **Purpose**: Public Google Apps Script web app endpoint used by both the Contact and Booking forms
- **Where it's used**: `components/ContactForm.tsx`, `components/BookingForm.tsx`
- **Value format**: A deployed Apps Script web app URL such as `https://script.google.com/macros/s/AKfycb.../exec`

## How to Set Up in Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add the variable:
   - Click **Add New**
   - **Key**: `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`
   - **Value**: Your deployed Google Apps Script web app URL
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**
5. **Important**: After adding the variable, you need to redeploy:
   - Go to **Deployments** tab
   - Click the **⋯** menu on the latest deployment
   - Select **Redeploy**

### Option 2: Via Vercel CLI

```bash
# Add environment variable
vercel env add NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL

# Pull environment variables to local (optional)
vercel env pull .env.local
```

## Google Apps Script Setup

Create a new Apps Script project and deploy it as a web app. This example emails you each inquiry and stores it in a Google Sheet:

```javascript
const RECIPIENT_EMAIL = 'you@example.com';
const SHEET_NAME = 'Inquiries';

function doPost(e) {
  const data = Object.fromEntries(Object.entries(e.parameter));
  const sheet = getSheet_();

  sheet.appendRow([
    new Date(),
    data.formType || '',
    data.name || '',
    data.email || '',
    data.phone || '',
    data.subject || data.serviceType || '',
    data.message || data.description || '',
    data.location || '',
    data.date || '',
    data.time || '',
  ]);

  const subject = `[DJN] ${capitalize_(data.formType || 'Inquiry')} from ${data.name || 'Website visitor'}`;
  const lines = [
    `Form Type: ${data.formType || ''}`,
    `Name: ${data.name || ''}`,
    `Email: ${data.email || ''}`,
    `Phone: ${data.phone || ''}`,
    `Subject/Service: ${data.subject || data.serviceType || ''}`,
    `Project Type: ${data.projectType || ''}`,
    `Location: ${data.location || ''}`,
    `Preferred Date: ${data.date || ''}`,
    `Preferred Time: ${data.time || ''}`,
    '',
    data.message || data.description || '',
  ];

  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    subject,
    body: lines.join('\n'),
    replyTo: data.email || undefined,
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      'Submitted At',
      'Form Type',
      'Name',
      'Email',
      'Phone',
      'Subject/Service',
      'Message',
      'Location',
      'Preferred Date',
      'Preferred Time',
    ]);
  }

  return sheet;
}

function capitalize_(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
```

When deploying the web app:
- **Execute as**: Me
- **Who has access**: Anyone

## Important Notes

- **`NEXT_PUBLIC_` prefix**: The Apps Script URL is used client-side by the forms
- **Redeploy required**: After adding environment variables, you must redeploy for them to take effect
- **Testing**: Test both `/contact` and `/booking` after deployment
- **Apps Script ownership**: The Google account that owns the script controls the destination inbox and spreadsheet access

## Local Development

For local development, create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/your-script-id/exec
```

**Note**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Verification

After deployment, test the forms:
1. Go to `/contact` and submit the contact form
2. Go to `/booking` and submit the booking form
3. Check your Gmail inbox for the notification
4. Check your Google Sheet to confirm the submission was logged
