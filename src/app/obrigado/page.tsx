import Link from 'next/link';
import type { Metadata } from 'next';

// Proteção crucial: impede que o Google indexe essa página e gere Leads falsos
export const metadata: Metadata = {
  title: 'Obrigado! | HomeX Automação',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ObrigadoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 text-center">
      <div className="mx-auto max-w-md">
        {/* Ícone de Sucesso Verde (remetendo ao WhatsApp) */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Tudo certo!
        </h1>
        
        <p className="mb-4 text-lg text-zinc-600">
          O seu WhatsApp foi aberto em uma nova aba para falarmos sobre o seu projeto com a <strong>HomeX Automação</strong>.
        </p>

        <p className="mb-8 text-sm text-zinc-500">
          Caso o WhatsApp não tenha aberto automaticamente,{' '}
          <a 
            href="https://wa.me/5512996414102" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 underline hover:text-green-700 font-medium"
          >
            clique aqui para falar conosco
          </a>.
        </p>

        <Link 
          href="/" 
          className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}