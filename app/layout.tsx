import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cairnai.co.uk'),
  title: 'CairnAI | AI Procurement Orchestration, Built for Scotland',
  description: 'Scotland\'s first AI-native procurement platform. Unify intake, approvals, supplier management, and compliance for Scottish public sector and enterprise.',
  keywords: [
    'AI procurement platform Scotland',
    'procurement software Scotland',
    'procurement automation',
    'procurement orchestration',
    'supplier management software',
    'procurement compliance Scotland',
    'PCS integration',
    'Procurement Reform Scotland Act 2014',
  ],
  authors: [{ name: 'CairnAI' }],
  creator: 'CairnAI',
  publisher: 'CairnAI',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://cairnai.co.uk',
    siteName: 'CairnAI',
    title: 'CairnAI | AI Procurement Orchestration, Built for Scotland',
    description: 'Scotland\'s first AI-native procurement platform. Purpose-built for Scottish procurement legislation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CairnAI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CairnAI | AI Procurement Orchestration for Scotland',
    description: 'Scotland\'s first AI-native procurement platform',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://cairnai.co.uk" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
