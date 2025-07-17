import type { Metadata } from 'next';
import './globals.scss';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
   variable: '--font-montserrat',
   subsets: ['latin'],
   weight: ['400', '700'], // choose only what you need
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
            {children}
         </body>
      </html>
   );
}
