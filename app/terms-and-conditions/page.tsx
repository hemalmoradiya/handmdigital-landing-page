import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions — HandM Digital Invoice by handmdigital',
  description: 'Terms and Conditions for HandM Digital Invoice — Read our terms of service and usage policies.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Terms and Conditions</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8">Effective Date: December 20, 2025</p>

          <div className="space-y-8 text-black">
            <p className="text-base sm:text-lg leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the HandM Digital Invoice mobile application ("App"). By installing or using the App, you agree to be bound by these Terms. If you do not agree, please discontinue use of the App.
            </p>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">1. About HandM Digital Invoice</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                HandM Digital Invoice is a mobile application designed to help users create, manage, and store invoices directly on their device. The App operates primarily with local data storage and may display advertisements and use analytics services to improve functionality and user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">2. Eligibility</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">To use the App, you confirm that:</p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                <li>You are at least 18 years old or the legal age of majority in your jurisdiction.</li>
                <li>You will use the App in compliance with all applicable laws and regulations.</li>
                <li>If you are using the App on behalf of a business or organization, you represent that you have the authority to accept these Terms on its behalf.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">3. Local Data Storage and User Responsibility</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                All invoice data, client information, and business details entered into the App are stored locally on your device. HandM Digital Invoice does not access, upload, or store this data on its own servers.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                <li>Creating and maintaining backups of your data</li>
                <li>Securing your device and controlling access to the App</li>
                <li>Ensuring that invoices and records comply with local tax, accounting, and legal requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">4. Third-Party Services</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                The App may integrate third-party services, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Google AdMob (advertising)</li>
                <li>Firebase Analytics (aggregated and anonymized usage analytics)</li>
                <li>Firebase Remote Config (feature and configuration updates)</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                These services may collect limited device or usage information in accordance with their own privacy policies. For more information, please review our <Link href="/privacy-policy" className="text-black underline hover:no-underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">5. Acceptable Use</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Reverse engineer, modify, or tamper with the App</li>
                <li>Attempt to bypass security or access restricted features</li>
                <li>Use the App for unlawful, fraudulent, or harmful purposes</li>
                <li>Introduce malicious code or misuse network resources</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                Violation of these rules may result in suspension or termination of your access to the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">6. Intellectual Property</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                All intellectual property rights in the App, including its software, design, branding, and content, are owned by HandM Digital Invoice or its licensors.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                You are granted a limited, non-exclusive, non-transferable license to use the App for personal or business invoicing purposes only. You may not copy, distribute, sell, or resell the App or any part of it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">7. Backup and Data Loss</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                HandM Digital Invoice does not provide cloud storage or data recovery services. All data remains under your control and is stored on your device unless you choose to create backups.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                The App may offer local backup and Google Drive backup features as optional tools to help you preserve your data. However, these backup features are provided for convenience only and may fail due to device issues, storage limitations, connectivity problems, or third-party service errors.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Even if a local backup or Google Drive backup is enabled or attempted, HandM Digital Invoice does not guarantee successful backup or restoration. You remain solely responsible for verifying, maintaining, and safeguarding your backups.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">To the maximum extent permitted by law, HandM Digital Invoice is not responsible for any data loss, including loss resulting from:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Backup failures (local or Google Drive)</li>
                <li>Device damage, reset, or replacement</li>
                <li>App uninstallation or reinstallation</li>
                <li>Third-party service interruptions or errors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">8. App Updates</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We may release updates to enhance security, performance, or features. Certain updates may be required to continue using the App properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">9. No Warranty</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">The App is provided on an "as is" and "as available" basis. We do not guarantee that:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>The App will operate without interruptions or errors</li>
                <li>The App will meet your specific business, accounting, or compliance needs</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                Your use of the App is at your own discretion and risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">10. Limitation of Liability</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">To the maximum extent permitted by applicable law, HandM Digital Invoice shall not be liable for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Loss of data</li>
                <li>Loss of profits, business opportunities, or revenue</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                If liability cannot be excluded, our total liability shall not exceed the amount you paid for the App, if any.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">11. Indemnification</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                You agree to indemnify and hold harmless HandM Digital Invoice from any claims, damages, or expenses arising from your misuse of the App or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">12. Termination</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We may suspend or terminate access to the App if you breach these Terms or misuse the App. Upon termination, you must discontinue use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">13. Governing Law</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">14. Changes to These Terms</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We may update these Terms periodically. Updated versions will be made available within the App. Continued use of the App constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">15. Contact Information</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                If you have questions or concerns regarding these Terms, you may contact us at:
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                📧 <a href="mailto:digitalhandm@gmail.com" className="text-black underline hover:no-underline">digitalhandm@gmail.com</a>
              </p>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                <strong>Publisher:</strong> HandM Digital Invoice (Gujarat, India)
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

