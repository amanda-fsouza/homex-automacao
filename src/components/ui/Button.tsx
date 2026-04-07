import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  target,
  rel,
  disabled = false,
  loading = false,
  fullWidth = false,
}: ButtonProps) {

  // O cn() lida perfeitamente com strings e condicionais
  const base = cn(
    'inline-flex items-center justify-center gap-2',
    'font-display font-semibold rounded-full', // Adicionei font-display para puxar a sua fonte Outfit
    'transition-all duration-300',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    fullWidth && 'w-full'
  )

  // Usando as classes geradas pelo @theme (ex: bg-primary em vez de bg-(--primary))
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover hover:scale-105 hover:shadow-md-custom active:scale-95',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:scale-105 active:scale-95',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ebe5a] hover:scale-105 hover:shadow-md active:scale-95',
    ghost: 'text-primary bg-transparent hover:bg-primary-light active:scale-95',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm lg:text-base',
    lg: 'px-8 py-4 text-base lg:text-lg',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  const content = (
    <>
      {loading && (
        <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button disabled={disabled || loading} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}