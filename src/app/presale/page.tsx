"use client";

import { useState } from "react";
import { useWeb3 } from "@/lib/web3/Web3Context";
import { Navbar } from "@/components/Navbar";
import { ethers } from "ethers";

export default function Presale() {
  const { account, connectWallet, isConnecting, provider, signer } = useWeb3();
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePresale = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !account || !provider || !signer) return;

    try {
      setIsProcessing(true);
      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
      const presaleRate = 100000; // 100,000 GAZA per BNB

      // Calculate BNB amount based on GAZA amount
      const bnbAmount = ethers.parseEther(
        (Number(amount) / presaleRate).toString()
      );

      // Send BNB to contract
      const tx = await signer.sendTransaction({
        to: contractAddress,
        value: bnbAmount,
      });

      await tx.wait();
      alert("Presale purchase successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Presale purchase failed. Please try again.");
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
            Join GAZA COIN Presale
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Be part of the movement. Purchase GAZA COIN tokens during our
            presale phase.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handlePresale} className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amount (GAZA)
              </label>
              <input
                type="number"
                min="100000"
                step="100000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500"
                placeholder="Enter amount"
                required
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Minimum purchase: 100,000 GAZA
              </p>
            </div>

            {!account && (
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Connect your wallet to participate in the presale
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

            <div className="bg-orange-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Presale Details
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Rate: 100,000 GAZA per BNB</li>
                <li>• Network: BNB Chain (BSC)</li>
                <li>• Minimum Purchase: 100,000 GAZA</li>
                <li>• Payment Method: BNB only</li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={isProcessing || !amount || !account}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Purchase GAZA"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
