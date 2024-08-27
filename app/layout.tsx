import "./globals.css";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 via-blue-700 to-sky-900",
            font.className
          )}
        >
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
