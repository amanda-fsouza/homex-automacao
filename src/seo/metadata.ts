import { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'HomeX Automação | Automação Residencial em São José dos Campos',
    template: '%s | HomeX Automação',
  },

  description:
    'Automação residencial em São José dos Campos e região. Câmeras de segurança, fechaduras eletrônicas, controle de acesso, som ambiente, ar-condicionado, persianas e muito mais. Instalação sem obras.',

  keywords: [
    'automação residencial',
    'automação residencial São José dos Campos',
    'automação residencial Jacareí',
    'casa inteligente São José dos Campos',
    'smart home São José dos Campos',
    'fechadura eletrônica São José dos Campos',
    'câmeras de segurança São José dos Campos',
    'controle de acesso residencial',
    'som ambiente residencial',
    'automação ar condicionado',
    'automação persianas cortinas',
    'aspiração central',
    'automação de piscina',
    'automação lareira',
    'rede local residencial',
    'HomeX automação',
    'instalação automação sem obra',
  ],

  authors: [{ name: 'HomeX Automação' }],
  creator: 'HomeX Automação',
  publisher: 'HomeX Automação',
  category: 'Automação Residencial',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'HomeX Automação',
    title: 'HomeX Automação | Casa Inteligente em São José dos Campos',
    description:
      'Câmeras, fechaduras, controle de acesso, som ambiente, ar-condicionado e muito mais. Instalação sem obras em São José dos Campos e região.',
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'HomeX Automação Residencial',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'HomeX Automação | Casa Inteligente em São José dos Campos',
    description:
      'Automação residencial sem obras. Câmeras, fechaduras, AC, som ambiente e mais.',
    images: [`${BASE_URL}/og-image.jpg`],
  },

  alternates: {
    canonical: BASE_URL,
  },

  verification: {
    google: 'COLE_SEU_CÓDIGO_GOOGLE_SEARCH_CONSOLE_AQUI',
  },
}