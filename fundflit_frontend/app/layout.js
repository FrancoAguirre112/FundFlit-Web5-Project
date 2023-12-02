import "./globals.css";
import { Nunito, Montserrat } from "next/font/google";

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

import './globals.css'
import { Nunito } from 'next/font/google'

// components
import Navbar from './components/Navbar'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: "FundFlit - Revolutionizing crowdfunding with web5",
  description: "We empower users and ensure trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="font-nunito">{children}</body>

      <body className={nunito.className}>
        <Navbar/> 
        {children}
      </body>
    </html>
  )
}
