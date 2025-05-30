import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gage Ayala - Cyber Security Specialist",
  description: "Personal portfolio showcasing my expertise in cybersecurity, technical skills, and professional projects",
  metadataBase: new URL('https://www.gageayala.com'),
  openGraph: {
    title: 'Gage Ayala - Cyber Security Specialist',
    description: 'Personal portfolio showcasing my expertise in cybersecurity, technical skills, and professional projects',
    url: 'https://www.gageayala.com',
    siteName: 'Gage Ayala',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
} 