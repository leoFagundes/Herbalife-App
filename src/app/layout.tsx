import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

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
      <body
        className={`${saira.className} flex flex-col items-center antialiased bg-white text-black`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
