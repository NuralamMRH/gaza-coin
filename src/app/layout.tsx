import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Web3Provider } from "@/lib/web3/Web3Context";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAZA COIN - The Voice of the Voiceless",
  description:
    "GAZA COIN represents hope, unity, and digital freedom. Join the movement for change through cryptocurrency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Provider>
            {children}
            <Footer />
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
