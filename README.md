<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</p>

# 🔥 DJN Services LLC — Business Website

> **A modern, responsive website** for DJN Services LLC — mobile welding, trash removal, and handyman services across the **Gulf Coast** (MS, AL, FL, South GA). Built with Next.js for SEO and performance.

---

## 🛠 Tech Stack

| Category        | Technology |
|----------------|------------|
| **Framework**  | Next.js 15 (App Router) |
| **UI**         | React 18, TypeScript |
| **Styling**    | Tailwind CSS |
| **Components** | Radix UI |
| **Forms**      | Google Apps Script + Gmail |
| **Testing**    | Vitest |

---

## 🚀 Getting Started

### 📦 Installation

```bash
npm install
```

### 🔐 Environment Variables

Copy `.env.example` to `.env.local` and fill in your Formspree IDs:

```bash
cp .env.example .env.local
```

> Forms post to a Google Apps Script web app, which can email you and log inquiries to a Google Sheet.

### 💻 Development

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser.

### 📤 Build

```bash
npm run build
```

### 🌐 Production

```bash
npm start
```

### 🧪 Testing

| Command | Description |
|---------|-------------|
| `npm test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run with coverage report |

---

## ☁️ Deployment

This project is set up for **Vercel**:

1. Push your code to GitHub
2. Import the repo in Vercel
3. Add the environment variable in the Vercel dashboard
4. Deploy!

The `vercel.json` file is already configured for Next.js.

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🎯 **SEO** | Server-side rendering and comprehensive metadata (JSON-LD) |
| 📱 **Responsive** | Works on all screen sizes |
| 📬 **Forms** | Contact and booking forms routed through Google Apps Script |
| 🎨 **Design** | Gold/black color scheme |
| ♿ **Accessible** | Radix UI components |

---

<p align="center">
  <sub>DJN Services LLC — 100% disabled veteran-owned</sub>
</p>
