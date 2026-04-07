'use client'

import { Formulario } from '@/components/sections/Formulario'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const GARANTIAS = [
  { icone: '🔒', texto: 'Orçamento gratuito e sem compromisso' },
  { icone: '⚡', texto: 'Resposta rápida' },
  { icone: '🏅', texto: 'Instalação com garantia total' },
  { icone: '📍', texto: 'Atendemos SJC, Jacareí e região' },
]

export default function CTAFinal() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section
      id="contato"
      className="relative bg-bg-dark py-16 md:py-20 lg:py-20"
    >
      {/* Fundo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        {/* Grade pontilhada sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2D9E7F 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Coluna esquerda: copy de vendas */}
          <div ref={titleRef} className={cn('fade-up', titleVisible && 'visible')}>
            <SectionTitle
              tag="Solicite seu orçamento"
              titulo="Transforme sua casa em um lar <span style='color:var(--color-primary)'>inteligente</span>"
              subtitulo="Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp para entender o seu projeto."
              align="left"
              inverted
            />

            {/* Garantias */}
            <ul className="mt-10 flex flex-col gap-3">
              {GARANTIAS.map((g, i) => (
                <li
                  key={g.texto}
                  className={cn(
                    'flex items-center gap-3 fade-up',
                    `d${i + 1}`,
                    titleVisible && 'visible'
                  )}
                >
                  <span className="text-xl">{g.icone}</span>
                  <span className="text-sm font-medium text-white/80">{g.texto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita: formulário */}
          <div ref={formRef} className={cn('fade-up d2', formVisible && 'visible')}>
            <div className="rounded-3xl bg-white p-6 shadow-[0_24px_64px_rgba(0,0,0,0.35)] lg:p-8">
              {/* Header do card do formulário */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill="white" />
                    <circle cx="12" cy="13" r="2" fill="rgba(255,255,255,0.45)" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-content">Orçamento Gratuito</p>
                  <p className="text-xs text-content-muted">Fale com um especialista agora</p>
                </div>
                {/* Badge online */}
                <div className="ml-auto flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 border border-green-200">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-semibold text-green-700">Online agora</span>
                </div>
              </div>

              <Formulario />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}