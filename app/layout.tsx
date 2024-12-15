import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner"


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
              suppressHydrationWarning
          >
              <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  disableTransitionOnChange
              >
                  {children}
                  <Toaster />
              </ThemeProvider>
          </body>
      </html>
</ClerkProvider>
  );
}
