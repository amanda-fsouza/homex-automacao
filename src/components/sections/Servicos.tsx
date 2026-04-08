'use client'

import { useState, useRef, useCallback, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Cctv,
  Lock,
  Wind,
  Wifi,
  Blinds,
  Volume2,
  Flame,
  Waves,
  KeyRound,
  CircleDot,
} from 'lucide-react'
import { SERVICOS } from '@/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

// ── Mapa de ícones Lucide por id ──────────────────────────
const ICONES: Record<string, React.ReactNode> = {
  'cameras':            <Cctv className="h-5 w-5" />,
  'fechaduras':         <Lock className="h-5 w-5" />,
  'ar-condicionado':    <Wind className="h-5 w-5" />,
  'rede-local':         <Wifi className="h-5 w-5" />,
  'persianas-cortinas': <Blinds className="h-5 w-5" />,
  'audio-video':        <Volume2 className="h-5 w-5" />,
  'lareira':            <Flame className="h-5 w-5" />,
  'piscina':            <Waves className="h-5 w-5" />,
  'controle-acesso':    <KeyRound className="h-5 w-5" />,
  'aspiracao-central':  <CircleDot className="h-5 w-5" />,
}

// ── Helpers para carrossel infinito ───────────────────────
const OFFSET = SERVICOS.length
const ITEMS = [...SERVICOS, ...SERVICOS, ...SERVICOS]

// ─────────────────────────────────────────────────────────
// CONVENÇÃO DE NOMENCLATURA DAS IMAGENS
// ─────────────────────────────────────────────────────────
// Cada serviço usa o mesmo `id` definido em constants/index.ts
// para encontrar automaticamente sua imagem em:
//
//   public/images/servicos/{id}.webp   ← formato principal (melhor perf)
//   public/images/servicos/{id}.jpg    ← fallback para browsers antigos
//
// Exemplos de arquivos esperados:
//   public/images/servicos/cameras.webp
//   public/images/servicos/cameras.jpg
//   public/images/servicos/fechaduras.webp
//   public/images/servicos/fechaduras.jpg
//   ... e assim por diante para cada id de serviço.
//
// Se a imagem não existir, o placeholder com ícone é exibido
// automaticamente via onError — nenhum erro visual no cliente.
// ─────────────────────────────────────────────────────────

// ── Card do carrossel ─────────────────────────────────────
function CarouselCard({
  servico,
  isActive,
  onClick,
}: {
  servico: typeof SERVICOS[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative flex shrink-0 flex-col items-center gap-2.5',
        'rounded-2xl border px-3.5 py-4 transition-all duration-300 focus:outline-none',
        'w-[116px] min-w-[108px] sm:w-[124px] cursor-pointer',
        isActive
          ? 'border-primary bg-primary/8 shadow-[0_2px_16px_rgba(36,106,126,0.15)]'
          : 'border-border-color bg-white text-content-muted hover:border-primary/40 hover:bg-primary/5',
      )}
    >
      {/* Barra ativa na base */}
      <span
        className={cn(
          'absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-primary origin-center transition-all duration-300',
          isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0',
        )}
      />

      {/* Ícone */}
      <span
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300',
          isActive
            ? 'bg-primary text-white'
            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white',
        )}
      >
        <span className="transition-transform duration-300 group-hover:scale-110">
          {ICONES[servico.id] ?? <span className="text-lg">{servico.icone}</span>}
        </span>
      </span>

      {/* Label */}
      <span
        className={cn(
          'text-center font-display text-[11px] font-medium leading-tight transition-colors duration-200',
          isActive ? 'text-primary' : 'text-content-muted group-hover:text-content',
        )}
      >
        {servico.titulo}
      </span>
    </button>
  )
}

// ── Imagem do painel com fallback gracioso ────────────────
function ServiceImage({ servico }: { servico: typeof SERVICOS[0] }) {
  const [hasError, setHasError] = useState(false)

  // Reseta o erro quando o serviço muda (troca de card)
  useEffect(() => {
    setHasError(false)
  }, [servico.id])

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-primary-light">
        <span className="opacity-20 [&>svg]:h-16 [&>svg]:w-16 [&>svg]:stroke-primary">
          {ICONES[servico.id]}
        </span>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(36,106,126,0.08)_0%,transparent_60%)]" />
      </div>
    )
  }

  return (
    <>
      {/*
        <picture> serve o .webp para browsers modernos e o .jpg como fallback.
        Ambos os arquivos devem estar em: public/images/servicos/{id}.webp|jpg
        A tag <img> é usada (sem next/image) para compatibilidade com output: 'export'.
      */}
      <picture>
        <source
          srcSet={`/images/servicos/${servico.id}.webp`}
          type="image/webp"
        />
        <img
          src={`/images/servicos/${servico.id}.jpg`}
          alt={`${servico.titulo} — HomeX Automação`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Overlay sutil de gradiente sobre a imagem */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(36,106,126,0.18)_0%,transparent_55%)] pointer-events-none" />

      {/* Badge com nome do serviço (visível só no mobile onde o painel é coluna) */}
      <div className="absolute bottom-3 left-3 sm:hidden">
        <span className="rounded-full bg-black/50 px-3 py-1 font-display text-[11px] font-semibold text-white backdrop-blur-sm">
          {servico.titulo}
        </span>
      </div>
    </>
  )
}

// ── Painel de detalhe ─────────────────────────────────────
function DetailPanel({
  servico,
  visible,
}: {
  servico: typeof SERVICOS[0]
  visible: boolean
}) {
  return (
    <div
      className={cn(
        'group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-border-color bg-white shadow-card',
        'transition-all duration-300 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
      )}
    >
      {/* ── Bloco da imagem ──────────────────────────────────
          Mobile  : altura fixa de 220px, largura 100%
          Tablet+ : largura fixa de 256px (sm:w-64), altura auto (preenche o card)
          Desktop : largura 320px (lg:w-80)
      ──────────────────────────────────────────────────────── */}
      <div className="relative h-70 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-80 sm:w-90 lg:w-105 lg:min-h-100">
        <ServiceImage servico={servico} />
      </div>

      {/* ── Conteúdo textual ─────────────────────────────────── */}
      <div className="flex flex-col gap-4 p-6 lg:p-8">
        <h3 className="font-display text-xl font-bold leading-tight text-content lg:text-2xl">
          {servico.titulo}
        </h3>

        <p className="text-sm leading-relaxed text-content-muted lg:text-base">
          {servico.descricao}
        </p>

        <ul className="mt-auto flex flex-col divide-y divide-border-color border-t border-border-color pt-4">
          {servico.beneficios.slice(0, 4).map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 py-2.5 font-body text-sm text-content-muted"
            >
              {/* Ícone de check */}
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 text-primary"
                >
                  <path d="M3 8l3.5 3.5L13 4" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ── Componente principal ──────────────────────────────────
const FECHADURAS_INDEX = SERVICOS.findIndex(s => s.id === 'fechaduras')

function ServicosContent() {
  const searchParams = useSearchParams()
  const { ref, isVisible } = useScrollAnimation()

  const getInitialIndex = () => {
    const param = searchParams.get('servico')
    if (param) {
      const idx = SERVICOS.findIndex(s => s.id === param)
      if (idx !== -1) return idx
    }
    return FECHADURAS_INDEX
  }

  const [activeIndex, setActiveIndex] = useState(getInitialIndex)
  const [detailVisible, setDetailVisible] = useState(true)

  const trackRef = useRef<HTMLDivElement>(null)
  const CARD_W = 116

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = (OFFSET + activeIndex) * CARD_W
    }
    // Se veio do footer com ?servico=, rola até a seção
    if (searchParams.get('servico')) {
      const el = document.getElementById('servicos')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  const navigate = useCallback((dir: 1 | -1) => {
    const next = (activeIndex + dir + SERVICOS.length) % SERVICOS.length
    triggerSelect(next, dir)
  }, [activeIndex])

  const triggerSelect = (realIndex: number, _dir?: number) => {
    setDetailVisible(false)
    setTimeout(() => {
      setActiveIndex(realIndex)
      setDetailVisible(true)
    }, 220)

    if (trackRef.current) {
      const targetScroll = (OFFSET + realIndex) * CARD_W
      trackRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' })
    }
  }

  const onScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const total = ITEMS.length * CARD_W
    const third = total / 3
    if (el.scrollLeft < third * 0.5) {
      el.scrollLeft += third
    } else if (el.scrollLeft > third * 2.2) {
      el.scrollLeft -= third
    }
  }, [])

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const didDrag = useRef(false)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    didDrag.current = false
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0)
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0
    if (trackRef.current) trackRef.current.style.cursor = 'grabbing'
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - (trackRef.current.offsetLeft ?? 0)
    const walk = (x - startX.current) * 1.4
    if (Math.abs(walk) > 4) didDrag.current = true
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }, [])

  const handleCardClick = useCallback((realIndex: number) => {
    if (didDrag.current) return
    if (realIndex === activeIndex) return
    triggerSelect(realIndex)
  }, [activeIndex])

  return (
    <section id="servicos" className="section bg-bg-alt">
      <div className="container-custom">

        {/* Header */}
        <div ref={ref} className={cn('mb-12 fade-up', isVisible && 'visible')}>
          <SectionTitle
            tag="O que oferecemos"
            titulo="Soluções Completas para sua <span style='color:var(--color-primary)'>Casa Inteligente</span>"
            subtitulo="Do sistema de câmeras ao controle de persianas, integramos tudo em um único ecossistema controlado pelo seu smartphone."
            align="center"
          />
        </div>

        {/* Carrossel com setas */}
        <div className={cn('fade-up d1', isVisible && 'visible')}>
          <div className="flex items-center gap-3">

            <button
              onClick={() => navigate(-1)}
              aria-label="Anterior"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-color bg-white text-content-muted shadow-card transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md-custom active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="relative flex-1 overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 bottom-2 w-8 z-10 bg-gradient-to-r from-bg-alt to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-8 z-10 bg-gradient-to-l from-bg-alt to-transparent" />

              <div
                ref={trackRef}
                onScroll={onScroll}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseUp}
                onMouseUp={onMouseUp}
                className={cn(
                  'flex gap-2 overflow-x-auto pb-2',
                  '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                  '[-webkit-overflow-scrolling:touch]',
                  'cursor-grab select-none',
                )}
              >
                {ITEMS.map((servico, i) => {
                  const realIndex = i % SERVICOS.length
                  return (
                    <CarouselCard
                      key={`${servico.id}-${i}`}
                      servico={servico}
                      isActive={realIndex === activeIndex}
                      onClick={() => handleCardClick(realIndex)}
                    />
                  )
                })}
              </div>
            </div>

            <button
              onClick={() => navigate(1)}
              aria-label="Próximo"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-color bg-white text-content-muted shadow-card transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md-custom active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>

        {/* Painel de detalhe */}
        <div className={cn('mt-6 fade-up d2', isVisible && 'visible')}>
          <DetailPanel servico={SERVICOS[activeIndex]} visible={detailVisible} />
        </div>

        {/* CTA */}
        <div className={cn('mt-10 flex justify-center fade-up d3', isVisible && 'visible')}>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-base font-semibold text-white shadow-md-custom transition-all duration-300 hover:scale-105 hover:shadow-lg-custom active:scale-95"
          >
            Solicitar Orçamento Grátis
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default function Servicos() {
  return (
    <Suspense fallback={null}>
      <ServicosContent />
    </Suspense>
  )
}