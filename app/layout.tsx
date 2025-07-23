import type { Metadata } from "next";
import "./globals.scss";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
   variable: "--font-montserrat",
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
   title: "Jonenn's Portfolio V2",
   description: "Here's a window to my projects and myself",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${montserrat.variable} antialiased`}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
