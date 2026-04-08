'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const CREDENCIAIS = [
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    texto: 'Instalação certificada e garantida',
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    texto: 'Atendimento em SJC, Jacareí e região',
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    texto: 'Suporte pós-instalação rápido e ágil',
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    texto: 'Melhores marcas e equipamentos premium',
  },
]

export default function Sobre() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="sobre" className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ═══════════════════════════════════════
              COLUNA ESQUERDA — Imagem com efeitos
          ═══════════════════════════════════════ */}
          <div
            ref={imgRef}
            className={cn('relative fade-up', imgVisible && 'visible')}
          >
            {/* ── Elemento geométrico decorativo (atrás de tudo) ── */}
            {/* Círculo grande translúcido */}
            <div
              aria-hidden
              className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl pointer-events-none"
            />
            {/* Grade de pontos */}
            <div
              aria-hidden
              className="absolute -bottom-6 -right-6 h-48 w-48 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, var(--color-primary) 1.2px, transparent 1.2px)',
                backgroundSize: '14px 14px',
                opacity: 0.18,
              }}
            />
            {/* Linha diagonal decorativa */}
            <div
              aria-hidden
              className="absolute top-1/2 -left-8 h-px w-24 rotate-45 bg-linear-to-r from-transparent via-primary/60 to-transparent pointer-events-none"
            />

            {/* ── Wrapper da imagem ── */}
            <div className="relative z-10 my-6 md:my-0">
              {/*
                Anel de borda brilhante (glow border).
                Funciona como um "moldura" com gradiente que envolve a imagem.
              */}
              <div
                className="rounded-3xl p-0.5 shadow-[0_32px_80px_rgba(0,0,0,0.18)]"
                style={{
                  background:
                    'linear-gradient(135deg, var(--color-primary) 0%, transparent 50%, var(--color-secondary, #1e3a5f) 100%)',
                }}
              >
                {/* Container da imagem com overflow hidden para o clip */}
                <div className="relative overflow-hidden rounded-[22px] bg-bg-dark">
                  {/* ── A imagem real ── */}
                  <img
                    src="/images/sobre/sobre.png"
                    alt="Instalação de automação residencial pela HomeX em São José dos Campos"
                    width={600}
                    height={700}
                    className="block h-auto w-full object-cover"
                    style={{ maxHeight: '520px', objectPosition: 'center top' }}
                  />

                  {/* ── Overlay gradiente na parte inferior da imagem ──
                      Cria efeito de "saída suave" para o conteúdo abaixo */}
                  <div
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(13,17,23,0.85) 0%, transparent 100%)',
                    }}
                  />

                  {/* ── Reflexo sutil de luz no topo (shimmer) ── */}
                  <div
                    aria-hidden
                    className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, transparent 100%)',
                    }}
                  />
                </div>
              </div>

              {/* ── Badge flutuante — "Sem obras!" ── */}
              <div
                className="absolute -bottom-5 -right-3 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-border-color"
                style={{ zIndex: 20 }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="h-4 w-4 text-primary"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-content-muted leading-none font-medium">
                    Instalação
                  </p>
                  <p className="text-sm font-bold text-content leading-tight mt-0.5">Sem obras!</p>
                </div>
              </div>

              {/* ── Badge flutuante — anos de experiência (lado esquerdo) ── */}
              <div
                className="absolute -top-4 -left-3 flex items-center gap-2.5 rounded-2xl bg-bg-dark border border-white/10 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{ zIndex: 20 }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 text-primary"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 leading-none font-medium">
                    Experiência
                  </p>
                  <p className="text-sm font-bold text-white leading-tight mt-0.5">+10 anos</p>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════
              COLUNA DIREITA — Texto
          ═══════════════════════════════════════ */}
          <div>
            <div ref={titleRef} className={cn('fade-up', titleVisible && 'visible')}>
              <SectionTitle
                tag="Sobre a HomeX"
                titulo="Tecnologia de ponta com atendimento <span style='color:var(--color-primary)'>personalizado</span>"
                subtitulo="Somos especializados em transformar residências comuns em lares inteligentes de alto padrão, com foco em segurança, conforto e economia de energia."
                align="left"
              />
            </div>

            {/* Credenciais */}
            <ul className={cn('mt-8 flex flex-col gap-3 fade-up d2', titleVisible && 'visible')}>
              {CREDENCIAIS.map((c) => (
                <li key={c.texto} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    {c.icone}
                  </div>
                  <span className="text-sm font-medium text-content">{c.texto}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className={cn('mt-8 fade-up d4', titleVisible && 'visible')}>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-semibold text-white shadow-md-custom transition-all duration-300 hover:scale-105 hover:shadow-lg-custom active:scale-95"
              >
                Fale com um especialista
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}