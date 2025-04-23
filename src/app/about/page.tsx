"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";

interface MarketData {
  price: number;
  marketCap: number;
  volume24h: number;
  change24h: number;
}

export default function About() {
  const [marketData, setMarketData] = useState<MarketData>({
    price: 0,
    marketCap: 0,
    volume24h: 0,
    change24h: 0,
  });

  useEffect(() => {
    // In a real application, this would fetch data from a cryptocurrency API
    // For now, we'll use mock data
    setMarketData({
      price: 0.00001,
      marketCap: 1000000,
      volume24h: 50000,
      change24h: 5.2,
    });
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: num < 0.01 ? 8 : 2,
      maximumFractionDigits: num < 0.01 ? 8 : 2,
    }).format(num);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About GAZA COIN
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A cryptocurrency with a purpose, built on transparency, community,
            and humanitarian values.
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Price
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatNumber(marketData.price)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Market Cap
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatNumber(marketData.marketCap)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              24h Volume
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatNumber(marketData.volume24h)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              24h Change
            </h3>
            <p
              className={`text-2xl font-bold ${
                marketData.change24h >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {marketData.change24h > 0 ? "+" : ""}
              {marketData.change24h}%
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              GAZA COIN represents the hope of a people who refuse to be
              silenced. Built on the belief that even in the darkest times,
              unity, digital freedom, and community can spark change. Every coin
              is a symbol of resilience, a cry for justice, and a stand against
              oppression.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              To create a decentralized financial ecosystem that empowers
              communities, supports humanitarian efforts, and promotes
              transparency. We envision a future where cryptocurrency becomes a
              tool for positive social change.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-orange-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Decentralized Hope
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A blockchain-powered tribute to real-world struggle and
                resilience.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Community-Owned
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                100% transparent operations with no hidden fees or rug-pulls.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Charity-Linked
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Supporting humanitarian efforts through verified channels.
              </p>
            </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Tokenomics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Token Distribution
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Presale: 40%</li>
                <li>• Liquidity Pool: 30%</li>
                <li>• Development: 15%</li>
                <li>• Marketing: 10%</li>
                <li>• Team: 5%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Token Details
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Total Supply: 1,000,000,000 GAZA</li>
                <li>• Network: BNB Chain (BSC)</li>
                <li>• Presale Rate: 100,000 GAZA/BNB</li>
                <li>• Listing Rate: 90,000 GAZA/BNB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
