# Vercel Environment Variables Setup

## Required Environment Variables

You need to set up **2 environment variables** in Vercel for the forms to work:

### 1. `NEXT_PUBLIC_FORMSPREE_CONTACT_ID`
- **Purpose**: Formspree form ID for the Contact page form
- **Where it's used**: `components/ContactForm.tsx`
- **How to get it**:
  1. Go to [formspree.io](https://formspree.io) and sign up/login
  2. Create a new form for "Contact" or "General Inquiry"
  3. Copy the form ID from the form endpoint (e.g., if the endpoint is `https://formspree.io/f/xYz123Ab`, the ID is `xYz123Ab`)

### 2. `NEXT_PUBLIC_FORMSPREE_BOOKING_ID`
- **Purpose**: Formspree form ID for the Booking page form
- **Where it's used**: `components/BookingForm.tsx`
- **How to get it**:
  1. Go to [formspree.io](https://formspree.io)
  2. Create a new form for "Booking" or "Service Request"
  3. Copy the form ID from the form endpoint

## How to Set Up in Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - Click **Add New**
   - **Key**: `NEXT_PUBLIC_FORMSPREE_CONTACT_ID`
   - **Value**: Your Formspree contact form ID (e.g., `xYz123Ab`)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**
5. Repeat for `NEXT_PUBLIC_FORMSPREE_BOOKING_ID`
6. **Important**: After adding variables, you need to redeploy:
   - Go to **Deployments** tab
   - Click the **⋯** menu on the latest deployment
   - Select **Redeploy**

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Add environment variables
vercel env add NEXT_PUBLIC_FORMSPREE_CONTACT_ID
vercel env add NEXT_PUBLIC_FORMSPREE_BOOKING_ID

# Pull environment variables to local (optional)
vercel env pull .env.local
```

## Important Notes

- **`NEXT_PUBLIC_` prefix**: These variables are exposed to the browser, which is necessary for client-side form submission
- **Redeploy required**: After adding environment variables, you must redeploy for them to take effect
- **Formspree setup**: Make sure your Formspree forms are configured to accept submissions from your domain
- **Testing**: Test both forms after deployment to ensure they're working correctly

## Local Development

For local development, create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id_here
NEXT_PUBLIC_FORMSPREE_BOOKING_ID=your_booking_form_id_here
```

**Note**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Verification

After deployment, test the forms:
1. Go to `/contact` and submit the contact form
2. Go to `/booking` and submit the booking form
3. Check your Formspree dashboard to confirm submissions are being received
