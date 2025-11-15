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
  title: 'Digital Invoice — Fast, Professional Invoice & Quotation Maker by H&M Digital',
  description: 'Create invoices, quotations, PDFs, and manage clients with Digital Invoice — the simplest, fastest billing app for freelancers and businesses. Track payments, send reminders, follow up automatically, and manage your business from anywhere.',
  keywords: 'invoice maker, invoice app, quotation generator, billing software, invoice management, freelancer invoicing, small business invoicing, invoice PDF, payment tracking, invoice reminders, offline invoicing, invoice template, free invoice app',
  authors: [{ name: 'H&M Digital' }],
  creator: 'H&M Digital',
  publisher: 'H&M Digital',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://handmdigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Digital Invoice — Fast, Professional Invoice & Quotation Maker by H&M Digital',
    description: 'Create invoices, quotations, PDFs, and manage clients with Digital Invoice — the simplest, fastest billing app for freelancers and businesses.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://handmdigital.com',
    siteName: 'Digital Invoice',
    images: [
      {
        url: '/hero-phone.png',
        width: 1200,
        height: 630,
        alt: 'Digital Invoice App - Invoice Maker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Invoice — Fast, Professional Invoice & Quotation Maker by H&M Digital',
    description: 'Create invoices, quotations, PDFs, and manage clients with Digital Invoice — the simplest, fastest billing app for freelancers and businesses.',
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
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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

