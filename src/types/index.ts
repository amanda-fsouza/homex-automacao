// ─── Serviços ─────────────────────────────────────────────
export interface Servico {
  id: string
  titulo: string
  descricao: string
  icone: string
  beneficios: string[]
  imagem?: string
}

// ─── FAQ ──────────────────────────────────────────────────
export interface FAQ {
  pergunta: string
  resposta: string
}

// ─── Benefícios ───────────────────────────────────────────
export interface BeneficioItem {
  icone: string
  titulo: string
  descricao: string
}

// ─── Como Funciona ────────────────────────────────────────
export interface PassoComoFunciona {
  numero: string
  titulo: string
  descricao: string
}

// ─── Formulário ───────────────────────────────────────────
export interface FormularioContato {
  nome: string
  telefone: string
  email: string
  mensagem: string
}

export interface FormularioStatus {
  loading: boolean
  success: boolean
  error: string | null
}

// ─── Navegação ────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}

// ─── Componentes UI ───────────────────────────────────────
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'whatsapp' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

export interface SectionTitleProps {
  tag?: string
  titulo: string
  subtitulo?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  inverted?: boolean
}

// ─── Animações ────────────────────────────────────────────
export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}