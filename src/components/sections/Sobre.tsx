'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const VALORES = [
  'Encantar clientes - Superar expectativas em cada detalhe',
  'Tecnologia com propósito - Inovar para melhorar vidas',
  'Proximidade - Relacionamentos verdadeiros com clientes',
  'Confiança - Segurança e transparência em tudo',
  'Experiência - Mais do que automação, criamos ambientes para experiências memoráveis',
]

export default function Sobre() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: mobileTitleRef, isVisible: mobileTitleVisible } = useScrollAnimation()
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="sobre" className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ═══════════════════════════════════════
              COLUNA ESQUERDA — Imagem, Título (Mobile) e Missão/Visão/Valores (Mobile)
          ═══════════════════════════════════════ */}
          <div className="flex flex-col gap-10">
            {/* Wrapper da Imagem */}
            <div
              ref={imgRef}
              className={cn('relative fade-up', imgVisible && 'visible')}
            >
              <div
                aria-hidden
                className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl pointer-events-none"
              />
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
              
              <div className="relative z-10 my-6 md:my-0">
                <div
                  className="rounded-3xl p-0.5 shadow-[0_32px_80px_rgba(0,0,0,0.18)]"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-primary) 0%, transparent 50%, var(--color-secondary, #1e3a5f) 100%)',
                  }}
                >
                  <div className="relative overflow-hidden rounded-[22px] bg-bg-dark">
                    <img
                      src="/images/sobre/sobre.png"
                      alt="Instalação de automação residencial pela HomeX"
                      width={600}
                      height={700}
                      className="block h-auto w-full object-cover"
                      style={{ maxHeight: '520px', objectPosition: 'center top' }}
                    />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute -bottom-5 -right-3 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-border-color" style={{ zIndex: 20 }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-content-muted leading-none font-medium">Instalação</p>
                    <p className="text-sm font-bold text-content leading-tight mt-0.5">Sem obras!</p>
                  </div>
                </div>

                <div className="absolute -top-4 -left-3 flex items-center gap-2.5 rounded-2xl bg-bg-dark border border-white/10 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" style={{ zIndex: 20 }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 leading-none font-medium">Experiência</p>
                    <p className="text-sm font-bold text-white leading-tight mt-0.5">+10 anos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Título (MOBILE) */}
            <div ref={mobileTitleRef} className={cn('block lg:hidden fade-up text-center', mobileTitleVisible && 'visible')}>
              <SectionTitle
                tag="Sobre a HomeX"
                titulo="Tecnologia de ponta com atendimento <span style='color:var(--color-primary)'>personalizado</span>"
                subtitulo="Somos especializados em transformar residências comuns em lares inteligentes de alto padrão, com foco em segurança, conforto e economia de energia."
                align="center" 
              />
            </div>

            {/* CAIXAS: Missão, Visão e Valores (Mobile) com mesmo espaçamento */}
            <div className={cn('grid grid-cols-1 gap-4 fade-up d2', imgVisible && 'visible')}>
              <div className="rounded-2xl bg-primary/5 p-5 border-l-4 border-primary">
                <h4 className="text-xs uppercase tracking-widest font-bold text-primary mb-2">Missão</h4>
                <p className="text-sm text-content leading-relaxed">
                  Proporcionar conforto, segurança e eficiência por meio de soluções inteligentes de automação residencial, integrando tecnologia de ponta ao dia a dia das pessoas de forma simples e intuitiva.
                </p>
              </div>
              
              <div className="rounded-2xl bg-bg-dark/[0.03] p-5 border-l-4 border-content/20">
                <h4 className="text-xs uppercase tracking-widest font-bold text-content mb-2">Visão</h4>
                <p className="text-sm text-content-muted leading-relaxed">
                  Ser a empresa que redefine a forma como as pessoas vivem em seus lares, tornando cada casa um espaço mais humano, conectado e inspirador.
                </p>
              </div>

              {/* Valores APENAS NO MOBILE, dentro do mesmo grid de gap-4 */}
              <div className="block lg:hidden rounded-2xl bg-bg-dark/[0.03] p-5 border-l-4 border-primary/40">
                <h4 className="text-xs uppercase tracking-widest font-bold text-content mb-4">
                  Nossos Valores
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {VALORES.map((v) => (
                    <li key={v} className="flex items-start gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary mt-1.5" />
                      <span className="text-[13px] font-medium text-content-muted leading-tight">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════
              COLUNA DIREITA — Título (Desktop), Valores (Desktop) e CTA
          ═══════════════════════════════════════ */}
          <div className="flex flex-col gap-8 lg:pt-4">
            
            {/* Título (DESKTOP) */}
            <div ref={titleRef} className={cn('hidden lg:block fade-up', titleVisible && 'visible')}>
              <SectionTitle
                tag="Sobre a HomeX"
                titulo="Tecnologia de ponta com atendimento <span style='color:var(--color-primary)'>personalizado</span>"
                subtitulo="Somos especializados em transformar residências comuns em lares inteligentes de alto padrão, com foco em segurança, conforto e economia de energia."
                align="left"
              />
            </div>

            {/* Valores APENAS NO DESKTOP */}
            <div className={cn('hidden lg:block rounded-2xl bg-bg-dark/[0.03] p-5 border-l-4 border-primary/40 fade-up d2', titleVisible && 'visible')}>
              <h4 className="text-xs uppercase tracking-widest font-bold text-content mb-4">
                Nossos Valores
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {VALORES.map((v) => (
                  <li key={v} className="flex items-start gap-2.5">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary mt-1.5" />
                    <span className="text-[13px] font-medium text-content-muted leading-tight">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA — Centralizado no mobile */}
            <div className={cn('mt-4 lg:mt-6 flex justify-center lg:justify-start fade-up d4', (titleVisible || mobileTitleVisible) ? 'visible' : '')}>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-semibold text-white shadow-md-custom transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Fale com um especialista
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
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