import { CONTATO, NAV_LINKS, SERVICOS } from '@/constants'
import { gerarLinkWhatsApp } from '@/lib/utils'

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"

// Primeiros 6 serviços para o footer
const SERVICOS_FOOTER = SERVICOS.slice(0, 6)

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-bg-dark text-white">
      {/* Corpo principal */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:gap-8">

          {/* Coluna 1: Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5 items-center text-center lg:items-start lg:text-left">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2.5 no-underline w-fit">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary shadow-[0_4px_14px_rgba(45,158,127,0.35)]">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill="white" />
                  <circle cx="12" cy="13" r="2" fill="rgba(255,255,255,0.45)" />
                </svg>
              </div>
              <span className="font-display text-[1.15rem] font-bold tracking-tight text-white">
                Home<span className="text-primary">X</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              Automação residencial de alto padrão em São José dos Campos e região. Tecnologia, segurança e conforto ao alcance do seu celular.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-3">
              <a
                href={CONTATO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram HomeX"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/60 transition-all duration-200 hover:bg-primary hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={gerarLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp HomeX"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/60 transition-all duration-200 hover:bg-[#25D366] hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={WA_PATH} />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Navegação</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Serviços</p>
            <ul className="flex flex-col gap-2.5">
              {SERVICOS_FOOTER.map((s) => (
                <li key={s.id}>
                  <a
                    href={`?servico=${s.id}#servicos`}
                    className="text-sm text-white/60 transition-colors hover:text-primary no-underline"
                  >
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Contato</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={gerarLinkWhatsApp()} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 transition-colors hover:text-primary no-underline">
                  (12) 99641-4102
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTATO.email}`} className="text-sm text-white/60 transition-colors hover:text-primary no-underline break-all">
                  {CONTATO.email}
                </a>
              </li>
              <li>
                <p className="text-sm text-white/60">{CONTATO.endereco}</p>
              </li>
              <li>
                <p className="text-sm text-white/60">{CONTATO.horario}</p>
              </li>
            </ul>

            {/* CTA WhatsApp */}
            <a
              href={gerarLinkWhatsApp('Olá! Gostaria de solicitar um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-xs font-semibold text-white no-underline shadow-md-custom transition-all duration-300 hover:scale-105 hover:shadow-lg-custom active:scale-95"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d={WA_PATH} />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/8">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/35">
            © {ano} HomeX Automação. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/25">
            Desenvolvido por{' '}
            <a
              href="https://instagram.com/bruvedigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-primary no-underline font-semibold"
            >
              Bruve Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}