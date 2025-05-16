import type { Metadata } from "next";
import Image from "next/image";
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
      <body className="antialiased h-full flex flex-col">
        <header className="flex p-4">
          <Image
            src="/logo.svg"
            height={24}
            width={24}
            alt="habits logo"
            className="mr-4"
            priority
          />
          <span className="font-bold">Habit Tracker</span>
        </header>

        <main className="h-full flex items-center justify-center flex-1 px-4">
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  );
}
