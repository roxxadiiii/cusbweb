import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Central University of South Bihar | Official Website",
  description:
    "Central University of South Bihar (CUSB), Gaya — A Central University established under the Central Universities Act, 2009. Explore programmes, admissions, research, and campus life.",
  keywords:
    "CUSB, Central University of South Bihar, Gaya, Bihar, University, Admissions, CUET, Higher Education",
  openGraph: {
    title: "Central University of South Bihar",
    description: "Official website of Central University of South Bihar, Gaya.",
    url: "https://cusb.ac.in",
    siteName: "CUSB",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
