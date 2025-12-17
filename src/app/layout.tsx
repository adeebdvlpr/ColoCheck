import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image"
import logoLeft from "../images/ColoCheck_Logo5.png";
import logoRight from "../images/ColoCheck_Logo6.png"
import NavigationButtons from "../components/navigationComponents";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ColoCheck",
  description: "App to provide straightforward screening of ColoRectal Cancer Risk level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= "min-h-screen bg-white text-slate-900">
          <div>
            <Header />
            <main>{children}</main>
          </div>
      </body>
    </html>
  );
}

function Header(){
  return(
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className ="mx-auto flex max-w-6*l items-center justify-between px-4 py-3 sm:px-6">
        {/* add the logo */}
        <Link href="./">
          <Image className="flex items-center gap-2"
            src={logoLeft} 
            alt="My application logo" 
            width = {89}
            height = {42}
            style={{ borderRadius: '10px' }}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <NavigationButtons />
        </nav>

        <div className="flex items-center gap-3">
        <Link href="./assessment">
          <Image className="flex items-center gap-2"
            src={logoRight} 
            alt="My application logo" 
            width = {60}
            height = {42}
            style={{ borderRadius: '10px' }}
            priority
          />
        </Link>

        </div>
      </div>

    </header>
    
  )
};
