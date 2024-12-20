import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner"
import React from "react";
import ReactQueryProvider from "@/providers/react-query-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Thrive Replay",
  description: "Revolutionize your Instagram communication with AI-powered direct message automation. " +
      "Streamline engagement, personalize interactions, and save time by automating your Instagram DM " +
      "strategy for businesses, creators, and marketers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
          <html lang="en">
          <body
              suppressHydrationWarning={true}
              className={jakarta.className}
          >
              <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  disableTransitionOnChange
              >
                  <ReactQueryProvider>
                      {children}
                  </ReactQueryProvider>
                  <Toaster />
              </ThemeProvider>
          </body>
      </html>
</ClerkProvider>
  );
}
