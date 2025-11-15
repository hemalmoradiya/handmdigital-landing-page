'use client'

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://handmdigital.com'

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Digital Invoice",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10000"
    },
    "description": "Create invoices, quotations, PDFs, and manage clients with Digital Invoice — the simplest, fastest billing app for freelancers and businesses.",
    "url": baseUrl,
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.digiinvoicemaker.app",
    "author": {
      "@type": "Organization",
      "name": "H&M Digital",
      "email": "digitalhandm@gmail.com"
    },
    "featureList": [
      "Invoice creation and management",
      "Quotation generator",
      "PDF invoice templates",
      "Client management",
      "Payment tracking",
      "Reminder notifications",
      "Offline support",
      "Dashboard analytics"
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "H&M Digital",
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
        "name": "Is Digital Invoice free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Core features are free forever with an optional Pro upgrade coming soon."
        }
      },
      {
        "@type": "Question",
        "name": "Does the app work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. You can create invoices, manage clients, and receive reminders offline."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize PDF invoices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Add your logo, business details, tax ID, and choose templates."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All data is stored locally on your device with backup options available."
        }
      },
      {
        "@type": "Question",
        "name": "What devices are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Android and iOS versions are available. Web version coming soon."
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

