import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lexend } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/PublicShell";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kids Career Academy | Empowering the Future",
  description:
    "Nurturing young minds through interactive learning, skill development, and expert mentorship to build the leaders of tomorrow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={`${plusJakarta.variable} ${lexend.variable} bg-surface text-on-surface`}>
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  );
}
