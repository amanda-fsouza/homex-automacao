import type { Metadata } from 'next'
import Script from 'next/script'
import { defaultMetadata } from '@/seo/metadata'
import { schemaOrg } from '@/seo/schema'
import { GTMScript, GTMNoScript } from '@/components/analytics/GTMScript'
import { MetaPixelScript, MetaPixelNoScript } from '@/components/analytics/MetaPixel'
import './globals.css'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
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