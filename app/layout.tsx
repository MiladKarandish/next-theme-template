import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Theme from "./components/theme/ThemeChanger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theme",
  description:
    "This is a boiler plate for website with theme changing functionality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Theme />
        {children}
      </body>
    </html>
  );
}
