"use client";

import { useState } from "react";
import { useWeb3 } from "@/lib/web3/Web3Context";
import { Navbar } from "@/components/Navbar";

const PAYMENT_METHODS = [
  {
    id: "crypto",
    name: "Cryptocurrency",
    description: "Donate using BNB or other cryptocurrencies",
    icon: "💎",
  },
  {
    id: "card",
    name: "Credit/Debit Card",
    description: "Secure payment via 2Checkout",
    icon: "💳",
  },
  {
    id: "googlepay",
    name: "Google Pay",
    description: "Quick and easy payment with Google Pay",
    icon: "🔄",
  },
  {
    id: "applepay",
    name: "Apple Pay",
    description: "Seamless payment with Apple Pay",
    icon: "🍎",
  },
  {
    id: "bkash",
    name: "bKash",
    description: "Mobile payment for Bangladesh users only",
    icon: "📱",
  },
];

export default function Donation() {
  const { account, connectWallet, isConnecting } = useWeb3();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !selectedMethod) return;

    try {
      setIsProcessing(true);
      // Here you would implement the actual payment processing logic
      // For now, we'll just show an alert
      alert(`Processing ${amount} donation via ${selectedMethod}`);
    } catch (error) {
      console.error("Error:", error);
      alert("Donation failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Make a Donation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your donation helps support humanitarian efforts. Choose your
            preferred payment method below.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleDonation} className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Donation Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter amount"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Payment Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PAYMENT_METHODS.map((method) => (
                  <div
                    key={method.id}
                    className={`relative rounded-lg border p-4 cursor-pointer transition-colors ${
                      selectedMethod === method.id
                        ? "border-orange-500 bg-orange-50 dark:bg-gray-700"
                        : "border-gray-300 dark:border-gray-600 hover:border-orange-500"
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{method.icon}</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                          {method.name}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedMethod === "crypto" && !account && (
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Connect your wallet to donate with cryptocurrency
                </p>
                <button
                  type="button"
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold disabled:opacity-50"
                >
                  {isConnecting ? "Connecting..." : "Connect Wallet"}
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={
                isProcessing ||
                !amount ||
                !selectedMethod ||
                (selectedMethod === "crypto" && !account)
              }
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Make Donation"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
