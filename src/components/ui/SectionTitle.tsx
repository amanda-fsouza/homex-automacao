import { cn } from '@/lib/utils'
import { SectionTitleProps } from '@/types'

export default function SectionTitle({
  tag,
  titulo,
  subtitulo,
  align = 'center',
  className,
  inverted = false,
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-3 w-full',
        alignClasses[align],
        className
      )}
    >
      {/* Tag / label acima do título */}
      {tag && (
        <span
          className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase w-fit',
            inverted
              ? 'bg-white/10 text-white'
              : 'bg-(--primary-light) text-(--primary)'
          )}
        >
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full',
              inverted ? 'bg-white' : 'bg-(--primary)'
            )}
          />
          {tag}
        </span>
      )}

      {/* Título principal */}
      <h2
        className={cn(
          'font-bold leading-tight',
          'text-[clamp(1.8rem,4vw,2.8rem)]',
          inverted ? 'text-white' : 'text-(--text)'
        )}
        dangerouslySetInnerHTML={{ __html: titulo }}
      />

      {/* Linha decorativa */}
      <div
        className={cn(
          'h-1 w-12 rounded-full bg-(--primary)',
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto'
        )}
      />

      {/* Subtítulo */}
      {subtitulo && (
        <p
          className={cn(
            'text-base lg:text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto',
            inverted ? 'text-white/70' : 'text-(--text-muted)'
          )}
        >
          {subtitulo}
        </p>
      )}
    </div>
  )
}