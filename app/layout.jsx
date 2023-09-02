"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Prompt } from 'next/font/google'
import { useEffect } from 'react';

const inter = Prompt({ subsets: ['latin'], weight: ['400', '500'], })

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
