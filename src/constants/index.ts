import { Servico, FAQ, BeneficioItem, PassoComoFunciona } from '@/types'

// ─── Contato ─────────────────────────────────────────────
export const CONTATO = {
  whatsapp: '5512996414102',
  email: 'contato@homexautomacao.com.br',
  instagram: 'https://instagram.com/homexautomacao',
  endereco: 'Av. Estevan Corbani, 304 - Jacareí, SP',
  horario: 'Seg–Sex: 08h às 18h',
} as const

export const WHATSAPP_MSG_PADRAO =
  'Olá! Vim pelo site da HomeX e gostaria de mais informações.'

export const WHATSAPP_MSG_ORCAMENTO =
  'Olá! Gostaria de solicitar um orçamento para automação residencial.'

// ─── Navegação ────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Início',       href: '#inicio' },
  { label: 'Serviços',     href: '#servicos' },
  { label: 'Benefícios',   href: '#beneficios' },
  { label: 'Sobre',        href: '#sobre' },
  { label: 'Contato',      href: '#contato' },
] as const

// ─── Serviços ─────────────────────────────────────────────
export const SERVICOS: Servico[] = [
  {
    id: 'aspiracao-central',
    titulo: 'Aspiração Central',
    descricao: 'Sistema de aspiração integrado à automação residencial, com motor instalado em local discreto, reduzindo o ruído nos ambientes. As tomadas distribuídas pela casa permitem uma limpeza prática, eficiente e silenciosa em todos os espaços.',
    icone: '🌀',
    beneficios: [
      'Sem ruído nos ambientes',
      'Filtração superior ao aspirador convencional',
      'Acionamento automatizado por rotinas',
      'Instalação discreta e embutida',
      'Integração com o sistema de automação',
    ],
  },
  {
    id: 'rede-local',
    titulo: 'Sistema de Rede Local',
    descricao: 'Infraestrutura de rede cabeada e Wi-Fi de alta performance para garantir conectividade estável em todos os ambientes.',
    icone: '🌐',
    beneficios: [
      'Cobertura Wi-Fi em 100% da residência',
      'Rede cabeada de alta velocidade',
      'Segmentação de redes (pessoal, visitantes)',
      'Equipamentos de nível profissional',
      'Sem pontos cegos de sinal',
    ],
  },
  {
    id: 'cameras',
    titulo: 'Sistema de Câmeras',
    descricao: 'Monitoramento em tempo real via Wi-Fi com acesso remoto pelo smartphone. Visão noturna, detecção de movimento e gravação em nuvem.',
    icone: '📷',
    beneficios: [
      'Acesso remoto 24/7 pelo app',
      'Gravação em nuvem ou local',
      'Detecção inteligente de movimento',
      'Visão noturna colorida',
      'Alertas em tempo real',
    ],
  },
  {
    id: 'controle-acesso',
    titulo: 'Controle de Acesso',
    descricao: 'Gerencie entradas e saídas da sua residência com total segurança. Portões, cancelas e interfones integrados ao seu smartphone.',
    icone: '🚪',
    beneficios: [
      'Abertura remota de portões e cancelas',
      'Histórico completo de acessos',
      'Integração com câmeras e interfone',
      'Acesso por app, cartão ou biometria',
      'Bloqueio de emergência remoto',
    ],
  },
  {
    id: 'fechaduras',
    titulo: 'Fechaduras Eletrônicas',
    descricao: 'Abra e feche portas pelo smartphone, biometria ou senha. Esqueça as chaves e tenha controle total sobre quem entra na sua casa.',
    icone: '🔐',
    beneficios: [
      'Abertura por app, biometria ou senha',
      'Histórico de entradas e saídas',
      'Acesso temporário para visitantes',
      'Integração com câmeras e alarme',
      'Bloqueio remoto de emergência',
    ],
  },
  {
    id: 'audio-video',
    titulo: 'Sistema de Áudio e Vídeo',
    descricao: 'Distribua música e vídeo por toda a casa com qualidade profissional. Controle por ambiente, integração com streaming e comando de voz.',
    icone: '🔊',
    beneficios: [
      'Controle independente por ambiente',
      'Integração com Spotify, Apple Music e mais',
      'Home theater centralizado',
      'Controle por voz ou app',
      'Experiência de entretenimento imersiva',
    ],
  },
  {
    id: 'ar-condicionado',
    titulo: 'Automação do Ar-Condicionado',
    descricao: 'Ajuste a temperatura remotamente, programe horários e economize energia automaticamente. Conforto térmico inteligente.',
    icone: '❄️',
    beneficios: [
      'Ligue antes de chegar em casa',
      'Programação noturna automática',
      'Economia de energia com horários',
      'Controle por voz',
      'Monitoramento de consumo',
    ],
  },
  {
    id: 'persianas-cortinas',
    titulo: 'Persianas, Cortinas e Venezianas',
    descricao: 'Automatize a abertura e fechamento das suas proteções solares. Programe horários, integre com a iluminação e simule presença.',
    icone: '🪟',
    beneficios: [
      'Abertura e fechamento programados',
      'Controle por app ou voz',
      'Integração com sistema de iluminação',
      'Simulação de presença',
      'Proteção solar e economia de energia',
    ],
  },
  {
    id: 'lareira',
    titulo: 'Automação de Lareira',
    descricao: 'Controle sua lareira com segurança e praticidade pelo smartphone. Acione, regule a chama e programe horários remotamente.',
    icone: '🔥',
    beneficios: [
      'Acionamento remoto pelo app',
      'Regulagem de intensidade da chama',
      'Agendamento por horário',
      'Desligamento automático por segurança',
      'Integração com rotinas da casa',
    ],
  },
  {
    id: 'piscina',
    titulo: 'Piscinas, Hidro e Jacuzzi',
    descricao: 'Controle bomba, iluminação, aquecimento e tratamento da água pelo smartphone. Sua área de lazer sempre pronta para você.',
    icone: '🏊',
    beneficios: [
      'Controle da bomba e filtragem remotamente',
      'Iluminação RGB integrada',
      'Agendamento de ciclos automáticos',
      'Controle de aquecimento da água',
      'Automação do sistema de tratamento',
    ],
  },
]

// ─── Como Funciona ────────────────────────────────────────
export const COMO_FUNCIONA: PassoComoFunciona[] = [
  {
    numero: '01',
    titulo: 'Entendimento das Necessidades',
    descricao: 'Analisamos seu estilo de vida e objetivos para o projeto.',
  },
  {
    numero: '02',
    titulo: 'Projeto Personalizado',
    descricao: 'Elaboramos um projeto sob medida com os dispositivos ideais para o seu lar e orçamento.',
  },
  {
    numero: '03',
    titulo: 'Preparação e Infraestrutura',
    descricao: 'Organizamos toda a parte técnica para receber a automação.',
  },
  {
    numero: '04',
    titulo: 'Instalação e Configuração',
    descricao: 'Implementamos e integramos todos os dispositivos.',
  },
  {
    numero: '05',
    titulo: 'Entrega e Suporte',
    descricao: 'Realizamos testes, apresentamos o sistema e oferecemos suporte contínuo.',
  },
]

// ─── Benefícios ───────────────────────────────────────────
export const BENEFICIOS: BeneficioItem[] = [
  {
    icone: '🛡️',
    titulo: 'Segurança Avançada',
    descricao: 'Monitoramento em tempo real e controle de acessos para sua total tranquilidade.',
  },
  {
    icone: '⚡',
    titulo: 'Economia de Energia',
    descricao: 'Automações inteligentes que evitam desperdícios e reduzem sua conta de luz.',
  },
  {
    icone: '📱',
    titulo: 'Fácil Usabilidade',
    descricao: 'Controle tudo pelo smartphone com interfaces intuitivas e simples.',
  },
  {
    icone: '🏗️',
    titulo: 'Sem Obras',
    descricao: 'Instalação rápida e limpa, sem quebrar paredes ou fazer reformas.',
  },
  {
    icone: '🔗',
    titulo: 'Totalmente Integrado',
    descricao: 'Todos os dispositivos conectados e funcionando em harmonia.',
  },
  {
    icone: '🏆',
    titulo: 'Melhores Equipamentos',
    descricao: 'Trabalhamos com as melhores marcas do mercado com garantia total.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────
export const FAQ_ITEMS: FAQ[] = [
  {
    pergunta: 'Por que contratar um profissional em vez de tentar instalar sozinho?',
    resposta:
      'A automação profissional garante que os dispositivos não sobrecarreguem seu Wi-Fi e que a instalação elétrica seja segura. Além da parte técnica, eu configuro toda a inteligência do sistema, garantindo que aparelhos de marcas diferentes funcionem em harmonia, sem que você perca tempo com falhas de conexão.',
  },
  {
    pergunta: 'O que exatamente pode ser automatizado na minha casa?',
    resposta:
      'Praticamente tudo que é ligado à energia! Como prestador, eu integro iluminação, ar-condicionado, persianas, TVs, sistemas de som, fechaduras, câmeras, etc. O objetivo é que você controle tudo por um único aplicativo ou por comandos de voz (Alexa/Google), facilitando o seu dia a dia.',
  },
  {
    pergunta: 'Preciso quebrar paredes ou fazer grandes reformas?',
    resposta:
      'Não. Nosso foco é realizar uma instalação limpa e rápida. Na grande maioria dos projetos, utilizamos tecnologias sem fio (Wi-Fi, Bluetooth) e instalamos os módulos inteligentes diretamente nas caixas de luz ou tomadas que você já tem em casa. Tudo é feito sem quebra-quebra ou poeira.',
  },
  {
    pergunta: 'Posso automatizar uma casa que já está construída?',
    resposta:
      'Com certeza! A maioria dos nossos projetos é em residências já construídas. Nossa tecnologia se adapta a qualquer tipo de imóvel.',
  },
  {
    pergunta: 'Eu posso comprar os equipamentos na internet e você apenas instala?',
    resposta:
      'Sim! Nós oferecemos total flexibilidade. Você pode comprar os dispositivos por conta própria e contratar apenas a nossa mão de obra técnica para a instalação e configuração, ou, se preferir, nós podemos fornecer o pacote completo (equipamentos + instalação) para a sua maior comodidade.',
  },
  {
    pergunta: 'Como funciona para pedir um orçamento?',
    resposta:
      'Nosso processo é bem simples. Primeiro, fazemos uma conversa (que pode ser online ou uma visita técnica) para entender as suas necessidades e avaliar a infraestrutura da sua casa. Depois, montamos uma proposta sob medida com as melhores soluções para o seu ambiente e o seu bolso.',
  },
]