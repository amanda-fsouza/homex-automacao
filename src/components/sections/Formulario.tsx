'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { SERVICOS } from '@/constants'

const SERVICOS_OPCOES = [
  'Câmeras de Segurança',
  'Fechaduras Eletrônicas',
  'Controle de Acesso',
  'Áudio e Vídeo (Som Ambiente)',
  'Automação de Ar-Condicionado',
  'Persianas e Cortinas',
  'Aspiração Central',
  'Sistema de Rede Local',
  'Automação de Lareira',
  'Piscina, Hidro e Jacuzzi',
  'Projeto Completo (casa inteligente)',
  'Não sei ainda / Quero conhecer',
]

interface FormData {
  nome: string
  telefone: string
  servico: string
  mensagem: string
}

function formatarTelefoneInput(valor: string): string {
  const nums = valor.replace(/\D/g, '').slice(0, 11)
  if (nums.length <= 2) return nums
  if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`
  if (nums.length <= 11) return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`
  return valor
}

export function Formulario() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({ nome: '', telefone: '', servico: '', mensagem: '' })
  const [loading, setLoading] = useState(false)
  const [focado, setFocado] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'telefone') {
      setForm(f => ({ ...f, telefone: formatarTelefoneInput(value) }))
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Monta mensagem personalizada para o WhatsApp
    const partes = [`Olá! Me chamo *${form.nome}*.`]
    if (form.servico) partes.push(`Tenho interesse em: *${form.servico}*.`)
    if (form.telefone) partes.push(`Meu contato: *${form.telefone}*.`)
    if (form.mensagem) partes.push(`\n${form.mensagem}`)
    partes.push('\nVim pelo site da HomeX Automação.')

    const mensagem = partes.join(' ')
    const urlWA = `https://wa.me/5512996414102?text=${encodeURIComponent(mensagem)}`

    // Pulo Duplo: abre WA em nova aba + redireciona aba atual p/ /obrigado
    window.open(urlWA, '_blank')
    router.push('/obrigado')
  }

  const inputBase = (campo: string) => cn(
    'w-full rounded-xl border px-4 py-3.5 font-body text-sm text-content outline-none transition-all duration-200 bg-white placeholder:text-content-light',
    focado === campo
      ? 'border-primary ring-2 ring-primary/15 shadow-sm'
      : 'border-border-color hover:border-primary/40'
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Nome */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-xs font-semibold uppercase tracking-wide text-content-muted">
          Seu nome <span className="text-primary">*</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          autoComplete="name"
          placeholder="Ex: João da Silva"
          required
          value={form.nome}
          onChange={handleChange}
          onFocus={() => setFocado('nome')}
          onBlur={() => setFocado(null)}
          className={inputBase('nome')}
        />
      </div>

      {/* Telefone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="telefone" className="text-xs font-semibold uppercase tracking-wide text-content-muted">
          WhatsApp / Telefone <span className="text-primary">*</span>
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          autoComplete="tel"
          placeholder="(12) 99999-9999"
          required
          value={form.telefone}
          onChange={handleChange}
          onFocus={() => setFocado('telefone')}
          onBlur={() => setFocado(null)}
          className={inputBase('telefone')}
        />
      </div>

      {/* Serviço de interesse */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="servico" className="text-xs font-semibold uppercase tracking-wide text-content-muted">
          O que você precisa? <span className="text-primary">*</span>
        </label>
        <select
          id="servico"
          name="servico"
          required
          value={form.servico}
          onChange={handleChange}
          onFocus={() => setFocado('servico')}
          onBlur={() => setFocado(null)}
          className={cn(inputBase('servico'), 'cursor-pointer appearance-none')}
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
        >
          <option value="" disabled>Selecione um serviço...</option>
          {SERVICOS_OPCOES.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Mensagem opcional */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-xs font-semibold uppercase tracking-wide text-content-muted">
          Mensagem <span className="text-content-light font-normal normal-case tracking-normal">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          placeholder="Conte um pouco sobre seu projeto ou dúvidas..."
          value={form.mensagem}
          onChange={handleChange}
          onFocus={() => setFocado('mensagem')}
          onBlur={() => setFocado(null)}
          className={cn(inputBase('mensagem'), 'resize-none')}
        />
      </div>

      {/* Botão de envio */}
      <button
        type="submit"
        disabled={loading}
        className="group mt-1 flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 font-display text-base font-bold text-white shadow-md-custom transition-all duration-300 hover:scale-[1.02] hover:shadow-lg-custom active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Abrindo WhatsApp...
          </>
        ) : (
          <>
            {/* Ícone WhatsApp */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp Agora
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      {/* Microcopy de segurança */}
      <p className="text-center text-xs text-content-light">
        🔒 Seus dados são protegidos.
      </p>
    </form>
  )
}
