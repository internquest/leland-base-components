"use client"
import { Inter  } from "next/font/google";
import localFont from '@next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });



const calibre = localFont({
  src: [
    {
      path: '../fonts/calibre/CalibreRegular.otf',
      weight: '500',
      
    },
  ],
  variable: '--font-calibre',
});

export default function RootLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false); // State to manage whether the mobile sidebar is open or closed

  return (
    <html lang="en" className={`${calibre.variable} `}>
      <body className={` w-full min-h-screen flex flex-col`}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="h-[80px]"></div>
        {children}
      </body>
    </html>
  );
}
