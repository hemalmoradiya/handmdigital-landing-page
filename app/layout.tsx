import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Free Invoice Maker & Quotation Maker App — HandM Digital Invoice',
  description: 'Free invoice maker and quotation maker app. Create professional invoices, quotations, and PDFs in minutes. Track payments, manage clients, send reminders. Works offline. No subscription required. Download free invoice maker app for Android & iOS.',
  keywords: 'free invoice maker, quotation maker app, free invoice app, invoice generator, quotation generator, invoice maker free, free quotation maker, invoice maker app, quotation app, invoice software, billing app, invoice creator, free billing software, invoice maker online, quotation maker online, invoice PDF generator, professional invoice maker, invoice management app, small business invoicing, freelancer invoice maker',
  authors: [{ name: 'handmdigital' }],
  creator: 'handmdigital',
  publisher: 'handmdigital',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://handmdigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Free Invoice Maker & Quotation Maker App — HandM Digital Invoice',
    description: 'Free invoice maker and quotation maker app. Create professional invoices, quotations, and PDFs in minutes. Track payments, manage clients, send reminders. Works offline. No subscription required.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://handmdigital.com',
    siteName: 'handmdigital',
    images: [
      {
        url: '/hero-phone.png',
        width: 1200,
        height: 630,
        alt: 'HandM Digital Invoice App - Invoice Maker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Maker & Quotation Maker App — HandM Digital Invoice',
    description: 'Free invoice maker and quotation maker app. Create professional invoices, quotations, and PDFs in minutes. Track payments, manage clients, send reminders. Works offline.',
    images: ['/hero-phone.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/handm.png',
    apple: '/handm.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}

