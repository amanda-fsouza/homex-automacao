import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatarTelefone(telefone: string): string {
  return telefone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4')
}

export function gerarLinkWhatsApp(mensagem?: string): string {
  const numero = '5512996414102'
  const texto = mensagem || 'Olá! Vim pelo site da HomeX e gostaria de mais informações.'
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
}

export function gerarLinkInstagram(): string {
  return 'https://instagram.com/homexautomacao'
}