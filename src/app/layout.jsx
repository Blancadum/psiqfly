// src/app/layout.jsx
import { Quicksand, Montserrat } from "next/font/google";
import PropTypes from "prop-types";
import Script from 'next/script';
import "./globals.css";
import { Providers } from './Providers';
import { Navbar } from '@/components/Layout/Navbar/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { PanamericanaFloat } from '@/components/ads/PanamericanaFloat';
import { CookieBanner } from '@/components/Layout/CookieBanner';

const GA_ID = 'G-KXD21555QS';

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "PsiQFly® | Blog de Psicología Clínica",
  description: "Formación y recursos para psicólogos noveles sobre razonamiento clínico y sesgos cognitivos.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${quicksand.variable} ${montserrat.variable} h-full antialiased`}>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#f7f7f8] dark:bg-slate-900 transition-colors">
        <Providers>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <PanamericanaFloat />
            <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};