"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface MarketData {
  price: number;
  marketCap: number;
  volume24h: number;
  change24h: number;
}

interface ChartData {
  time: string;
  value: number;
}

export default function Market() {
  const [marketData, setMarketData] = useState<MarketData>({
    price: 0,
    marketCap: 0,
    volume24h: 0,
    change24h: 0,
  });

  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    // In a real application, this would fetch data from a cryptocurrency API
    // For now, we'll use mock data
    setMarketData({
      price: 0.00001,
      marketCap: 1000000,
      volume24h: 50000,
      change24h: 5.2,
    });

    // Generate mock chart data
    const mockChartData: ChartData[] = [];
    const now = new Date();
    for (let i = 0; i < 100; i++) {
      const time = new Date(now.getTime() - (100 - i) * 24 * 60 * 60 * 1000);
      mockChartData.push({
        time: time.toISOString().split("T")[0],
        value: 0.00001 + (Math.random() - 0.5) * 0.000002,
      });
    }
    setChartData(mockChartData);
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
            GAZA COIN Market
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-time market data and price charts for GAZA COIN
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

        {/* Price Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Price Chart
          </h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => formatNumber(value)}
                  labelFormatter={(label) =>
                    new Date(label).toLocaleDateString()
                  }
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2962FF"
                  fill="#2962FF"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trading Pairs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Trading Pairs
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Pair
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    24h Change
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    24h Volume
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    GAZA/BNB
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatNumber(marketData.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                    +{marketData.change24h}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatNumber(marketData.volume24h)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
