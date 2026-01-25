import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — HandM Digital Invoice by handmdigital',
  description: 'Privacy Policy for HandM Digital Invoice — Learn how we handle your data with a local-first approach to privacy and security.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Privacy Policy</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8">Effective Date: December 20, 2025</p>

          <div className="space-y-8 text-black">
            <p className="text-base sm:text-lg leading-relaxed">
              HandM Digital Invoice is a local-first invoice management application designed with a strong focus on user privacy and data security. This Privacy Policy explains how information is handled when you use the HandM Digital Invoice mobile application ("App").
            </p>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">1. Contact Information</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                <strong>Publisher:</strong> HandM Digital Invoice (Gujarat, India)<br />
                <strong>Email:</strong> <a href="mailto:digitalhandm@gmail.com" className="text-black underline hover:no-underline">digitalhandm@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">2. Information We Handle</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">2.1 Data Stored Locally on Your Device</h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                All business, client, and invoice data entered into the App is stored locally on your device using on-device databases. We do not collect, upload, transmit, or store this data on our servers.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">Local data may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Business and bank details</li>
                <li>Client contact information</li>
                <li>Invoice details, line items, and totals</li>
                <li>App preferences and configuration settings</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                This information remains on your device unless you choose to export, share, or back it up using features provided by the App or your device.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">2.2 Analytics Information</h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                We use Firebase Analytics to understand general app usage and improve functionality and performance. Analytics data is aggregated and anonymized.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">Analytics may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Feature usage patterns</li>
                <li>Performance metrics and error logs</li>
                <li>Basic interaction events</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                Analytics data does not include invoice content, business names, client details, financial values, or any personally identifiable business information.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">2.3 Advertising Information</h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                We use Google Mobile Ads (AdMob) to display advertisements and support ongoing development of the App.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">Ad-related data may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Device information for ad delivery</li>
                <li>Ad impressions and interaction data</li>
                <li>Approximate location (country or region level only)</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                Ad personalization preferences can be managed through your device's privacy and advertising settings.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-black">2.4 Remote Configuration</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                We use Firebase Remote Config to manage app behavior, feature availability, and configuration updates without requiring a full app update. No invoice, client, or business data is shared or transmitted through this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">3. How Information Is Used</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">Information is used solely for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Local data enables invoicing and app functionality</li>
                <li>Analytics help improve performance and user experience</li>
                <li>Advertising data supports ad delivery and measurement</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                We do not sell, rent, or trade your data, and we do not share your local business information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">4. Data Storage and Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                <li>All invoice and business data remains stored on your device</li>
                <li>Local data is protected using your device's security mechanisms (such as encryption and access controls)</li>
                <li>You are responsible for securing your device and managing access</li>
                <li>No invoice or client data is transmitted over external networks by the App</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">5. Backups and Data Control</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                The App may offer local backup and Google Drive backup features as optional tools for data preservation. These backups are created and stored under your control.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                While these features are provided for convenience, backup and restore operations may fail due to device issues, storage limitations, network conditions, or third-party service errors. We do not guarantee successful backup or recovery.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">You remain solely responsible for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>Enabling backups</li>
                <li>Verifying backup integrity</li>
                <li>Managing stored backup files</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                Since we do not store your data, we cannot recover lost or deleted information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">6. Your Controls and Choices</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">You can:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg">
                <li>View, edit, delete, or export your local data at any time</li>
                <li>Disable analytics collection through device or app settings (where supported)</li>
                <li>Manage ad personalization through device privacy settings</li>
                <li>Permanently remove all local data by uninstalling the App</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                Once deleted, data cannot be restored by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">7. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                <li>Local data remains on your device until you delete it</li>
                <li>Analytics data is retained by Google Firebase according to their retention policies and may be deleted upon request through applicable Google controls</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">8. Children's Privacy</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                The App is not intended for children under the age of 13 and does not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">9. International Users</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Analytics and advertising data may be processed by Google services outside India, subject to Google's privacy and data protection standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">10. Policy Updates</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We may update this Privacy Policy periodically. Updated versions will be available within the App along with a revised effective date. Continued use of the App indicates acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-black">11. Contact Us</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                If you have any questions or privacy-related concerns, please contact:
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                📧 <a href="mailto:digitalhandm@gmail.com" className="text-black underline hover:no-underline">digitalhandm@gmail.com</a>
              </p>
            </section>

            <section className="mt-12 pt-8 border-t-2 border-black">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Key Points Summary</h2>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                <li>Your invoice and business data stays on your device</li>
                <li>We do not collect or store your private business information</li>
                <li>Analytics data is anonymized and limited to app improvement</li>
                <li>Ads support the App, with user control over personalization</li>
                <li>You retain full ownership and control of your data</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed mt-4">
                <strong>Publisher:</strong> HandM Digital Invoice<br />
                <strong>Location:</strong> Gujarat, India
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

