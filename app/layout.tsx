import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habit Tracker",
  description: "Track your habits and stay consistent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased h-full">
        <header></header>

        <main className="h-full flex items-center justify-center">
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  );
}
