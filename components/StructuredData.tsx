'use client'

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://handmdigital.com'

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "HandM Digital Invoice - Free Invoice Maker & Quotation Maker",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Invoice Software",
    "operatingSystem": "Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Free invoice maker and quotation maker app. Create professional invoices, quotations, and PDFs in minutes. Track payments, manage clients, send reminders. Works offline. No subscription required. Download free invoice maker app for Android & iOS.",
    "url": baseUrl,
    "downloadUrl": [
      "https://play.google.com/store/apps/details?id=com.digiinvoicemaker.app",
      "https://apps.apple.com/us/app/invoice-quote-maker/id6758097896"
    ],
    "screenshot": `${baseUrl}/hero-phone.png`,
    "author": {
      "@type": "Organization",
      "name": "handmdigital",
      "email": "digitalhandm@gmail.com"
    },
    "featureList": [
      "Free invoice maker",
      "Quotation maker app",
      "Invoice creation and management",
      "Quotation to invoice conversion",
      "Professional PDF generation",
      "PDF invoice templates",
      "Client management system",
      "Payment tracking with partial payments",
      "Payment history and records",
      "Reminder notifications",
      "Offline support",
      "Multi-currency support",
      "Multiple business profiles",
      "Dashboard and revenue analytics",
      "Item master and product catalog",
      "Advanced search and filters",
      "Auto-generated invoice numbers",
      "Real-time calculations",
      "Tax management",
      "Discount support",
      "Custom branding with logo",
      "Signature support on PDFs",
      "Google Drive integration",
      "Data backup and restore"
    ],
    "keywords": "free invoice maker, quotation maker app, free invoice app, invoice generator, quotation generator, invoice maker free, free quotation maker, invoice maker app, quotation app, invoice software, billing app, invoice creator, free billing software, invoice maker online, quotation maker online, invoice PDF generator, professional invoice maker, invoice management app, small business invoicing, freelancer invoice maker"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "handmdigital",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "digitalhandm@gmail.com",
      "contactType": "Customer Service"
    },
    "sameAs": []
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this a free invoice maker app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! HandM Digital Invoice is completely free. All core features including invoice creation, quotation maker, PDF generation, payment tracking, and client management are free forever. No subscription required, no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "How do I create an invoice with this free invoice maker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Creating an invoice is simple: 1) Set up your business profile (logo, details, tax ID), 2) Add client information, 3) Add line items with quantities and rates, 4) Apply taxes and discounts if needed, 5) Generate and share the PDF. The app calculates totals automatically."
        }
      },
      {
        "@type": "Question",
        "name": "Can I create quotations with this quotation maker app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our quotation maker lets you create professional quotations with versioning, expiry dates, and follow-up reminders. You can convert accepted quotations to invoices with one tap. Track quotation status (Draft, Sent, Accepted, Rejected, Expired, Converted)."
        }
      },
      {
        "@type": "Question",
        "name": "Does the free invoice maker work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! This is an offline-first invoice maker app. You can create invoices, quotations, manage clients, track payments, and receive reminders completely offline. All data is stored locally on your device."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize PDF invoices with my logo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Add your business logo, company name, address, contact details, tax ID, and customize invoice templates. The PDF generator creates professional, branded invoices that you can preview before downloading or sharing."
        }
      },
      {
        "@type": "Question",
        "name": "Does this invoice maker support multiple currencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our free invoice maker supports multiple currencies. You can select different currencies for each invoice, customize currency symbols, and create invoices for international clients. Perfect for freelancers and businesses working globally."
        }
      },
      {
        "@type": "Question",
        "name": "Can I track payments with this invoice app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Track full and partial payments per invoice. Record payment history with dates and notes. The app automatically updates invoice status (Paid, Pending, Overdue). View detailed payment records in the payment history section."
        }
      },
      {
        "@type": "Question",
        "name": "How do I manage multiple businesses with this invoice maker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can create and manage multiple business profiles from one app. Each profile has its own logo, business information, tax ID, and invoice settings. Switch between businesses easily - perfect for freelancers with multiple ventures."
        }
      },
      {
        "@type": "Question",
        "name": "Is my invoice data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All data is stored locally on your device with secure SQLite database. You have full control over your data. Optional cloud backup and restore available. Google Drive integration for additional backup. Export and import capabilities for data portability."
        }
      },
      {
        "@type": "Question",
        "name": "What devices support this free invoice maker app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently available for Android and iOS. The app works on phones and tablets. Web version coming soon. Cross-platform support ensures you can access your invoices from any device."
        }
      },
      {
        "@type": "Question",
        "name": "Can I convert quotations to invoices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our quotation maker allows you to convert accepted quotations to invoices instantly with one tap. All quotation details, line items, taxes, and discounts are automatically transferred to the new invoice."
        }
      },
      {
        "@type": "Question",
        "name": "Does this invoice maker send payment reminders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Get smart notifications for pending invoices, due dates, overdue invoices, and quotation follow-ups. Reminders work offline and send alerts even when the app is closed. Never miss a payment again."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

