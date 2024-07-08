import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import Header from "@/components/Header/header";
import "./globals.css";

const inter = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planning pocker UI",
  description:
    "Planning pocker app to help scrum teams to estimate their user stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
