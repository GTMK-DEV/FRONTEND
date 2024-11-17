import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gtmk.co.kr'),
  title: 'BillEasy',
  description: 'BillEasy:디지털 장부',
  keywords: [],
  openGraph: {
    title: 'BillEasy:수기장부를 더 간편하게',
    description: 'BillEasy:수기장부를 더 간편하게',
    siteName: 'BillEasy:수기장부를 더 간편하게',
    locale: 'ko_KR',
    type: 'website',
    url: 'https://www.gtmk.co.kr',
    images: {
      url: '/images/opengraph.png'
    }
  },
  twitter: {
    title: 'BillEasy:수기장부를 더 간편하게',
    description: 'BillEasy:수기장부를 더 간편하게',
    images: {
      url: '/images/opengraph.png'
    }
  },
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=0',

  icons: [],

  manifest: '/manifest.json',

  robots: {
    index: true,
    follow: true,
    nocache: false
  }
};
