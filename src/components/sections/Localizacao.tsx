'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const CIDADES = [
  'São José dos Campos',
  'Jacareí',
  'Caçapava',
  'Taubaté',
  'Pindamonhangaba',
  'Guaratinguetá',
  'Lorena',
  'São Luís do Paraitinga',
]

const INFOS = [
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Endereço',
    valor: 'Av. Estevan Corbani, 304 — Jacareí, SP',
    href: 'https://maps.google.com/?q=Av.+Estevan+Corbani,+304,+Jacareí,+SP',
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'WhatsApp',
    valor: '(12) 99641-4102',
    href: 'https://wa.me/5512996414102',
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'E-mail',
    valor: 'contato@homexautomacao.com.br',
    href: 'mailto:contato@homexautomacao.com.br',
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Horário',
    valor: 'Seg - Sex: 09h às 18h',
    href: null,
  },
]

export default function Localizacao() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="localizacao" className="section bg-white">
      <div className="container-custom">
        {/* Título */}
        <div ref={titleRef} className={cn('mb-12 fade-up', titleVisible && 'visible')}>
          <SectionTitle
            titulo="Nossa <span style='color:var(--color-primary)'>Localização</span>"
            subtitulo="Venha nos visitar e descubra soluções inteligentes para sua casa."
            align="center"
          />
        </div>

        <div ref={contentRef} className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10 lg:items-stretch">

          {/* Mapa (3/5) — altura 100% da coluna */}
          <div className={cn('lg:col-span-3 fade-up d1', contentVisible && 'visible')}>
            <div className="overflow-hidden rounded-3xl shadow-lg border border-border-color h-full min-h-[380px]">
              <iframe
                title="Localização HomeX Automação — Jacareí, SP"
                src="https://maps.google.com/maps?q=Av.+Estevan+Corbani,+304,+Jacareí,+SP,+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Infos de contato (2/5) — ocupa toda a altura do mapa */}
          <div className={cn('lg:col-span-2 flex flex-col justify-between gap-3 fade-up d2', contentVisible && 'visible')}>
            {INFOS.map((info) => (
              <div
                key={info.label}
                className="flex flex-1 items-center gap-4 rounded-2xl border border-border-color bg-bg-alt px-5 py-4 transition-colors hover:border-primary/20 hover:bg-primary-light"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  {info.icone}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-content-light mb-0.5">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-content hover:text-primary transition-colors break-words"
                    >
                      {info.valor}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-content">{info.valor}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}