import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basecamp",
  description: "Where men gather — before the climb, before the noise. Together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-basecamp-sand text-basecamp-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
