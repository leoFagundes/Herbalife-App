import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Herbalife Nutrition",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${saira.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
