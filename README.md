# DJN Services LLC - Business Website

A modern, responsive website for DJN Services LLC, featuring mobile welding, hotshot services, trash removal, and handyman services. Built with Next.js for optimal SEO and performance.

## Tech Stack

- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Formspree** for form handling
- **Vitest** for testing

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
NEXT_PUBLIC_FORMSPREE_BOOKING_ID=your_booking_form_id
```

Get your Formspree form IDs from [formspree.io](https://formspree.io/forms).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Testing

```bash
npm test          # Run tests in watch mode
npm run test:run  # Run tests once
npm run test:coverage  # Run tests with coverage
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` file is already configured for optimal Next.js deployment.

## Features

- ✅ Server-side rendering for optimal SEO
- ✅ Comprehensive metadata and structured data (JSON-LD)
- ✅ Responsive design for all screen sizes
- ✅ Formspree integration for contact and booking forms
- ✅ Premium gold/black color scheme
- ✅ Accessible components with Radix UI
