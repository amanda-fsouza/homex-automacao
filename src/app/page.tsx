import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Servicos from '@/components/sections/Servicos'
import Diferenciais from '@/components/sections/Diferenciais'
import Sobre from '@/components/sections/Sobre'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'
import Localizacao from '@/components/sections/Localizacao'
import BotaoWhatsApp from '@/components/ui/BotaoWhatsApp'

export default function Home() {
  return (
    // Adicionamos o overflow-x-hidden aqui para cortar qualquer vazamento lateral
    <main className="overflow-x-hidden w-full relative flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Servicos />
      <Diferenciais />
      <Sobre />
      <FAQ />
      <CTAFinal />
      <Localizacao />
      <Footer />
      
      {/* O Botão WhatsApp geralmente tem position fixed, então não será afetado pelo overflow do main */}
      <BotaoWhatsApp />
    </main>
  )
}