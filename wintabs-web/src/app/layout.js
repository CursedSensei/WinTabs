import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StrictMode } from "react";
import TopBar from './topbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <StrictMode>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
          <div className="md:w-9/12 lg:w-8/12 mx-auto sm:border-l sm:border-r border-white border-opacity-40 min-h-screen">
            <TopBar />
            {children}
          </div>
        </body>
      </html>
    </StrictMode>
  );
}
