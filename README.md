# H&M Digital Landing Page

A modern, responsive Next.js landing page for H&M Digital's utility app.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Accessible components with ARIA labels
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Smooth scrolling navigation
- ✅ Interactive carousel for screenshots
- ✅ Accordion FAQ section
- ✅ Mobile-friendly navigation menu

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO meta tags
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── TrustBar.tsx        # Trust indicators
│   ├── Features.tsx        # Feature highlights
│   ├── HowItWorks.tsx      # Three-step process
│   ├── Screenshots.tsx     # Product UI carousel
│   ├── Testimonials.tsx    # User testimonials
│   ├── Benefits.tsx        # Benefits section
│   ├── Pricing.tsx         # Pricing plans
│   ├── About.tsx           # About section
│   ├── FAQ.tsx             # FAQ accordion
│   └── Footer.tsx          # Footer with links
└── public/                 # Static assets (add your images here)
```

## Customization

### Update Contact Email

Edit `components/Footer.tsx` and replace `support@hmdigital.example` with your actual email address.

### Add Real Screenshots

1. Add screenshot images to the `public/` directory
2. Update `components/Screenshots.tsx` to use your images:

```tsx
<img
  src="/screenshots/dashboard.png"
  alt="Screenshot of app dashboard"
  className="w-full h-full object-cover"
/>
```

### Update Testimonials

Replace placeholder testimonials in `components/Testimonials.tsx` with real user quotes.

### Set Pricing

Update the Pro plan pricing in `components/Pricing.tsx` with your actual prices.

### Analytics

To add analytics tracking, install your preferred analytics package (e.g., Google Analytics, Plausible) and add tracking code to `app/layout.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on:

- **Vercel** (recommended for Next.js) - Just push to GitHub and connect
- **Netlify** - Connect your repository
- **Any Node.js hosting** - Run `npm run build` and serve the `.next` folder

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Notes

- All placeholder content should be replaced with real content before launch
- Screenshot placeholders should be replaced with actual app screenshots
- Update email addresses and social media links in the Footer component
- Add actual pricing for the Pro plan

