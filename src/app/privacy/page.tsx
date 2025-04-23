import { Navbar } from "@/components/Navbar";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              At GAZA COIN, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Contact information (name, email address)</li>
                <li>Wallet addresses</li>
                <li>Transaction data</li>
                <li>Communication preferences</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Process your transactions</li>
                <li>Communicate with you about our services</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
              <li>Other parties with your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy, please
              contact us at info@rancoded.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
