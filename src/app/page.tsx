import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center pt-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              GAZA COIN
              <span className="block text-orange-500">
                The Voice of the Voiceless
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Born from the rubble, GAZA COIN represents the hope of a people
              who refuse to be silenced. Join a movement where crypto becomes
              change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/presale"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Join Presale
              </Link>
              <Link
                href="/donation"
                className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose GAZA COIN?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Decentralized Hope",
                description:
                  "A blockchain-powered tribute to real-world struggle.",
                icon: "🌐",
              },
              {
                title: "Community-Owned",
                description: "100% transparent, no hidden taxes, no rug-pulls.",
                icon: "💸",
              },
              {
                title: "Charity-Linked",
                description:
                  "Portion of liquidity goes to verified humanitarian efforts.",
                icon: "🤝",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-orange-50 dark:bg-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Token Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">
                  Contract Address
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 break-all">
                  0xE71eDA5F3B9674F97eBd146969c4FdF885d4B0a9
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">
                  Network
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  BNB Chain (BSC)
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">
                  Total Supply
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  1,000,000,000 GAZA
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">
                  Presale Rate
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  100,000 GAZA/BNB
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
