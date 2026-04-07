'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

function FAQItem({
  item,
  index,
  aberto,
  onToggle,
}: {
  item: typeof FAQ_ITEMS[0]
  index: number
  aberto: boolean
  onToggle: () => void
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const delays = ['d1', 'd2', 'd3', 'd4', 'd5']

  return (
    <div ref={ref} className={cn('fade-up', delays[index % 5], isVisible && 'visible')}>
      <button
        onClick={onToggle}
        className="w-full text-left"
        aria-expanded={aberto}
      >
        <div
          className={cn(
            'flex w-full items-start justify-between gap-4 rounded-2xl border p-5 transition-all duration-300 backdrop-blur-sm',
            aberto
              ? 'border-primary/30 bg-white/80 shadow-sm'
              : 'border-white/50 bg-white/55 hover:border-primary/20 hover:bg-white/70'
          )}
        >
          <div className="flex items-start gap-4">
            <span className={cn(
              'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold transition-colors',
              aberto ? 'bg-primary text-white' : 'bg-content/10 text-content-muted'
            )}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={cn(
              'font-display text-base font-semibold leading-snug transition-colors',
              aberto ? 'text-primary' : 'text-content'
            )}>
              {item.pergunta}
            </span>
          </div>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={cn(
              'mt-0.5 h-5 w-5 shrink-0 transition-all duration-300',
              aberto ? 'rotate-180 text-primary' : 'text-content-muted'
            )}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          aberto ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-3">
            <p className="text-sm leading-relaxed text-content-muted pl-11">
              {item.resposta}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="relative overflow-hidden py-16 md:py-20">

      {/* Imagem de fundo */}
      <img
        src="/images/faq/faq-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />

      {/*
        Mobile  → começa branco e vai direto para #0D1117 mais cedo (seção menor)
        Desktop → transição mais suave com exposição maior da imagem no meio
        Em ambos o último stop é rgba(13,17,23,1) = #0D1117 = --color-bg-dark
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(248,249,250,0.94)  0%,
            rgba(248,249,250,0.20) 20%,
            rgba(13,17,23,0.65)    52%,
            rgba(13,17,23,1.00)    85%,
            rgba(13,17,23,1.00)   100%
          )`,
        }}
      />

      {/* Conteúdo */}
      <div className="container-custom relative z-10">

        {/* Título — overlay claro no topo → cores escuras nativas */}
        <div ref={ref} className={cn('mb-8 md:mb-12 fade-up', isVisible && 'visible')}>
          <SectionTitle
            tag="Dúvidas Frequentes"
            titulo="Perguntas que todo mundo <span style='color:var(--color-primary)'>faz</span>"
            subtitulo="Tire suas principais dúvidas sobre automação residencial antes de entrar em contato."
            align="center"
          />
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl flex flex-col gap-2.5 md:gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={item.pergunta}
              item={item}
              index={i}
              aberto={aberto === i}
              onToggle={() => setAberto(aberto === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA — já sobre fundo #0D1117, igual ao CTAFinal abaixo */}
        <div className={cn('mt-8 md:mt-12 text-center fade-up d3', isVisible && 'visible')}>
          <p className="mb-4 text-sm text-white/55">
            Ainda tem dúvidas? Fale diretamente com nossos especialistas.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm px-6 py-3 md:px-7 md:py-3.5 font-display text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white hover:scale-105 active:scale-95"
          >
            Enviar minha dúvida
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>

      {/*
        Bloco sólido no rodapé da seção — garante que os últimos pixels
        sejam exatamente #0D1117 em qualquer altura de tela, sem banding.
      */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24"
        style={{ background: 'rgb(13,17,23)' }}
      />
    </section>
  )
}