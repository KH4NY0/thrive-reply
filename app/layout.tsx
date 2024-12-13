import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
