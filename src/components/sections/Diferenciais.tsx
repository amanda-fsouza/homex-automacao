'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image' // Assumindo o uso de Next.js para otimização profissional
import { BENEFICIOS, COMO_FUNCIONA } from '@/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const ICONES_BENEFICIOS: Record<number, React.ReactNode> = {
  0: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
}

/* ─── Card de benefício ─── */
function BeneficioCard({ item, index }: { item: (typeof BENEFICIOS)[0]; index: number }) {
  return (
    <div className="group flex h-full flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/10 sm:items-start sm:text-left">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary-mid transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        {ICONES_BENEFICIOS[index]}
      </div>
      <div>
        <h3 className="mb-1.5 font-display text-lg font-bold text-white">{item.titulo}</h3>
        <p className="text-sm leading-relaxed text-white/65">{item.descricao}</p>
      </div>
    </div>
  )
}

/* ─── Ícone de seta ─── */
function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
      {direction === 'left'
        ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      }
    </svg>
  )
}

/* ─── Carrossel mobile com setas e dots ─── */
function MobileCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const total = BENEFICIOS.length

  const scrollTo = useCallback((index: number) => {
    if (!trackRef.current) return
    const clamped = Math.max(0, Math.min(index, total - 1))
    setActiveIndex(clamped)
    const card = trackRef.current.children[clamped] as HTMLElement
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [total])

  return (
    <div className="sm:hidden mb-10">
      <div className="flex items-center gap-3">
        {/* Seta esquerda */}
        <button
          aria-label="Anterior"
          onClick={() => scrollTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200',
            activeIndex === 0
              ? 'border-white/10 text-white/25 cursor-not-allowed'
              : 'border-primary/50 text-primary hover:bg-primary/10 active:scale-95'
          )}
        >
          <ArrowIcon direction="left" />
        </button>

        {/* Track */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={() => {
              if (!trackRef.current) return
              const { scrollLeft, scrollWidth } = trackRef.current
              const cardWidth = scrollWidth / total
              const index = Math.round(scrollLeft / cardWidth)
              setActiveIndex(Math.max(0, Math.min(index, total - 1)))
            }}
          >
            {BENEFICIOS.map((item, i) => (
              <div key={item.titulo} className="snap-center shrink-0 w-full">
                <BeneficioCard item={item} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Seta direita */}
        <button
          aria-label="Próximo"
          onClick={() => scrollTo(activeIndex + 1)}
          disabled={activeIndex === total - 1}
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200',
            activeIndex === total - 1
              ? 'border-white/10 text-white/25 cursor-not-allowed'
              : 'border-primary/50 text-primary hover:bg-primary/10 active:scale-95'
          )}
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center items-center gap-2">
        {BENEFICIOS.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para benefício ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300 focus:outline-none',
              i === activeIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/25 hover:bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  )
}

/* ─── Passo do "Como funciona" ─── */
function PassoItem({ passo, index }: { passo: (typeof COMO_FUNCIONA)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  const delays = ['d1', 'd2', 'd3', 'd4']

  return (
    <div ref={ref} className={cn('flex gap-5 fade-up', delays[index], isVisible && 'visible')}>
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10 font-display text-lg font-bold text-primary">
          {passo.numero}
        </div>
        {index < COMO_FUNCIONA.length - 1 && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent" />
        )}
      </div>
      <div className="pb-8">
        <h3 className="mb-1.5 font-display text-lg font-bold text-white">{passo.titulo}</h3>
        <p className="text-sm leading-relaxed text-white/65">{passo.descricao}</p>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   COMPONENTE PRINCIPAL
════════════════════════════════════════════ */
export default function Diferenciais() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: stepsTitleRef, isVisible: stepsTitleVisible } = useScrollAnimation()
  const { ref: phoneRef, isVisible: phoneVisible } = useScrollAnimation({ threshold: 0.1 })
  const { ref: mobileItensRef, isVisible: mobileItensVisible } = useScrollAnimation({ threshold: 0.1 }) // ← Novo ref para mobile

  return (
    <section id="beneficios" className="bg-bg-dark relative overflow-hidden pt-20 lg:pt-28 pb-0">

      {/* ── Fundo decorativo ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container-custom relative z-10">

        {/* ══════════════════════════════
            BLOCO 1 — Benefícios
        ══════════════════════════════ */}
        <div ref={titleRef} className={cn('mb-10 fade-up', titleVisible && 'visible')}>
          <SectionTitle
            tag="Por que escolher a HomeX"
            titulo="Vantagens que fazem a <span style='color:var(--color-primary)'>diferença</span>"
            subtitulo="Cada detalhe do nosso serviço foi pensado para que você tenha a melhor experiência em automação residencial."
            align="center"
            inverted
          />
        </div>

        {/* ── MOBILE: Carrossel com setas ── */}
        <MobileCarousel />

        {/* ── DESKTOP: Grid ── */}
        <div className="hidden sm:grid mb-20 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((item, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
            const delays = ['d1', 'd2', 'd3', 'd4', 'd5']
            return (
              <div key={item.titulo} ref={ref} className={cn('fade-up', delays[i % 5], isVisible && 'visible')}>
                <BeneficioCard item={item} index={i} />
              </div>
            )
          })}
        </div>

        {/* Divisor */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* ══════════════════════════════════════════════════════
            IMAGEM MOBILE — Centralizada na separação
        ══════════════════════════════════════════════════════ */}
        <div
          ref={mobileItensRef} // ← Link para o novo ref
          className="flex lg:hidden justify-center mb-10" // mb-10 para dar espaço ao texto
          style={{
            // Ajuste na animação compSlideUp para trigger no mobileItensVisible
            animation: mobileItensVisible ? 'compSlideUp 1s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
            opacity: mobileItensVisible ? undefined : 0,
            transform: mobileItensVisible ? undefined : 'translateY(50px)',
          }}
        >
          <Image
            src="/images/diferenciais/itens.png" // Adicionei "/" para garantir caminho estático correto
            alt="Dispositivos de automação residencial"
            width={600}
            height={500}
            className="block w-[90%] max-w-[380px] h-auto"
            style={{
              filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.55))',
              // Usa a nova animação que não força o translateX
              animation: mobileItensVisible ? 'itensFloatMobile 5.5s ease-in-out 1.1s infinite' : 'none',
            }}
          />
        </div>

        {/* ══════════════════════════════════════════════════════
            BLOCO 2 — Como funciona + celular + itens
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-end">

          {/* Coluna esquerda */}
          <div
            ref={stepsTitleRef}
            className={cn('pb-8 lg:pb-16 text-center lg:text-left fade-up', stepsTitleVisible && 'visible')}
          >
            {/* Mobile: centralizado */}
            <div className="lg:hidden">
              <SectionTitle
                tag="Como funciona"
                titulo="Do primeiro contato à <span style='color:var(--color-primary)'>casa conectada</span>"
                subtitulo="Um processo simples, transparente e sem surpresas. Em poucos dias, sua casa estará totalmente automatizada."
                align="center"
                inverted
              />
            </div>
            {/* Desktop: esquerda */}
            <div className="hidden lg:block">
              <SectionTitle
                tag="Como funciona"
                titulo="Do primeiro contato à <span style='color:var(--color-primary)'>casa conectada</span>"
                subtitulo="Um processo simples, transparente e sem surpresas. Em poucos dias, sua casa estará totalmente automatizada."
                align="left"
                inverted
              />
            </div>
            <div className="mt-10 text-left">
              {COMO_FUNCIONA.map((passo, i) => (
                <PassoItem key={passo.numero} passo={passo} index={i} />
              ))}
            </div>
          </div>

          {/* Coluna direita: imagens */}
          <div
            ref={phoneRef}
            className="relative pb-0"
          >
            {/* Halos */}
            <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/12 blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 h-56 w-[120%] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute top-6 left-0 h-36 w-36 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1.2px, transparent 1.2px)', backgroundSize: '14px 14px', opacity: 0.12 }} />

            {/* ── MOBILE: O bloco que ficava aqui foi movido para cima ── */}

            {/* ── DESKTOP: composição empilhada ── */}
            <div
              className="hidden lg:flex items-end justify-end"
              style={{
                animation: phoneVisible ? 'compSlideUp 1s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
                opacity: phoneVisible ? undefined : 0,
                transform: phoneVisible ? undefined : 'translateY(70px)',
              }}
            >
              <div
                className="relative"
                style={{ width: 'clamp(320px, 45vw, 580px)', paddingTop: '42%' }}
              >
                {/* itens — atrás/acima */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-28%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '118%',
                    zIndex: 10,
                    pointerEvents: 'none',
                    animation: phoneVisible ? 'itensFloat 5.5s ease-in-out 1.1s infinite' : 'none',
                    filter: 'drop-shadow(0 28px 56px rgba(0,0,0,0.60)) drop-shadow(0 6px 20px rgba(0,0,0,0.45))',
                  }}
                >
                  <Image
                    src="/images/diferenciais/itens.png"
                    alt="Dispositivos de automação residencial: fechadura inteligente, câmera, lâmpada smart e assistente de voz"
                    width={600}
                    height={500}
                    className="block w-full h-auto"
                  />
                </div>
                {/* celular — na frente */}
                <Image
                  src="/images/diferenciais/celular.png"
                  alt="App HomeX de automação residencial no smartphone"
                  width={480}
                  height={900}
                  className="block relative z-20 w-full h-auto max-h-[720px] object-contain object-bottom"
                  style={{
                    filter: 'drop-shadow(-20px 0 56px rgba(0,0,0,0.45)) drop-shadow(20px 0 56px rgba(0,0,0,0.35))',
                  }}
                />
              </div>
            </div>

            <style>{`
              @keyframes compSlideUp {
                from { opacity: 0; transform: translateY(70px); }
                to   { opacity: 1; transform: translateY(0px);  }
              }
              /* Desktop Animation */
              @keyframes itensFloat {
                0%   { transform: translateX(-50%) translateY(0px)   rotate(0deg);    }
                35%  { transform: translateX(-50%) translateY(-12px)  rotate(0.5deg);  }
                65%  { transform: translateX(-50%) translateY(-7px)   rotate(-0.4deg); }
                100% { transform: translateX(-50%) translateY(0px)   rotate(0deg);    }
              }
              /* Mobile Animation Fix */
              @keyframes itensFloatMobile {
                0%   { transform: translateY(0px)   rotate(0deg);    }
                35%  { transform: translateY(-12px) rotate(0.5deg);  }
                65%  { transform: translateY(-7px)  rotate(-0.4deg); }
                100% { transform: translateY(0px)   rotate(0deg);    }
              }
            `}</style>
          </div>

        </div>
      </div>
    </section>
  )
}