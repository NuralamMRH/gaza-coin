"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ethers } from "ethers";

interface PresaleStats {
  totalRaised: number;
  totalParticipants: number;
  recentTransactions: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<PresaleStats>({
    totalRaised: 0,
    totalParticipants: 0,
    recentTransactions: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    checkAuth();
    fetchStats();
  }, []);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      router.push("/admin/login");
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", session.user.id)
      .single();

    if (!profile?.is_admin) {
      router.push("/admin/login");
    }
  };

  const fetchStats = async () => {
    try {
      // Fetch presale stats from your contract or database
      const provider = new ethers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_URL || ""
      );
      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

      // Add your contract ABI and fetch stats
      // This is a placeholder - implement based on your contract
      setStats({
        totalRaised: 100, // Replace with actual data
        totalParticipants: 50, // Replace with actual data
        recentTransactions: [], // Replace with actual data
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white dark:bg-black">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Total Raised
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalRaised} BNB
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Total Participants
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalParticipants}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Presale Status
            </h3>
            <p className="text-2xl font-bold text-green-500">Active</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Transactions
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {stats.recentTransactions.length === 0 ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                    >
                      No transactions yet
                    </td>
                  </tr>
                ) : (
                  stats.recentTransactions.map((tx, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {tx.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {tx.amount} BNB
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {new Date(tx.date).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
