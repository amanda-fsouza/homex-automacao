import type { Metadata, Viewport } from 'next' // <-- Adicionado 'Viewport'
import Script from 'next/script'
import { defaultMetadata } from '@/seo/metadata'
import { schemaOrg } from '@/seo/schema'
import { GTMScript, GTMNoScript } from '@/components/analytics/GTMScript'
import { MetaPixelScript, MetaPixelNoScript } from '@/components/analytics/MetaPixel'
import './globals.css'

export const metadata: Metadata = defaultMetadata

// Configuração oficial do Next.js para o Viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Limita a escala máxima para evitar o travamento
  userScalable: false, // Desativa o pinch-zoom que está "soltando" o layout
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* A tag meta viewport manual foi removida daqui para usar o export acima */}
      </head>
      <body> 
        {/* GTM (noscript fallback) */}
        <GTMNoScript />

        {/* Meta Pixel (noscript fallback) */}
        <MetaPixelNoScript />

        {/* Conteúdo da aplicação */}
        {children}

        {/* Schema.org (SEO) */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrg),
          }}
        />

        {/* Google Tag Manager */}
        <GTMScript />

        {/* Meta Pixel */}
        <MetaPixelScript />
      </body>
    </html>
  )
}