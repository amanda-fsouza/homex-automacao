'use client'

import { useState, useEffect } from 'react'
import { gerarLinkWhatsApp } from '@/lib/utils'
import { NAV_LINKS, SERVICOS } from '@/constants'

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [servicosAberto, setServicosAberto] = useState(false)
  const [servicosMobileAberto, setServicosMobileAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuAberto])

  return (
    <>
      {/* ── Header ── */}
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 py-2.5 shadow-sm backdrop-blur-md' : 'bg-transparent py-4'}`}>

        {/* 👇 CORREÇÃO: max-w-480 para igualar com o Hero e evitar que o px-70 esprema o conteúdo */}
        <div className="mx-auto flex w-full max-w-480 items-center justify-between px-6 lg:px-20 2xl:px-70">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 no-underline">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary shadow-[0_4px_14px_rgba(45,158,127,0.35)]">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill="white" />
                <circle cx="12" cy="13" r="2" fill="rgba(255,255,255,0.45)" />
              </svg>
            </div>
            <span className={`font-display text-[1.15rem] font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-content' : 'text-white'}`}>
              Home<span className="text-primary">X</span>
            </span>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map(link => {
              const active = activeSection === link.href.replace('#', '')
              const isServicos = link.href === '#servicos'

              if (isServicos) return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicosAberto(true)}
                  onMouseLeave={() => setServicosAberto(false)}
                >
                  <a
                    href={link.href}
                    className={`relative pb-1 font-display text-base font-bold no-underline transition-colors duration-300 inline-flex items-center gap-1
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                      ${active ? 'text-primary after:w-full' : scrolled ? 'text-content' : 'text-white/90'}`}
                  >
                    {link.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`h-3.5 w-3.5 transition-transform duration-200 ${servicosAberto ? 'rotate-180' : ''}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>

                  {/* Dropdown */}
                  <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${servicosAberto ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'}`}>
                    <div className="w-56 rounded-2xl border border-white/10 bg-white/95 backdrop-blur-xl shadow-[0_16px_48px_rgba(0,0,0,0.18)] p-2">
                      {SERVICOS.map(s => (
                        <a
                          key={s.id}
                          href={`?servico=${s.id}#servicos`}
                          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 no-underline transition-all duration-150 hover:bg-primary/8 hover:text-primary"
                        >
                          <span className="text-base leading-none">{s.icone}</span>
                          {s.titulo}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 font-display text-base font-bold no-underline transition-colors duration-300 
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full 
                    ${active ? 'text-primary after:w-full' : scrolled ? 'text-content' : 'text-white/90'}`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex">
            <a
              href={gerarLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white no-underline shadow-[0_4px_16px_rgba(45,158,127,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_6px_20px_rgba(45,158,127,0.45)] active:scale-95"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d={WA_PATH} /></svg>
              Fale Conosco
            </a>
          </div>

          {/* Hambúrguer - Visível apenas quando o menu mobile está fechado */}
          <button
            onClick={() => setMenuAberto(true)}
            className={`flex flex-col gap-1.25 border-none bg-transparent p-2 md:hidden cursor-pointer ${menuAberto ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Abrir menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`block h-0.5 w-6 rounded-full transition-colors duration-300 ${scrolled ? 'bg-content' : 'bg-white'}`}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── Menu Mobile Fullscreen (Vidro Transparente Escuro) ── */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/80 backdrop-blur-xl transition-transform duration-500 ease-in-out ${menuAberto ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* 👇 Botão de Fechar "X" Adicionado Novamente */}
        <button
          onClick={() => setMenuAberto(false)}
          className="absolute right-6 top-6 border-none bg-transparent p-2 cursor-pointer transition-transform hover:scale-110 active:scale-95"
          aria-label="Fechar menu"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Links */}
        {NAV_LINKS.map((link, i) => {
          const active = activeSection === link.href.replace('#', '')
          const isServicos = link.href === '#servicos'

          if (isServicos) return (
            <div key={link.href} className="flex flex-col items-center gap-3" style={{ opacity: menuAberto ? 1 : 0, transform: menuAberto ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.3s', transitionDelay: menuAberto ? `${i * 60}ms` : '0ms' }}>
              <button
                onClick={() => setServicosMobileAberto(v => !v)}
                className={`font-display text-[clamp(1.6rem,5vw,2rem)] font-bold transition-all duration-200 inline-flex items-center gap-2 bg-transparent border-none cursor-pointer ${active ? 'text-primary' : 'text-white'}`}
              >
                {link.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`h-6 w-6 transition-transform duration-200 ${servicosMobileAberto ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicosMobileAberto && (
                <div className="grid grid-cols-2 gap-2 px-6 max-h-64 overflow-y-auto">
                  {SERVICOS.map(s => (
                    <a
                      key={s.id}
                      href={`?servico=${s.id}#servicos`}
                      onClick={() => setMenuAberto(false)}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-3 py-2.5 text-xs font-semibold text-white/80 no-underline transition-all hover:bg-primary hover:text-white hover:border-primary"
                    >
                      <span>{s.icone}</span>
                      {s.titulo}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className={`font-display text-[clamp(1.6rem,5vw,2rem)] font-bold no-underline transition-all duration-200 ${active ? 'text-primary' : 'text-white'}`}
              style={{ opacity: menuAberto ? 1 : 0, transform: menuAberto ? 'translateY(0)' : 'translateY(16px)', transitionDelay: menuAberto ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          )
        })}

        {/* CTA WhatsApp Mobile */}
        <a
          href={gerarLinkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuAberto(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-display text-base font-semibold text-white no-underline shadow-[0_4px_16px_rgba(37,211,102,0.3)] transition-all duration-300 active:scale-95"
          style={{
            opacity: menuAberto ? 1 : 0,
            transform: menuAberto ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: menuAberto ? `${NAV_LINKS.length * 60}ms` : '0ms',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d={WA_PATH} /></svg>
          Falar no WhatsApp
        </a>
      </div>
    </>
  )
}