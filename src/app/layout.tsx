"use client";

import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <meta 
  name="viewport" 
  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" 
/>
      <body
        className="
          w-screen h-screen 
          overflow-hidden 
          bg-black text-white 
          antialiased
          selection:bg-pink-500/40
        "
      >
        {/* 🌌 App Container */}
        <main className="relative w-full h-full flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}