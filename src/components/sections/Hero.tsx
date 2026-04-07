'use client'

import { useEffect, useState, useRef } from 'react'
import { gerarLinkWhatsApp } from '@/lib/utils'

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"

const TYPEWRITER_TEXT = 'ao futuro.'
const TYPE_SPEED  = 80   // ms por letra ao escrever
const ERASE_SPEED = 45   // ms por letra ao apagar (mais rápido)
const PAUSE_AFTER_TYPE  = 2000 // ms de pausa após terminar de escrever
const PAUSE_AFTER_ERASE = 500  // ms de pausa antes de escrever de novo

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typed, setTyped] = useState('')
  const phaseRef = useRef<'typing' | 'pausing' | 'erasing' | 'waiting'>('waiting')
  const indexRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const tick = () => {
      if (phaseRef.current === 'waiting') {
        // Primeira vez: pequena pausa inicial e começa a escrever
        phaseRef.current = 'typing'
        timerRef.current = setTimeout(tick, 700)
        return
      }

      if (phaseRef.current === 'typing') {
        indexRef.current += 1
        setTyped(TYPEWRITER_TEXT.slice(0, indexRef.current))
        if (indexRef.current >= TYPEWRITER_TEXT.length) {
          phaseRef.current = 'pausing'
          timerRef.current = setTimeout(tick, PAUSE_AFTER_TYPE)
        } else {
          timerRef.current = setTimeout(tick, TYPE_SPEED)
        }
        return
      }

      if (phaseRef.current === 'pausing') {
        phaseRef.current = 'erasing'
        timerRef.current = setTimeout(tick, ERASE_SPEED)
        return
      }

      if (phaseRef.current === 'erasing') {
        indexRef.current -= 1
        setTyped(TYPEWRITER_TEXT.slice(0, indexRef.current))
        if (indexRef.current <= 0) {
          phaseRef.current = 'typing'
          timerRef.current = setTimeout(tick, PAUSE_AFTER_ERASE)
        } else {
          timerRef.current = setTimeout(tick, ERASE_SPEED)
        }
        return
      }
    }

    timerRef.current = setTimeout(tick, 700)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [mounted])

  const animClass = (delayClass: string) =>
    `transition-all duration-700 ease-in-out ${delayClass} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

  return (
    <section
      id="inicio"
      className="relative flex w-full items-center justify-center min-h-[80svh] md:min-h-145 lg:min-h-[80vh] bg-[url('/images/hero/hero-mobile.png')] md:bg-[url('/images/hero/hero.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay leve */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/55" />

      {/* Conteúdo centralizado */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 lg:px-12 pt-24 pb-14 lg:pt-28 lg:pb-18 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <p className={`mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/70 ${animClass('delay-100')}`}>
          Automação Residencial
        </p>

        {/* Título principal com typewriter em "ao futuro." */}
        <h1 className={`mb-5 text-[clamp(2.4rem,8vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-white font-display ${animClass('delay-200')}`}>
          Conecte seu lar<br />
          <span className="text-primary">
            {typed}
            <span
              className="inline-block ml-0.5 bg-primary animate-[blink_0.65s_step-end_infinite]"
              style={{ width: '3px', height: '0.82em', verticalAlign: 'middle' }}
            />
          </span>
        </h1>

        {/* CTAs */}
        <div className={`flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center ${animClass('delay-400')}`}>
          <a
            href={gerarLinkWhatsApp('Olá! Gostaria de solicitar um orçamento para automação residencial.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-90 sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-display text-sm font-semibold text-white no-underline shadow-[0_4px_28px_rgba(36,106,126,0.55)] transition-all duration-200 hover:scale-105 hover:shadow-[0_6px_32px_rgba(36,106,126,0.65)] active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 shrink-0">
              <path d={WA_PATH} />
            </svg>
            Solicitar Orçamento 
          </a>

          <a
            href="#servicos"
            className="group flex w-90 sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 font-display text-sm font-semibold text-white no-underline backdrop-blur-sm transition-all duration-200 hover:border-white/70 hover:bg-white/20 active:scale-95"
          >
            Conheça os Serviços
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Keyframe do cursor piscando */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  )
}