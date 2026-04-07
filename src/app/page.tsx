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
    <main>
      <Navbar />
      <Hero />
      <Servicos />
      <Diferenciais />
      <Sobre />
      <FAQ />
      <CTAFinal />
      <Localizacao />
      <Footer />
      <BotaoWhatsApp />
    </main>
  )
}
